import "./App.css";

// React
import { Routes, Route } from "react-router-dom";

// Pages
import Main from "./Pages/Main";
import Users from "./Pages/Users/User";
import SignUp from "./Pages/Sign-pages/sign-up";
import SignIn from "./Pages/Sign-pages/sign-in";

// Components
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
