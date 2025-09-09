import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";

const Navbar = () => {
  const {aToken} = useContext(AdminContext);

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b-2 border-b-sky-900">
      <div className="flex items-center gap-5 text-sm">
          <img
            src={assets.admin_logo}
            alt=""
            className="w-50 h-12 cursor-pointer"
          ></img>
          <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-700">{aToken ? "Admin" : "Doctor"}</p>
        </div>
        <button className="bg-sky-700 text-white text-base px-10 py-2 border rounded-full">Logout</button>
    </div>
  );
};

export default Navbar;
