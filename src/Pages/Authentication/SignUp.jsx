import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../FirebaseConfig";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import Layout from "../../Components/Layout/Layout";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    if (name === "" || email === "" || password === "") {
      alert("please fill all the fields");
      return toast.error("All fields are required");
    }
    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);
      console.log(users);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      setName("");
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-white bg-[#0f0f0f] p-2 text-[18px] rounded-xl outline-none "
              />
              <label htmlFor="" className="text-white">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-white bg-[#0f0f0f] p-2 text-[18px]  rounded-xl outline-none"
              />
              <label htmlFor="#" className="text-white">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-white bg-[#0f0f0f] p-2 text-[18px]  rounded-xl outline-none"
              />

              <button
                onClick={signup}
                className="bg-[#0f0f0f] p-2 text-white text-[18px] rounded-xl hover:bg-[#fac036] cursor-pointer mt-4 "
              >
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
      </Layout>
    </>
  );
};

export default SignUp;
