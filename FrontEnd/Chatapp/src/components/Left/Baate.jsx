import React from "react";
import { GetUserForSidebar } from "../../API/Messageinfo.js";
import Conversation from "./Conversation.jsx";

const Baate = () => {
  // const conversations = GetUserForSidebar();
  // console.log("in baate conversation = ", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {/* {conversations.map((conversation) => {
        <Conversation key={conversation._id} conversation={conversation} />;
      })} */}
      <Conversation/>
    </div>
  );
};

export default Baate;
