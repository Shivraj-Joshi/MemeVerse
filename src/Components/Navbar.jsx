import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="h-[80px] w-full bg-black flex items-center justify-center fixed z-50 top-0 ">
      <div className="container  h-[60px] w-full flex items-center justify-between  ">
        <div className="logo text-[30px] uppercase hover:cursor-pointer text-[#fac036]">
          memeverse
        </div>
        <div className="items flex items-center  ">
          <ul className="flex items-center text-white  gap-10 text-[18px]">
            <li className="list-none hover:cursor-pointer hover:text-[#fac036]">
              Home
            </li>
            <li className="list-none hover:cursor-pointer hover:text-[#fac036]">
              Memes
            </li>
            <li className="list-none hover:cursor-pointer hover:text-[#fac036]">
              About
            </li>
          </ul>
        </div>
        <div className="accounts flex items-center justify-center">
          <Link to="/login">
            <p className="text-[20px] text-white hover:cursor-pointer hover:text-[#fac036]">
              Login
            </p>
          </Link>
          <p className="text-white text-[20px] ">/</p>
          <Link to="/signup">
            <p className="text-[20px] text-white hover:cursor-pointer hover:text-[#fac036]">
              Register
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
