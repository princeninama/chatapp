import React from "react";
import Logout from "./Logout";
import Baate from "./Baate";
import Conversation from "./Conversation";
import Search from "./Search";
import { useAuthContext } from "../context/Userauth.jsx";
import "../../nothing.css";

const Sidebar = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="bg-[#202121] w-[30rem]  h-screen ">
      <div className="fixed top-0 bg-[#202121]  z-10 w-fu">
        <h1 className="header text-white text-3xl py-3 ml-4 flex">
          {/* {authUser.username} */}
          ChugalKhori
        </h1>
        <div className="w-full flex px-2 py-2">
          <Search />
        </div>
      </div>
      <div className="mt-32 text-white">
        <Baate />
      </div>
        <Logout />
    </div>
  );
};

export default Sidebar;
