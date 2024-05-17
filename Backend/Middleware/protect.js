import jwt from 'jsonwebtoken';
import User from '../schema/user.js';

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    
    if (!token) {
      return res.status(401).json({ error: 'No token found' });
    }

    const decoded = jwt.verify(token, process.env.SECKEY);

    if (!decoded) {
      return res.status(401).json({ error: 'Token is not authorized' });
    }

    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protect middleware", error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token has expired' });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default protect;
