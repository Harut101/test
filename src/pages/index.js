import { Routes, Route } from "react-router-dom";
import Registration from "./registration/Registration";
import Login from "./login/Login";
import Profile from "./profile/Profile";

function Pages() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Pages;
