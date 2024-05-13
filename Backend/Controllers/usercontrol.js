import User from "../schema/user.js";
 const getUserforSidebar = async(req,res)=>
    {
        try {
            const loggedInUser = req.user._id;
            const fileterdUser = await User.find({_id: { $ne : loggedInUser}} ).select("-Password");
            res.status(200).json(fileterdUser);
        } catch (error) {
            console.log(error);
        }
    }
export default getUserforSidebar;