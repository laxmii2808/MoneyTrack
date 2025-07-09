import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ProfilePage from "./components/Profile/profilepage";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import SetAvatar from "./Pages/Avatar/setAvatar";
// import ForgotPassword from "./Pages/ForgetPassword";
// import ResetPassword from "./Pages/ResetPassword";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* /* <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
