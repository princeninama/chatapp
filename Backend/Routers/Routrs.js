import express from "express";
import { logIn, logOut, signUp } from "../Controllers/Controller.js";
import upload from "../Middleware/multeer.js";
const router = express.Router();

router.post("/signup", upload.single("ProfilePic"), signUp); // Apply upload middleware
router.post("/login", logIn);
router.post("/logout", logOut);
export default router;
