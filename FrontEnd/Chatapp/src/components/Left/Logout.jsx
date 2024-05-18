import React from "react";
import { BiLogOut } from "react-icons/bi";
import { logout } from "../../API/userInfo.js";
import toast from "react-hot-toast";
import "../../nothing.css"
import { useAuthContext } from "../context/Userauth.jsx";
const Logout = () => {
  const { setAuthUser } = useAuthContext();
  const handleLogout = () => {
    logout(setAuthUser);
    toast.success("logged out ");
  };
  return (
    <div className=" bg-[#202121] w-[25%] h-auto fixed mt-36 bottom-0 flex pb-3 pt-3">
      <h1 className="text-2xl text-white text-center ml-12 flex items-center justify-center font-mono">
        LogOut
      </h1>
      <BiLogOut
        className="cursor-pointer size-7 bg-zinc-500 ml-32"
        onClick={handleLogout}
      />
    </div>
  );
};

export default Logout;
