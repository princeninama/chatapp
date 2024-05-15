import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

import Authrouter from "./Routers/Routrs.js";
import Siderouter from "./Routers/userRouter.js";
import Msgrouter from "./Routers/MsgRouter.js";

import connection from "./connection.js";
// import { app, server } from "./socket/socket.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: `${__dirname}/../.env`
});

const app = express();

const PORT = process.env.PORT || 80;

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true // Allow credentials
};

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({ extended: true })); // Add this line to handle form data

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/auth/signup", (req, res) => {
  res.send("Hello World from signup");
});

app.use("/api/auth", Authrouter);
app.use("/api/msg", Msgrouter);
app.use("/api/users", Siderouter);

app.listen(PORT, () => {
  connection();
  console.log("listening on port: " + PORT);
});
