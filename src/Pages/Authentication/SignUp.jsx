import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container flex  items-center    justify-center">
      <div className="form h-[550px] w-[400px] mt-4 bg-slate-100 py-5 px-4 hover:shadow-md ">
        <h1 className="text-center text-[#717fe0] text-[25px] mb-2 font-semibold uppercase">
          MemeVerse
        </h1>
        <p className="text-center mb-2 font-semibold ">Register to Continue</p>
        <div className="bg-white h-[450px] px-8 px-4 py-6 ">
          <div className="mb-4  ">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semi-bold mb-2"
            >
              Name
            </label>
            <input
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              required
              placeholder="Enter your name"
              className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4  ">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-semi-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              required
              placeholder="Enter your email address"
              className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semi-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              required
              placeholder="Enter your Password"
              className=" appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <p className="mb-4">
            Already have account ?{" "}
            <Link to="/login">
              <span className="text-[#717fe0] hover:underline">Login</span>
            </Link>
          </p>

          <div className="flex items-center justify-center">
            <button
              //   onClick={login}
              className="border border-[#e4e4e4] cursor-pointer hover:bg-[#717fe0] hover:scale-95 transition-all hover:duration-700 hover:text-white mt-10 text-black font-semi-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
