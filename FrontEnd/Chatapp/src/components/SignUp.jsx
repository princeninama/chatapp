import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../API/userInfo.js";
import toast from "react-hot-toast";
import "../nothing.css"
import { useAuthContext } from "./context/Userauth.jsx";
import User from "../../../../Backend/schema/user.js";
const SignUp = () => {
  const [move, setMove] = useState(false);
  const navigate = useNavigate();
  const [fullname, setfullname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [Gender, setGender] = useState("");
  const [ProfilePic, setProfilePic] = useState("");
  const { setAuthUser } = useAuthContext();

  const validPassword = (Password, cPassword) => {
    if (Password != cPassword) {
      toast.error("Password mismatched");
      return false;
    }
    if (Password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };
  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  // const exist = async (username) => {
  //   const user = await User.findOne({ username: username });
  //   console.log("user finding from database for same username", user);
  //   if (user) {
  //     toast.error("Username already exists");
  //     return false;
  //   }
  //   return true;
  // };

  const handleSignin = () => {
    navigate("/");
  };
  const handleSignup = () => {
    const ismatch = validPassword(Password, cPassword);
    if (ismatch) {
      toast.success("Welcome to Chugalkhori!");
      // navigate("/main");
    }
  };
  const animatesignin = () => {
    setMove(!move);
    setTimeout(() => {
      handleSignin();
    }, 1000);
  };
  const handleGender = (gender) => {
    setGender(gender);
  };
  const SaveData = async () => {
    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('Password', Password); // It's a good practice to use lowercase for keys.
    formData.append('Gender', Gender);
    formData.append('ProfilePic', ProfilePic); // Ensure this is a File object
  
    console.log("data from sign up", formData);
  
    await userInfo(formData, setAuthUser);
  };
  
  return (
    <div className="flex h-screen">
      <motion.div
        animate={{ x: move ? 900 : 1, opacity: move ? 0.2 : 1 }}
        initial={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-tr from-teal-500 via-green-400 to-teal-800 w-[40%]  block"
      >
        <h1 className="text-3xl m-10 font-extrabold nothing text-black">Chugalkhori</h1>
        <div className="text-[2.5rem] text-white font-semibold text-center mt-40">
          Already Have An Account?
        </div>
        <div className="text-white text-center mt-11 font-mono">
          Sign In And Meet Your Friends
        </div>
        <div className="pl-[10.8rem]">
          <button
            className="bg-white text-black w-60 p-3  mt-5 rounded-3xl"
            onClick={animatesignin}
          >
            Sign In
          </button>
        </div>
      </motion.div>
      {/* <div className="flex h-screen"> */}
      <motion.div
        animate={{ x: move ? -550 : 20, opacity: move ? 0.2 : 1 }}
        initial={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white w-[60%] "
      >
        <h1 className="text-[4rem] mt-20 font-bold text-center">
          Create Your New Account
        </h1>

        <div className="ml-64">
          <input
            type="text"
            placeholder="FullName "
            className="rounded-2xl border-1 block p-2 mt-5 w-[70%]  bg-slate-100"
            onChange={(e) => {
              setfullname(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="User Name "
            className="rounded-2xl border-1 block p-2 mt-5 w-[70%]  bg-slate-100"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <input
            type="mail"
            placeholder="Email "
            className="rounded-2xl border-1 block p-2 mt-5 w-[70%]  bg-slate-100"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-[70%] mt-5 p-2 rounded-2xl border-1 bg-slate-100"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Confiem Password"
            className="block w-[70%] mt-5 p-2 rounded-2xl border-1 bg-slate-100"
            onChange={(e) => {
              setcPassword(e.target.value);
            }}
          />

          <div className="mt-5">
            <label htmlFor="profilePic">
              <div className="bg-slate-100 p-2 w-32 rounded-2xl mr-4 inline">
                Profile Pic:
              </div>
              <input
                type="file"
                id="profilePic"
                onChange={handleFileChange}
                // style={{ display: "none" }}
              />
            </label>
          </div>
          <div className=" gap-x-4 mt-4 flex">
            <div
              onClick={() => {
                handleGender("Male");
              }}
            >
              <label htmlFor="Male" className="pr-4">
                <input type="radio" id="Male" name="gender" />
                <h1 className="inline p-3">Male</h1>
              </label>
            </div>
            <label htmlFor="Female">
              <input
                type="radio"
                id="Female"
                name="gender"
                onClick={() => {
                  handleGender("Female");
                }}
              />
              <h1 className="inline p-3">Female</h1>
            </label>
          </div>
          <button
            onClick={async () => {
              await SaveData();
              handleSignup();
            }}
            className="bg-green-800 w-[40%] ml-28 border rounded-3xl p-3 mt-5 text-white hover:bg-green-200"
          >
            Sign Up
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
