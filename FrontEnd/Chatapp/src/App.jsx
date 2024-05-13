import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./components/context/Userauth";
function App() {
  const { authuser } = useAuthContext();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={authuser ? <Navigate to={"/main"} /> : <SignIn />}
            // element={<SignIn />}
          />
          <Route
            path="/SignUp"
            // element={<SignIn />}
            element={authuser ? <Navigate to={"/main"} /> : <SignUp />}
          />
          <Route
            path="/main"
            // element={<MainScreen />}
            element={authuser ? <MainScreen /> : <Navigate to="/" />}
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
