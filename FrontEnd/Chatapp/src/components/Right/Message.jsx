import React from "react";
import useConversation from "../../Zustand/Conversation.js";
import { useAuthContext } from "../context/Userauth";
import { extractTime } from "../utils/TIme.js";
import "../../nothing.css"
const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  // console.log("from Message ",message.message);
  const { selectConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chatu" : "chatme";
    const profilePic = fromMe
      ? authUser.ProfilePic
      : selectConversation?.ProfilePic;
  //   const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`text-black `}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          {/* <img alt="Tailwind CSS chat bubble component" src={profilePic} /> */}
        </div>
      </div>
      <div className={`${chatClassName}`}>
        {message.message}
      </div>
      <div className=" opacity-50 text-xs bg-blue-200 flex gap-1 right-0 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
