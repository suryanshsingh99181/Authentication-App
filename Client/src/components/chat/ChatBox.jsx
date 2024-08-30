import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/chatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import moment from "moment";
import InputEmoji from "react-input-emoji";
import { FiSend } from "react-icons/fi";

const ChatBox = () => {

    const {user}=useContext(AuthContext);
    const {currentChat, messages,isMessagesLoading, sendTextMessage}=useContext(ChatContext)
    const {recipientUser}=useFetchRecipientUser(currentChat,user)
    const [textMessage,setTextMessage]=useState("")

    // if(!recipientUser)
    //     return(<p style={{textAlign:"center",width:"100%"}}>No Conversation Selected yet</p>);
    if(isMessagesLoading)
        return(<p style={{textAlign:"center",width:"100%"}}>Loading...</p>);

    return ( 
    <>
        <div className="w-full">
        <h1 className="bg-slate-300">ChatBox</h1>
        
        <h1 className="bg-slate-300">Sagar{recipientUser?.name}</h1>

        <div className="h-4/5 bg-green-100">
            {messages && messages.map((message,index)=>{<div key={index} className={`${message?.senderId===user?._id ? "message self align-self-end h-4/5":"message flex-grow-0 start-0 h-4/5"} `}>
                <span>{message.text}</span>
                <span className="">{moment(message.createdAt).calendar()}</span>
            </div>})}
             <div className="w-full pt-52 flex ">
            
            <InputEmoji value={textMessage} onchange={setTextMessage}/> 
            {/* <button className=""></button> */}
            <button className="w-6 mr-4 ml-1 rounded-full" onClick={()=>{sendTextMessage(textMessage,user, currentChat._id, sendTextMessage)}}><FiSend className="w-full h-full"/></button>

            </div> 
        </div>
        
        </div>
    </> 
    );
}
 
export default ChatBox;