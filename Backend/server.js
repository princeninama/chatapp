import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import Authrouter from "./Routers/Routrs.js"; // Ensure the path is correct
import Siderouter from "./Routers/userRouter.js"; // Ensure the path is correct
import Msgrouter from "./Routers/MsgRouter.js"; // Ensure the path is correct
import connection from "./connection.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

import {app,server} from "./socket/socket.js"


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: `${__dirname}/../.env`,
});

// const app = express();

const PORT = process.env.PORT || 80;

const corsOptions = {
  origin: "http://localhost:5174",
  credentials: true, // Allow credentials
};

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     return cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//     return cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// Note: Pass the upload middleware to the Authrouter function
app.use("/api/auth", Authrouter);
app.use("/api/msg", Msgrouter);
app.use("/api/users", Siderouter);

server.listen(PORT, () => {
  connection();
  console.log("listening on port: " + PORT);
});
