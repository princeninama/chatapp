import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  Password: { type: String, required: true },
  ProfilePic: { type: String, default: "" },
  Gender: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("user", userSchema);
export default User;
