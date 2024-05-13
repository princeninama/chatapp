import React from "react";
import Logout from "./Logout"
import Baate from "./Baate";
import Conversation from "./Conversation";
import { GetUserForSidebar } from "../../API/userInfo";
import Search from "./Search";
const Sidebar = () => {
  const conversation=GetUserForSidebar();
  console.log(conversation);
  return (
    <div className="bg-black w-[30rem] h-screen overflow-auto">
      <div className="bg-white w-full flex px-2 py-2 fixed">
        {/* <label htmlFor="username" className="mt-2">
          <CiSearch />
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="w-64 mx-2 border-2 border-black px-2 rounded-lg"
        />
        <button className="bg-blue-300 p-1 px-3 rounded-lg">Get</button> */}
        <Search/>
      </div>
      <div className="mt-14">
      <Baate/>
      </div>
      <Logout/>
    </div>
  );
};

export default Sidebar;
