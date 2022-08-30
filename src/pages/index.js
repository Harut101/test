import { Routes, Route } from "react-router-dom";
import Registration from "./registration/Registration";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import Invest from "./invest/Invest";
import Refer from "./refer/Refer";
import Wallet from "./wallet/Wallet";

function Pages() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/invest" element={<Invest />} />
      <Route path="/refer" element={<Refer />} />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
  );
}

export default Pages;
