import React, { useEffect } from "react";
import Message from "./Message";
import Type from "./Type";
import Msg from "./Msg";
import { useState } from "react";
import Nothing from "./Nothing";
import useConversation from "../../Zustand/Conversation";
const Chat = () => {
  const { selectConversation, setSelectConversation } = useConversation();
  console.log("at chat", selectConversation);
  useEffect(() => {
    return () => {
      // console.log("Cleanup: setting selectConversation to null");
      setSelectConversation(null);
    };
  }, [setSelectConversation]);

  return (
    <div className="bg-[#77797d] w-full h-screen overflow-auto">
      {/* <div className="flex bg-slate-300 fixed w-full top-0 "> */}
      {selectConversation ? (
        <div className="">
          <div className="flex fixed bg-slate-300 top-0 w-full">
            <div className=" mx-3 my-1 h-12 w-12 rounded-full overflow-hidden ">
              <img src={selectConversation.imageData} alt="" className="object-conver"/>
            </div>
            <div className=" text-xl w-full px-2 py-2 mx-2 my-2 ">
              {selectConversation.fullname}
            </div>
          </div>
          <div className="mt-20 w-full">
            <Msg />
          </div>
          <div className="bottom-0 fixed w-full">
            <Type />
          </div>
        </div>
      ) : (
        <Nothing />
      )}
    </div>
    // </div>
  );
};
export default Chat;
