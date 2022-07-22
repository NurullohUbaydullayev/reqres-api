import { Routes, Route } from "react-router-dom";

// Components
import Profile from "../../Components/Users/profile";
import UserInfo from "../../Components/Users/userInfo";

function User() {
  return (
    <>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/:id" element={<UserInfo />} />
      </Routes>
    </>
  );
}

export default User;
