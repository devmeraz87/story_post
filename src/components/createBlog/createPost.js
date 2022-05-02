import { useState } from "react";
import { useForm } from "react-hook-form";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../config/firebaseConfig";
import Compressor from "compressorjs";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const CreatePost = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onTouched",
    })
    const history = useHistory();
    const [profileImageFile, setProfileImageFile] = useState("");
    const [postImageFile, setPostImageFile] = useState("");
    const [profileImageBlob, setProfileImageBlob]  = useState(null);
    const [postImageBlob, setPostImageBlob] = useState(null);
    const [showModal, setShowModal] = useState(true);

    const profileImageChange = (e) => {
        const profileImageFile = e.target.files[0];
        const blob = URL.createObjectURL(profileImageFile);
        setProfileImageBlob(blob);
        
        if(profileImageFile) {
            new Compressor(profileImageFile, {
                quality: 0.9,
                convertSize: 100000,
                convertTypes: "image/png",
                minHeight: 100,
                minWidth: 100,
                maxHeight: 100,
                maxWidth: 100,
                height: 100,
                width: 100,
                
                success(res) {
                    setProfileImageFile(res);
                }
            });
        }

        if(!profileImageFile) {
            setPostImageFile(null);
        }
    }


   const handlePostImageChange = (e) => {
       const postImageFile = e.target.files[0];
       const blob = URL.createObjectURL(postImageFile);
       setPostImageBlob(blob);


       if(postImageFile) {
           new Compressor(postImageFile, {
               quality: 0.8,
               convertSize: 100000,
               success(res) {
                setPostImageFile(res);
               }
           })
       }

       if(!postImageFile) {
           setPostImageFile(null);
       }
   }

    const onSubmit = async (data) => {
        const {firstName, lastName, Title, textBody} = data;
        const profileImage = profileImageFile;
        const postImage = postImageFile;

        const profileRef = ref(storage, `/Images/profile/${Date.now()}${profileImage.name.slice(0, 4)}`);
        const postImageRef = ref(storage, `/Images/postImage/${Date.now()}${postImage.name.slice(0, 4)}`);
        const uploadProfile = uploadBytesResumable(profileRef, profileImage);
        const uploadPostImage = uploadBytesResumable(postImageRef, postImage);

        setShowModal(true);
        
        uploadProfile.on("state_changed",  (snapshot) => {
            console.log(snapshot);
        }, (err) => {
            toast(err.message, {type: "error"});
            setShowModal(false);
        }, () => {
            getDownloadURL(uploadProfile.snapshot.ref)
                .then((url) => {
                    const profileUrl = url;
                    uploadPostImage.on("state_changed", (snapshot) => {
                        console.log(snapshot);
                    }, (err) => {
                        toast(err.message, {type: "error"});
                        setShowModal(false);
                    }, () => {
                        getDownloadURL(uploadPostImage.snapshot.ref)
                            .then((url) => {
                                const profileImageUrl = profileUrl;
                                const postImageUrl = url;

                                const postData = {
                                    firstName,
                                    lastName,
                                    Title,
                                    textBody,
                                    profileImageUrl,
                                    postImageUrl,
                                    createdAt: Timestamp.now().toDate(),
                                    createdDate: new Date().toDateString(),
                                }

                                const postRef = collection(db, "Posts");

                                addDoc(postRef, postData);

                            })
                            .then(() => {
                                toast("Sucessfully posted", {type: "success"})
                            })
                            .catch(err => {
                                toast(err.message, {type: "error"})
                                setShowModal(false);
                            })
                            .finally(() => {
                                history.push("/tanjila/posts")
                            })
                    })
                })
                .catch((err) => {
                    toast(err.message, {type: "error"})
                    setShowModal(false);
                })
        })
    }



    return (
        <>  
            <div>
                {showModal && (
                    <div className="Modal">
                        <div className="Card">
                            <h1>Creating your posts... || 😊😊</h1>
                        </div>
                    </div>
                )}
            </div>
            <div id="create-post">
                <ToastContainer />
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Create Post</span>
                        <form id="post-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" name="firstName" {...register("firstName", {required: "Frist Name is Required", maxLength: {
                                            value: 10,
                                            message: "Max name length is 10"
                                        }})}  className="form-control" placeholder="First Name" />
                                        {errors.firstName && (<p className="error">{errors.firstName.message}</p>)}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" name="lastName" {...register("lastName", {required: "Last Name is required", maxLength: {
                                            value: 10,
                                            message: "Max name length is 10"
                                        }})} className="form-control" placeholder="Last Name"/>
                                        {errors.lastName && (<p className="error">{errors.lastName.message}</p>)}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" name="Title" {...register("Title", {maxLength: {
                                            value: 100,
                                            message: "Max Title length is 100"
                                        }})} className="form-control" placeholder="Title" />
                                        {errors.Title && (<p className="error">{errors.Title.message}</p>)}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <textarea className="textBody" name="body" {...register("textBody")} id="body" placeholder="Type..."/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="file-group">
                                            <div className="form-group">
                                                <input type="file" {...register("profileImage", {required: "Profile Image is required"})} onChange={(e) => profileImageChange(e)} className="form-control-file" name="profileImage" id="profileImage" />
                                                <label className="file-label" htmlFor="profileImage">
                                                    <span>
                                                        <span className="choose-btn">
                                                            <i className="choose-btn-icon"></i>
                                                        </span>
                                                        <span className="fileName">Choose Profile</span>
                                                    </span>
                                                </label>
                                                {profileImageBlob && (
                                                    <div className="blob-container">
                                                        <img src={profileImageBlob} className="image-blob" alt="" />
                                                    </div>
                                                )}
                                                {errors.profileImage && (<p className="error">{errors.profileImage.message}</p>)}
                                            </div>
                                        </div>
                                        <div className="file-group">
                                            <div className="form-group">
                                                <input type="file" {...register("postImage", {required: "Post Image is required"})} onChange={(e) => handlePostImageChange(e)} className="form-control-file" name="postImage" id="postImage" />
                                                <label className="file-label" htmlFor="postImage">
                                                    <span>
                                                        <span className="choose-btn">
                                                            <i className="choose-btn-icon"></i>
                                                        </span>
                                                        <span className="fileName">Choose Post</span>
                                                    </span>
                                                </label>
                                                {postImageBlob && (
                                                    <div className="blob-container">
                                                        <img src={postImageBlob} className="image-blob" alt="" />
                                                    </div>
                                                )}
                                                {errors.postImage && (<p className="error">{errors.postImage.message}</p>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <div className="form-group-btn">
                                            <button type="submit" className="publish-btn">Publish</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default CreatePost;