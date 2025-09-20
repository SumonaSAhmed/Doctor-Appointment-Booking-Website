import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";

const login = () => {
  
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
          email,
          password
        });
        console.log(data);
        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
          toast.success("Logged in successfully");
        } else {
          toast.error(data.message);
        }
      } else {
      }
    } catch (error) {}
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="mx-40 sm:mx-[10%] min-h-[80vh] flex items-center"
    >
      <div className="flex flex-col gap-5 m-auto items-start p-8 min-w-[350px] sm:w-100 border border-zinc-300 rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          <span> {state} </span> Login{" "}
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-zinc-300 rounded-lg w-full p-2 mt-1"
            type="text"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-zinc-300 rounded-lg w-full p-2 mt-1"
            type="password"
            required
          />
        </div>
        <button className="text-white bg-sky-600 w-full py-2 rounded-md text-base">
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login{" "}
            <span
              onClick={() => setState("Doctor")}
              className="text-blue-500 underline cursor-pointer"
            >
              Click here
            </span>{" "}
          </p>
        ) : (
          <p>
            Admin Login{" "}
            <span
              onClick={() => setState("Admin")}
              className="text-blue-500 underline cursor-pointer"
            >
              Click here
            </span>{" "}
          </p>
        )}
      </div>
    </form>
  );
};

export default login;
