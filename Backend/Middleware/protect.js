import jwt from 'jsonwebtoken';
import User from '../schema/user.js';
const protect = async(req,res,next) => {
  try {
    const token=req.cookies.jwt;
    if(!token)
    {
        console.log("cookie not found")
        return res.status(401).json({error: 'NO token found'});
    }
    const decode=jwt.verify(token,process.env.SECKEY)
    if(!decode)
    {
        return res.status(401).json({error: ' token is not authorised'});
    }
    const user= await User.findById(decode.userId).select("-Password");
    if(!user)
    {
        return res.status(401).json({error: "User not found"});
    }
    req.user = user; 
    next();
  } catch (error) {
    console.log("Error in protect", error)
  }
}

export default protect;