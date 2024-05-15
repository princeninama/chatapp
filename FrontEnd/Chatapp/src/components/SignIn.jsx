import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserLogin } from "../API/userInfo.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../components/context/Userauth.jsx";
const SignIn = () => {
  const [move, setMove] = useState(false);
  const [username, setusername] = useState("");
  const [Password, setpassword] = useState("");
  const { setAuthUser } = useAuthContext();
  const navigate=useNavigate();
  const validUser = async (e) => {
    e.preventDefault();
    await UserLogin(username, Password,setAuthUser);
    toast.success("Successfully signed in");
  };

  const handleSignup = () => {
    navigate("/signUp");
  };

  const animateThenSignup = () => {
    setMove(true);
    setTimeout(() => {
      handleSignup();
    }, 1000);
  };

  return (
    <div className="flex h-screen">
      <motion.div
        animate={{ x: move ? 600 : 1, opacity: move ? 0.2 : 1 }}
        initial={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white w-[70%] md:w-full"
      >
        <h1 className="text-3xl m-12 font-bold">Chugalkhori</h1>
        <h1 className="text-[4rem] mt-32 font-bold text-center">
          Login To Your Account
        </h1>
        <h2 className="text-center opacity-30">Login Using Social Networks</h2>
        <div className="flex gap-x-6 justify-center mt-6">
          <div className="h-12 w-12  rounded-full bg-slate-900"></div>
          <div className="h-12 w-12 rounded-full bg-orange-900"></div>
          <div className="h-12 w-12 rounded-full bg-slate-900"></div>
        </div>
        <div className="ml-40">
          <input
            type="text"
            value={username}
            placeholder="Email Or UsserName"
            onChange={(e) => {
              setusername(e.target.value);
            }}
            className="rounded-2xl border-1 block p-2 mt-5 w-full md:w-[70%] bg-slate-100"
          />
          <input
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="block w-full md:w-[70%] mt-5 p-2 rounded-2xl border-1 bg-slate-100"
          />
          <button
            type="submit"
            onClick={validUser}
            className="bg-green-800 w-full md:w-[40%] ml-28 border rounded-3xl p-3 mt-5 text-white"
          >
            Sign In
          </button>
        </div>
      </motion.div>
      <motion.div
        animate={{ x: move ? -880 : 20, opacity: move ? 0.2 : 1 }}
        initial={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-tr from-teal-500 via-green-400 to-teal-800 w-[30%] md:w-full block"
      >
        <div className="text-[3rem] text-white font-semibold text-center mt-60">
          New Here?
        </div>
        <div className="text-white text-center mt-11 font-mono">
          Sign Up And Discover Your New Friends
        </div>
        <div className="pl-[10.8rem]">
          <button
            className="bg-white text-black w-full md:w-60 p-3 mt-12 ml-20 rounded-3xl"
            onClick={animateThenSignup}
          >
            Sign Up
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;
