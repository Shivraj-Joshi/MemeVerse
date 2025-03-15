import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../../appwriteConfig";
import { ID } from "appwrite";
import Layout from "../../Components/Layout/Layout";
import image from "../../assets/welcome.jpg";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signup = async () => {
    try {
      if (!email || !password) {
        alert("please fill all fields");
        return;
      }
      const user = await account.create(ID.unique(), email, password, name);
      console.log("user signed up:", user);

      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <Layout>
        <section className="min-h-screen flex items-center justify-center font-mono bg-gradient-to-r from-cyan-500 from-10% via-indigo-500 via-50% to-sky-500 to-100%">
          <div className="flex shadow-2xl mt-20">
            <div className="flex flex-col items-center justify-center text-center p-8 gap-4 bg-white rounded-2xl xl:rounded-tr-none xl:rounded-br-none">
              <h1 className="text-3xl font-bold">MemeVerse</h1>

              <div className="flex flex-col text-xl text-left gap-1">
                <span>Username</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-md outline-none p-1  border-1 focus:border-cyan-400 focus:bg-slate-50"
                  placeholder="enter email"
                />
              </div>
              <div className="flex flex-col text-xl text-left gap-1">
                <span>Email</span>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-md outline-none p-1  border-1 focus:border-cyan-400 focus:bg-slate-50"
                  placeholder="enter email"
                />
              </div>
              <div className="flex flex-col text-xl text-left gap-1 ">
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-md outline-none p-1  border-1 focus:border-cyan-400 focus:bg-slate-50"
                  placeholder="enter password"
                />
                <div className="flex gap-1 items-center">
                  <input type="checkbox" />
                  <span className="text-base">Remember password</span>
                </div>
              </div>
              <button
                onClick={signup}
                className="px-10 py-2 text-2xl rounded-md cursor-pointer bg-gradient-to-tr from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white"
              >
                Register
              </button>
              <p>
                Already have an account ?{" "}
                <Link to="/login">
                  <span className="text-blue-400">Login</span>
                </Link>
              </p>
            </div>
            <img
              src={image}
              alt=""
              className="max-w-[460px] object-cover lg:rounded-tr-2xl xl:rounded-br-2xl xl:block hidden"
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default SignUp;
