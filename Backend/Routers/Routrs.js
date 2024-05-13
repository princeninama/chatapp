import express from "express";
// import createUser from "../Controllers/newUser.js"

const Authrouter = express.Router();

import { logIn,logOut,signUp } from "../Controllers/Controller.js";
const router = express.Router();
router.post("/signup",signUp);
router.post("/login",logIn);
router.post("/logout",logOut);
export default Authrouter;
  