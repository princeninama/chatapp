import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import {UseSendMessage} from "../../API/Messageinfo.js"
const Type = () => {
  const [message, setMessage] = useState("");
  const sendMessage = UseSendMessage();
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <div className="bg-slate-300  h-18 py-2">
      <div className="bg-white p-2 flex w-full  mx-3">
        <input type="text" value={message} placeholder="Enter Message" className="w-[70%] px-2" />
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-300" onClick={handleSubmit}>
          <IoSend />
        </div>
      </div>
    </div>
  );
};

export default Type;
