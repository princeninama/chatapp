import User from "../schema/user.js";
 const getUserforSidebar = async(req,res)=>
    {
        try {
            // console.log("at backend of sidebaruser")
            const loggedInUser = req.user._id;
            // console.log(loggedInUser);
            const fileterdUser = await User.find({_id: { $ne : loggedInUser}} ).select("-Password");
            res.status(200).json(fileterdUser);
            return fileterdUser;
        } catch (error) {
            console.log(error);
        }
    }
export default getUserforSidebar;