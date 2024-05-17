import React from "react";
import Chat from "./Right/Chat";
import Sidebar from "./Left/sidebar";
import { useState } from "react";
const MainScreen = () => {
  return (
    <div className="flex">
      <Sidebar />
       <Chat /> 
    </div>
  );
};

export default MainScreen;
