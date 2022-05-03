import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";
import { db } from "../../config/firebaseConfig";


const Post = () => {

    const [posts, setPosts] = useState([]);
    const [modalPost, setModalPosts] = useState(false);

    const showPostModal = (e) => {
        e.preventDefault();
        const target = e.target;
        const postId = target.parentElement.id;

        posts.map((data) => {
            const dataId = data.id;

            if(postId === dataId) {
                setModalPosts(data);
            }
        })
    }

    const removePostModal = () => {
        setModalPosts(null);
    }


    const visited = () => {
        const countRef = collection(db, "viewCount");
        const viewed = {
            viewed: "viewed"
        }
        addDoc(countRef, viewed);
    }


    useEffect(() => {

        let isUnmount = false;

        const postRef = collection(db, "Posts");
        const q = query(postRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
            const post = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            if(!isUnmount) {
                setPosts(post);
            }
        })

        return () => {
            isUnmount = true;
        }

    },[])

    return (
        <>
            {
                posts.length  === 0 ? (
                    <p className="noPost">No Post found ! 😒</p>
                ) : (
                    <div className="postContainer" onLoad={visited}>
                        {modalPost && (
                            <div className="post-modal">
                                <div className="modal-close-btn" onClick={removePostModal}>
                                    <div className="modal-close-btn-icon"></div>
                                </div>
                                <div className="modal-content">
                                    <div className="modal-image">
                                        <img src={modalPost.postImageUrl } alt={`${modalPost.firstName} ${modalPost.lastName}`} />
                                    </div>
                                    <div className="modal-bottom">
                                        <span>{modalPost.emoji || "💔 😔 💔"}</span>
                                    </div>
                                </div>
                            </div>
                        )} 
                        {
                            posts.map((post, index) => (
                                <div id={post.id} className={"post"} key={post.id} post-data={index}>
                                    <div>
                                        <div>
                                            <div className="post-header">
                                                <div className="post-header-content">
                                                    <div className="post-avatar">
                                                        <div className="post-avatar-container">
                                                            <img src={post.profileImageUrl} alt={`${post.firstName} ${post.lastName}`} />
                                                        </div>
                                                    </div>
                                                    <div className="post-avatar-name-and-date">
                                                        {post.firstName && (
                                                            <div className="post-avatar-name-container">
                                                                <span className="name">{`${post.firstName} ${post.lastName}`  || "Annonymus"}</span>
                                                            </div>
                                                        )}
                                                        {post.createdDate && (
                                                            <div className="post-date-container">
                                                                <span className="date">{post.createdDate || "Undefined"}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-body">
                                                <div className="post-body-container">
                                                    {post.Title && (
                                                        <div className="post-title">
                                                            <h4>{post.Title}</h4>
                                                        </div>
                                                    )}        
                                                    {post.textBody && (
                                                        <div className="post-context">
                                                            <ReadMoreReact text={post.textBody} min={50} ideal={100} max={150} readMoreText={"..Read More"} />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {post.postImageUrl && (
                                                <div className="post-image">
                                                    <div className="_f">
                                                        <div className="_g">
                                                            <div className="_h">
                                                                <a id={`${post.id}`} href={`/tanjila/posts/#${post.id}`}>
                                                                    <img src={post.postImageUrl} alt={post.firstName} onClick={(e) => showPostModal(e)} />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <div className="postF">
                                                <div className="f">
                                                    {post.emoji || "💔 😔 💔"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </>
    );
}
 
export default Post;
