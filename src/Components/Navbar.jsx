import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <div className="h-[55x] w-full bg-black flex items-center justify-center fixed z-50 top-0 font-mono ">
      <div className="container  h-[60px] w-full flex items-center justify-between  ">
        <Link to="/">
          <div className="logo text-[30px] uppercase hover:cursor-pointer text-[#fac036]">
            memeverse
          </div>
        </Link>
        <div className="items flex items-center  ">
          <ul className="flex items-center text-white  gap-10 text-[18px]">
            <Link to="/">
              <li className="list-none hover:cursor-pointer hover:text-[#fac036]">
                Home
              </li>
            </Link>
            <Link to="/memeexplore">
              <li className="list-none hover:cursor-pointer hover:text-[#fac036]">
                Memes
              </li>
            </Link>
            <li className="list-none hover:cursor-pointer hover:text-[#fac036]">
              About
            </li>
          </ul>
        </div>
        {user ? (
          <div className="accounts flex items-center justify-center">
            <button
              onClick={logout}
              className="text-white text-[20px] hover:cursor-pointer hover:text-[#fac036]"
            >
              Logout
            </button>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Navbar;
