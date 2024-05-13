import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import useConversation from "../../Zustand/Conversation.js";
import GetUserForSidebar from "../../API/Messageinfo.js"
const Search = () => {
    const [search,setSearch]=useState("");
    const {setSelectedConversation}=useConversation();
    const {conversations}= GetUserForSidebar();
    const handleSubmit =(e)=>
    {
      e.preventDefault();
      const conversation=conversations.find(search);
      if(conversation)
        {
          setSelectedConversation(conversation);
          setSearch("");
        }
    }
  return (
    <div>
       <label htmlFor="username" className="mt-2">
          <CiSearch />
        </label>
        <input
          type="text"
          name=""
          id=""
          value={search}
          placeholder="Search"
          className="w-64 mx-2 border-2 border-black px-2 rounded-lg"
        />
        <button onClick={handleSubmit} className="bg-blue-300 p-1 px-3 rounded-lg">Get</button>
    </div>
  )
}

export default Search
