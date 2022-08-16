import { Routes, Route } from "react-router-dom";
import Registration from "./registration/Registration";
import Login from "./login/Login";

function Pages() {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Pages;
