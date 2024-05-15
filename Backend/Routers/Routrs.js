import express from "express";
// import createUser from "../Controllers/newUser.js"

const Authrouter = express.Router();

import { logIn,logOut,signUp } from "../Controllers/Controller.js";
Authrouter.post("/signup",signUp);
Authrouter.post("/login",logIn);
Authrouter.post("/logout",logOut);
export default Authrouter;
  