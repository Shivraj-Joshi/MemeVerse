import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import Navbar from "./Components/Navbar";
import MemeContextProvider from "./Context/MemeContextProvider";
import Home from "./Pages/Home";
import Login from "./Pages/Authentication/Login";
import SignUp from "./Pages/Authentication/SignUp";
import MemeExpolre from "./Pages/MemeExplore";
import NoPage from "./Pages/NoPage";
import UserDashboard from "./Pages/UserDashboard";
import CreateMeme from "./Pages/CreateMeme";
// import DummyLogin from "./Pages/Authentication/DummyLogin";

function App() {
  return (
    <MemeContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memeexplore" element={<MemeExpolre />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/userdashboard"
            element={
              <ProtectedRout>
                <UserDashboard />
              </ProtectedRout>
            }
          />
          <Route
            path="/creatememe"
            element={
              <ProtectedRout>
                <CreateMeme />
              </ProtectedRout>
            }
          />
        </Routes>
      </Router>
    </MemeContextProvider>
  );
}

export default App;

//protected rout for user

export const ProtectedRout = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
