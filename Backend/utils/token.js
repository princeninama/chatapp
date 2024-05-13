import jwt from 'jsonwebtoken';

const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.SECKEY, {
        expiresIn: '15d' // Use expiresIn instead of expireson
    });
    
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: true
    });
};

export default generateToken;
