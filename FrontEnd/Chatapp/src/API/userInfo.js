import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../components/context/Userauth";

export const userInfo = async (data) => {
  const { setAuthuser } = useAuthContext();
  try {
    console.log("at api call of signup", data);
    const response = await axios.post(
      "http://localhost:3000/api/auth/signup",
      data
    );

    const items = await response.json();
    localStorage.setItem("authuser", JSON.stringify(items));
    setAuthuser(items);
  } catch (error) {
    console.log("error in signup", error);
  }
};


export const UserLogin = async (username, Password) => {
  const { setAuthUser } = useAuthContext();

  try {
    // console.log("at api call of signin");
    const response = await axios.post("http://localhost:3000/api/auth/login", {
      username,
      Password,
    });
    const data= response.json();
    localStorage.setItem("authuser", JSON.stringify(data));
    setAuthUser(data);
  } catch (error) {
    console.log(error);
    console.log("error at api call of signin");
  }
};


export const logout = async()=>
  {
    const { setAuthUser } = useAuthContext();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/logout")
      const data = response.json();
      localStorage.removeItem("logout authuser");
      setAuthUser(null);
    } catch (error) {
      console.log(error);
    }
  }