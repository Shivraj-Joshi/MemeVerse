import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="h-screen w-full bg-[#0f0f0f] flex items-center justify-center ">
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
              className="outline-none rounded-xl p-4 text-white bg-[#0f0f0f] "
            />
            <label htmlFor="#" className="text-white">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              className="outline-none rounded-xl p-4 text-white bg-[#0f0f0f] "
            />

            <button className="bg-[#0f0f0f] p-2 text-white text-[18px] rounded-xl hover:bg-[#fac036] cursor-pointer mt-4 ">
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
    </>
  );
};

export default Login;
