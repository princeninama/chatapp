import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser"
import cors from "cors"
import cookieParser from "cookie-parser";


import Authrouter from "./Routers/Routrs.js";
import Siderouter from "./Routers/userRouter.js";
import Msgrouter from "./Routers/MsgRouter.js";

import connection from "./connection.js";
import { app,server } from "./socket/socket.js";
const PORT=process.env.port| 6000;

dotenv.config();




app.use(express.json());
app.use(cookieParser()); 

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hellow World");
});

app.use("/api/auth", Authrouter);
app.use("/api/msg", Msgrouter);
app.use("/api/users", Siderouter);

server.listen(PORT, () => {
  connection();
  console.log("listening on port :" +PORT);
});
