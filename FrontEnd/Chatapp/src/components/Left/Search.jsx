import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useConversation from "../../Zustand/Conversation.js";
import { GetUserForSidebar } from "../../API/Messageinfo.js";
// import Conversation from "./Conversation.jsx";

const Search = () => {
  const [search, setSearch] = useState("");
  const { setSelectConversation,selectConversation } = useConversation();
  const  conversations  = GetUserForSidebar();

  // console.log("conversations is ",conversations)
  

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  
    // const conversation = conversations.find((conv) =>
    //   conv.username.includes(search)
    // );
    const conversation = conversations.find((conv) => conv.username === search);
    console.log("submit Here",conversation);
  
    if (conversation) {
      setSelectConversation(conversation);
      setSearch("");
      // console.log("set",selectConversation)
    } else {
      toast.error("No such user found");
    }
  };
  

  return (
    <div className="flex">
      <label htmlFor="username" className="mt-2">
        <CiSearch />
      </label>
      <input
        type="text"
        name=""
        id=""
        value={search}
        onChange={handleSearch}
        placeholder="Search"
        className="w-64 mx-2 border-2 border-black px-2 rounded-lg"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-300 p-1 px-3 rounded-lg"
      >
        Get
      </button>
    </div>
  );
};

export default Search;
