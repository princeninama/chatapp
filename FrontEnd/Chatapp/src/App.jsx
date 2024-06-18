import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./components/context/Userauth";
function App() {
  const { authUser } = useAuthContext();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Navigate to={"/main"} /> : <SignIn />}
          // element={<SignIn />}
        />
        <Route
          path="/SignUp"
          // element={<SignUp />}
          element={authUser ? <Navigate to={"/main"} /> : <SignUp />}
        />
        {/* <Route
          path="/main"
          element={authUser ? <Hello /> : <Navigate to={"/"} />}
        /> */}
        <Route
            path="/main"
            // element={<MainScreen />}
            element={authUser ? <MainScreen /> : <Navigate to="/" />}
          />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
