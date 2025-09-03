import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  return (
    <div className="flex items-center justify-between  text-sm py-4 mb-5 border-b-2 border-b-sky-900">
      <div className="ml-8">
        <img onClick={()=>navigate('/')} src={assets.logo} alt="" className="w-50 h-12 cursor-pointer"></img>
      </div>
      <div>
        <ul className="hidden md:flex items-start gap-5 font-medium text-lg text-cyan-900">
          <Link to="/">
            <li className="py-1">Home</li>
            <hr className="border-none outline-none h-0.5 bg-cyan-700 w-4/5 m-auto"/>
          </Link>
          <Link to="/About">
            <li className="py-1">About</li>
            <hr className="border-none outline-none h-0.5 bg-cyan-700 w-4/5 m-auto"/>
          </Link>
          <Link to="/Doctors">
            <li className="py-1">All Doctors</li>
            <hr className="border-none outline-none h-0.5 bg-cyan-700 w-4/5 m-auto"/>
          </Link>
          
          <Link to="/Contact">
            <li className="py-1">Contact Us</li>
            <hr className="border-none outline-none h-0.5 bg-cyan-700 w-4/5 m-auto"/>
          </Link>
        </ul>
      </div>
      <div className="mr-20 flex items-center">
        {
          token?
          <div className="flex items-center gap-2 cursor-pointer relative group">
            <img src={assets.profile_pic} alt="" className="w-10 rounded-full"/>
            <img src={assets.dropdown_icon} alt="" className="w-2.5"/>
            <div className="absolute top-full right-0 mt-2 z-20 hidden group-hover:block">
              <div className="min-w-[150px] bg-white shadow-lg rounded-md p-2 flex flex-col">
                <p onClick={()=>navigate('/my-Profile')} className="text-base font-medium text-sky-800 px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</p>
                <p onClick={()=>navigate('/my-Appointment')} className="text-base font-medium text-sky-800 px-4 py-2 hover:bg-gray-100 cursor-pointer">My Appointments</p>
                <p onClick={()=>setToken(false)} className="text-base font-medium text-sky-800 px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
          :<button
          type="button" onClick={()=>navigate('/login')}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Create Account
        </button>
        }
        {/*----<img onClick={()=>showMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt=""/>

        
        <div className={`${showMenu ? 'fixed w-full' : 'w-0 h-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white trandition-all`}>
          <div>
            <img src={assets.logo} alt="" />
            <img onClick={()=>showMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>All Doctors</Link>
            <Link>Contact us</Link>
          </ul>
        </div>----*/}
      </div>
    </div>
  );
};

export default Navbar;
