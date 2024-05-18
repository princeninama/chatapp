import React from "react";
import { BiLogOut } from "react-icons/bi";
import { logout } from "../../API/userInfo.js";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/Userauth.jsx";
const Logout = () => {
  const { setAuthUser } = useAuthContext();
  const handleLogout = () => {
    logout(setAuthUser);
    toast.success("logged out ");
  };
  return (
    <div className=" bg-transparent fixed mt-36 bottom-0">
      <BiLogOut
        className="cursor-pointer size-12 bg-zinc-500"
        onClick={handleLogout}
      />
    </div>
  );
};

export default Logout;
