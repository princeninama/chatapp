import React from "react";
import Logout from "./components/Left/Logout";
import { useAuthContext } from "./components/context/Userauth";
const Hello = () => {
  const { authUser } = useAuthContext();
  // console.log(authUser)
  return (
    <div className="text-center text-[3rem]">
      HELLO {authUser.username}
      <Logout/>
    </div>
  );
};

export default Hello;
