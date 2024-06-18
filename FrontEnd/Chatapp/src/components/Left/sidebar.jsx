import React from "react";
import Logout from "./Logout";
import Baate from "./Baate";
import Conversation from "./Conversation";
import Search from "./Search";
import { useAuthContext } from "../context/Userauth.jsx";
import "../../nothing.css";

const Sidebar = () => {
  const { authUser } = useAuthContext();
  console.log(authUser);
  return (
    <div className="bg-[#202121] w-[30rem]  h-screen overflow-auto">
      <div className="fixed top-0 bg-[#202121]  z-10 w-fu">
        <div className="flex">
          <h1 className="header text-white text-3xl py-3 ml-4">
            {/* {authUser.username} */}
            ChugalKhori
          </h1>
          <h1 className="header text-white mt-10 ml-16 ">{authUser.username}</h1>
        </div>
        <div className="w-full flex px-2 py-2">
          <Search />
        </div>
      </div>
      <div className="mt-32 mb-10 text-white">
        <Baate />
      </div>
      <Logout />
    </div>
  );
};

export default Sidebar;
