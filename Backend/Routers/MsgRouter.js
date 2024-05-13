import express from "express";
import {SendMsg} from "../Controllers/Message.js"
import { getMsg } from "../Controllers/Message.js";
import protect from '../Middleware/protect.js'
const Msgrouter=express.Router();
Msgrouter.get("/:id",protect,getMsg);
Msgrouter.post("/send/:id",protect,SendMsg);
export default Msgrouter;