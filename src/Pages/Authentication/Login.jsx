import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Layout from "../../Components/Layout/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      console.log(result);
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout>
        <div className="h-screen w-full bg-[#fac036] flex items-center justify-center ">
          <div className="h-[500px] w-[500px] bg-black rounded-xl flex flex-col items-center justify-center">
            <h3 className="text-white text-[30px] ">MemeVerse</h3>
            <p className="text-white">Login to continue</p>
            <div className="form-container bg-black h-[380px] w-[400px] flex flex-col p-10 gap-6">
              <label htmlFor="#" className="text-white">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none rounded-xl p-4 text-white bg-[#0f0f0f] "
              />
              <label htmlFor="#" className="text-white">
                Password
              </label>
              <input
                type="text"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="outline-none rounded-xl p-4 text-white bg-[#0f0f0f] "
              />

              <button
                onClick={login}
                className="bg-[#0f0f0f] p-2 text-white text-[18px] rounded-xl hover:bg-[#fac036] cursor-pointer mt-4 "
              >
                Login
              </button>
            </div>
            <p className="text-white text-[18px] ">
              Don't have account ?{" "}
              <Link to="/signup">
                <span className="text-white hover:text-[#fac036] text-[18px] underline">
                  Register
                </span>
              </Link>{" "}
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
