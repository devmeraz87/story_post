import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";
import { CLOSING } from "ws";
import { db } from "../config/firebaseConfig";


const Message = () => {

    const [message, setMessage] = useState([]);
    const [views, setViews] = useState("");

    useEffect(() => {
        let isUnmount = false;

        const messageRef = collection(db, "Message");
        const viewedRef = collection(db, "viewCount");
        const q = query(messageRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
            const messages = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            if(!isUnmount) {
                setMessage(messages);
            }
        })

        onSnapshot(viewedRef, (snapshot) => {
            const views = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            setViews(views);
        })

        return () => {
            isUnmount = true;
        }
    },[])


    return(
        <div className="Message">
            <div className="container">
                <div className="message-content">
                    <h1 className="title">Messages</h1>
                    <div className="message-list">
                        {message.length === 0 ? (
                            <div>No Message</div>
                        ) : (
                            message.map((msg, index) => (
                                <div key={msg.id} className="Messages">
                                    <div className="message-card">
                                        <div className="message-header">
                                            <div className="message-name-and-time">
                                                {msg.firstName && (
                                                    <span className="userName">{msg.firstName} {msg.lastName}</span>
                                                )}
                                                {msg.email && (
                                                    <span className="userEmail">{msg.email}</span>
                                                )}
                                                {msg.createdTime && (
                                                    <span className="create-time">{msg.createdTime}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="messageBody">
                                            {msg.msgBody && (
                                                <div className="messageContext">
                                                    <ReadMoreReact text={msg.msgBody} min={50} ideal={100} max={150} readMoreText={"...See more"} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <br />
                    <br />
                    <h1 style={{
                        color: "#555"
                    }}>views: {views.length}</h1>
                </div>
            </div>
        </div>
    )

}



export default Message;