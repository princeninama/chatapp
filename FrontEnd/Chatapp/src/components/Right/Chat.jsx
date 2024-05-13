import React, { useEffect } from "react";
import Message from "./Message";
import Type from "./Type";
import { useState } from "react";
import useConversation from "../../Zustand/Conversation";
const Chat = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return (
      () => {
        setSelectedConversation(null);
      },
      [setSelectedConversation]
    );
  });
  return (
    <div className="bg-green-300 w-full h-screen overflow-auto">
      <div className="flex bg-slate-300 fixed w-full top-0 ">
        <div className="rounded-full bg-orange-300 h-12 w-12 mx-3 my-1"></div>
        <div className=" text-xl w-full px-2 py-2 mx-2 my-2 ">{selectedConversation.fullname}</div>
      </div>
      <div className="mt-20 w-full">
        <Msg />
      </div>
      <div className="bottom-0 fixed w-full">
        <Type />
      </div>
    </div>
  );
};
export default Chat;
