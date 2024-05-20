import axios from "axios";
// import { useAuthContext } from "../components/context/Userauth";

export const userInfo = async (data, setAuthUser) => {
  // const { setAuthUser } = useAuthContext();
  try {
    // console.log("at api call of signup", data);
    const response = await axios.post(
      "http://localhost:80/api/auth/signup",
      data,
      {
        withCredentials: true,
      }
    );

    const items = response.data;
    // console.log(items)
    localStorage.setItem("authuser", JSON.stringify(items));
    setAuthUser(items);
    // console.log(items);
  } catch (error) {
    console.log("error in signup", error);
  }
};

export const UserLogin = async (username, Password, setAuthUser) => {
  // const { setAuthUser } = useAuthContext();

  try {
    // console.log("at api call of signin");
    const response = await axios.post(
      "http://localhost:80/api/auth/login",
      {
        username,
        Password,
      },
      {
        withCredentials: true,
      }
    );
    const data = response.data;
    // console.log(data);
    localStorage.setItem("authuser", JSON.stringify(data));
    setAuthUser(data);
  } catch (error) {
    console.log(error);
    console.log("error at api call of signin");
  }
};

export const logout = async (setAuthUser) => {
  // const { setAuthUser } = useAuthContext();
  try {
    const response = await axios.post("http://localhost:80/api/auth/logout");
    const data = response.data;
    localStorage.removeItem("authuser");
    setAuthUser(null);
  } catch (error) {
    console.log(error);
  }
};

// export const forget = async(username)=>
//   {
//     try {
//       const response = await axios.get("http://localhost:80/api/auth/signup")
//     } catch (error) {
      
//     }
//   }