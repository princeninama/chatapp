import express from 'express';
import protect from '../Middleware/protect.js';
import getUserforSidebar from '../Controllers/usercontrol.js';


const Siderouter = express.Router();

Siderouter.get("/get",protect, getUserforSidebar);

export default Siderouter;
