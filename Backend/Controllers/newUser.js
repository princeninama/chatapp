import User from "../schema/user.js";
const createUser = async (req, res) => {
    try {
      const newUser = new User({users:req.body.user})
     await newUser.save();
      console.log(newUser);
      res.send(200).json("success")
    } catch (error) {
      console.log(error);
    }
  };
export default createUser;
