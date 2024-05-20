import React from "react";
import { GetUserForSidebar } from "../../API/Messageinfo.js";
import Conversation from "./Conversation.jsx";

const Baate = () => {
  const conversations = GetUserForSidebar();

  return (
    <div className="py-2 flex flex-col">
      {conversations.map((conversation) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}
    </div>
  );
};

export default Baate;
