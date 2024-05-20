import User from "../schema/user.js";
const getUserforSidebar = async (req, res) => {
  try {
    // console.log("at backend of sidebaruser")
    const loggedInUser = req.user._id;
    // console.log(loggedInUser);
    const fileterdUser = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-Password"
    );
    // res.status(200).json(fileterdUser);
    const usersWithBase64Images = fileterdUser.map((user) => {
      let base64Image = "";
      if (user.ProfilePic.Data) {
        base64Image = user.ProfilePic.Data.toString("base64");
      }
      // return fileterdUser;
      return {
        ...user.toObject(),
        ProfilePic: {
          data: base64Image,
          contentType: user.ProfilePic.contentType,
        },
      };
    });
    // console.log("at backendsidebar", usersWithBase64Images);
    res.json(usersWithBase64Images);
  } catch (error) {
    console.log(error);
  }
};
export default getUserforSidebar;
