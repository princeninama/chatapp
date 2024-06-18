import React from "react";
import useConversation from "../../Zustand/Conversation";
import { useSocketContext } from "../context/SocketContext";

const Conversation = ({ conversation }) => {
  const { setSelectConversation, selectConversation } = useConversation();
  const {onlineUsers}=useSocketContext();
  const isonline=onlineUsers.includes(conversation._id)
  console.log(onlineUsers)
  const isSelected =
    selectConversation && selectConversation._id === conversation._id;

  return (
    <div
      className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
        isSelected ? "bg-sky-500" : ""
      }`}
      onClick={() => setSelectConversation(conversation)}
    >
      <div className="flex items-center">
        <div className="bg-gray-800 text-white font-mono h-auto w-auto rounded-full overflow-hidden">
          <img
            src={conversation.imageData}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
        <div className="bg-gray-500 text-xl text-white w-full px-2 py-2 mx-2 my-2 rounded-xl">
          {conversation.username}
        </div>
      </div>
    </div>
  );
};

export default Conversation;
