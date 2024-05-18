import express from 'express';
import { logIn, logOut, signUp } from '../Controllers/Controller.js';

const Authrouter = (upload) => {
  const router = express.Router();

  router.post("/signup", upload.single('ProfilePic'), signUp); // Apply upload middleware
  router.post("/login", logIn);
  router.post("/logout", logOut);

  return router;
};

export default Authrouter;
