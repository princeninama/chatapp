import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useConversation from "../../Zustand/Conversation.js";
import { GetUserForSidebar } from "../../API/Messageinfo.js";
// import Conversation from "./Conversation.jsx";

const Search = () => {
  const [search, setSearch] = useState("");
  const { setSelectConversation, selectConversation } = useConversation();
  const conversations = GetUserForSidebar();

  // console.log("conversations is ",conversations)

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const conversation = conversations.find((conv) =>
    //   conv.username.includes(search)
    // );
    const conversation = conversations.find((conv) => conv.username === search);
    console.log("submit Here", conversation);

    if (conversation) {
      setSelectConversation(conversation);
      setSearch("");
      // console.log("set",selectConversation)
    } else {
      toast.error("No such user found");
    }
  };

  return (
    <div className="flex bg-black h-12">
      <input
        type="text"
        name=""
        id=""
        value={search}
        onChange={handleSearch}
        placeholder="Search"
        className="w-auto lg:w-72 border-2 border-black px-2 rounded-lg"
      ></input>

      <button
        onClick={handleSubmit}
        className="bg-blue-300 flex justify-center items-center px-3 ml-2 rounded-lg"
      >
        <CiSearch />
      </button>
    </div>
  );
};

export default Search;
