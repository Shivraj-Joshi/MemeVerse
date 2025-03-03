import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Navbar";
import MemeContextProvider from "./Context/MemeContextProvider";
import Home from "./Pages/Home";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";

function App() {
  return (
    <MemeContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </MemeContextProvider>
  );
}

export default App;
