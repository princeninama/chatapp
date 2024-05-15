import React from "react";
import Logout from "./Logout";
import Baate from "./Baate";
// import Conversation from "./Conversation";
// import { GetUserForSidebar } from "../../API/userInfo";
import Search from "./Search";
import { useAuthContext } from "../context/Userauth.jsx";
const Sidebar = () => {
  const { authUser } = useAuthContext();

  // const conversation=GetUserForSidebar();
  // console.log(conversation);
  return (
    <div className="bg-black w-[30rem] h-screen overflow-auto">
      <div className="bg-white w-full flex px-2 py-2 fixed">
        <Search />
      </div>
      <div className="mt-14 text-white">
        <h1>
          Your Name Is_
          {authUser.username}
        </h1>
        <Baate />
      </div>
      <Logout />
    </div>
  );
};

export default Sidebar;
