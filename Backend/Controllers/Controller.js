import bcrypt from "bcryptjs/dist/bcrypt.js";
import generateToken from "../utils/token.js";
import User from "../schema/user.js";
import toast from "react-hot-toast";
export const logIn = async (req, res) => {
  try {
    const { username, Password } = req.body;
    const user = await User.findOne({ username });

    // console.log("User from database:", user);

    // console.log("User Password:", user.Password);

    const passwordCheck = await bcrypt.compare(Password, user?.Password || "");

    if (!passwordCheck || !user) {
      console.log("password check failed")
      return res.status(400).json({ error: "Invalid credentials" });
    }
    generateToken(user._id, res);
    console.log(`Welcome back ${username} at sign in`);

    res.status(200).json({
      _id: user._id,

      username: user.username,
    });
  } catch (error) {
    console.log("error in login controller", error);
    return res.status(500).json({ error: "Server error" }); // Handle server error
  }
};


export const signUp = async (req, res) => {
  // res.send("helloo")
  // console.log("at Backend");
  try {
    const { fullname, username, email, Password, Gender } = req.body;
    const ProfilePic = req.file;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Password, salt);

    // const boypic = `https://avatar.iran.liara.run/public/boy?`;
    // const girlpic = 'https://avatar.iran.liara.run/public/girl?';

    // if (Gender === "male") {
    //   ProfilePic = boypic;
    // } else {
    //   ProfilePic = girlpic;
    // }

    const user = await User.findOne({ username });

    if (user) {
      toast.error('Username already exists');
      console.log("username exists");
      return res.status(400).json({ error: "Username already exists" });
    }

    const newUser = new User({
      fullname,
      username,
      email,
      Password: hashedPassword,
      Gender:Gender,
      // ProfilePic:ProfilePic,
      ProfilePic: {
        Data:ProfilePic.buffer,
        contentType: ProfilePic.mimetype,
      },
    });

    console.log(newUser);

    if (newUser) {
      // console.log("enterring token");
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        ProfilePic: newUser.ProfilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (err) {
    console.log("Error in signup controller", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logOut = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ msg: "Looged out Successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "internal servr error " });
  }
};
