import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="h-screen w-full bg-[#fac036] flex items-center justify-center ">
        <div className="h-[600px] w-[500px] bg-black rounded-xl flex flex-col items-center ">
          <h3 className="text-white text-[30px] ">MemeVerse</h3>
          <p className="text-white">Register to continue</p>

          <div className="input-container bg-black flex flex-col gap-8 mt-4 h-[450px] w-[400px] p-4">
            <label htmlFor="" className="text-white">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="text-white bg-[#0f0f0f] p-2 text-[18px] rounded-xl outline-none "
            />
            <label htmlFor="" className="text-white">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="text-white bg-[#0f0f0f] p-2 text-[18px]  rounded-xl outline-none"
            />
            <label htmlFor="#" className="text-white">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter your password"
              className="text-white bg-[#0f0f0f] p-2 text-[18px]  rounded-xl outline-none"
            />

            <button className="bg-[#0f0f0f] p-2 text-white text-[18px] rounded-xl hover:bg-[#fac036] cursor-pointer mt-4 ">
              Register
            </button>
          </div>

          <p className="text-white text-[18px] mt-6 ">
            Already an user ?{" "}
            <Link to="/login">
              <span className="text-white hover:text-[#fac036] text-[18px] underline">
                Login
              </span>
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
