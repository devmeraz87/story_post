import { useForm } from "react-hook-form";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import {ToastContainer, toast } from "react-toastify";



const Contact = () => {


    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onTouched"})


    const onsubmit = (data)  => {
        if(data) {
            const {firstName, lastName, email, msgBody} = data;

            const msgData = {
                firstName,
                lastName,
                email,
                msgBody,
                createdAt: Timestamp.now().toDate(),
                createdTime: new Date().toDateString()
            }

            const msgRef = collection(db, "Message");
            addDoc(msgRef, msgData)
                .then(() => {
                    toast("Message Sent sucessfully", {type: "success"})
                })
                .catch((err) => {
                    toast(err.message, {type: "error"})
                })

        }
    }

    return (
        <div className="Contact">
            <ToastContainer />
            <div className="container">
                <div className="contact-content">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Contact Me</span>
                            <form id="contact-form" onSubmit={handleSubmit(onsubmit)}>
                                <div className="form-group">
                                    <input {...register("firstName", {required: "First name is required"})} className="form-control" type="text" name="firstName" type={"text"} placeholder="First Name" />
                                    {errors.firstName && (
                                        <span className="error">{errors.firstName.message}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input {...register("lastName", {required: "Last name is required"})} className="form-control" type="text" name="lastName" type={"text"} placeholder="Last Name" />
                                    {errors.lastName && (
                                        <span className="error">{errors.lastName.message}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input {...register("email")} className="form-control" type="text" name="email" type={"text"} placeholder="Email optional" />
                                </div>
                                <div className="form-group">
                                    <textarea {...register("msgBody", {required: "Message required"})} rows={10} className="form-control form-control-textarea" name="msgBody" id="" placeholder="Your message 😊"></textarea>
                                    {errors.msgBody && (
                                        <span className="error">{errors.msgBody.message}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <div className="send-btn-flex">
                                        <button type="submit" className="send-btn">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;