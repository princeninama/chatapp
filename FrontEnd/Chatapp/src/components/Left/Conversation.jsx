import React from "react";
import useConversation from "../../Zustand/Conversation";

const Conversation = ({ conversation }) => {
  const { setSelectConversation, selectConversation } = useConversation();
  const isSelected = selectConversation && selectConversation._id === conversation._id;

  return (
    // <div
    //   className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
    //   ${isSelected ? "bg-sky-500" : ""}
    // `}
    //   onClick={() => setSelectConversation(conversation)}
    // >
    //   <div
    //     className="flex"
    //     onClick={() => {
    //       setSelectConversation(conversation);
    //     }}
    //   >
    //     <div className="rounded-full bg-orange-300 h-12 w-12 my-2">helo</div>
    //     <div className="bg-white text-xl w-full px-2 py-2 mx-2 my-2 rounded-xl">
    //       {conversation.username}
    //     </div>
    //   </div>
    // </div>
    <>
    <h1>
      Hello
    </h1>
    </>
  );
};

export default Conversation;
