import React from 'react'
import useConversation from '../../Zustand/Conversation'
const Conversation = ({conversation}) => {
  const {selectedConversation,setSelectedConversation}=useConversation();
  const isselected = selectedConversation?._id===conversation._id;

  return (
    <div>
       <div className="flex" onClick={()=>
        {
          setSelectedConversation(conversation);
        }
       }>
        <div className="rounded-full bg-orange-300 h-12 w-12 my-2"></div>
        <div className="bg-white text-xl w-full px-2 py-2 mx-2 my-2 rounded-xl">
        {conversation.fullname}
        </div>
      </div>
    </div>
  )
}

export default Conversation
