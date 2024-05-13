import mongoose from "mongoose";
const URL = "mongodb://localhost:27017/Chatapp";
const connection = async () => {
  try {
    await mongoose.connect(URL,{});
    console.log("Connected to Mongodb");
  } catch (error) {
    console.log("error in connection to mongodb",error);
  }
};
export default connection;