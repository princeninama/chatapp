import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { UseSendMessage } from "../../API/Messageinfo.js";
import { useAuthContext } from "../context/Userauth.jsx";
const Type = () => {
  const [message, setMessage] = useState("");
  const SendMsg = UseSendMessage();
  const { authUser } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(message);
    // if (!message) return;
    await SendMsg(message,authUser._id);
    setMessage("");
  };

  return (
    <div className="bg-slate-300  h-18 py-2">
      <div className="bg-white p-2 flex w-full  mx-3">
        <input
          type="text"
          value={message}
          placeholder="Enter Message"
          className="w-[70%] px-2"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-300"
          onClick={handleSubmit}
        >
          <IoSend />
        </div>
      </div>
    </div>
  );
};

export default Type;
