import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="mx-40 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-15 my-10 mt-40 text-sm">
      {/*----Left Section----*/}
      <div>
        <img className="w-48 h-12 mb-5" src={assets.logo} alt="" />
        <p className="text-gray-600 w-full md:w-2/3 leading-6">
          MediBook is a user-friendly doctor appointment booking platform that
          allows patients to schedule consultations effortlessly. It features
          doctor profiles, automated reminders, and secure patient records,
          ensuring a seamless healthcare experience.
        </p>
      </div>

      {/*----Middle Section----*/}
      <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="text-gray-600 flex flex-col gap-2">
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      {/*----Right Section----*/}
      <div>
      <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
        <ul className="text-gray-600 flex flex-col gap-2">
          <li>+91 1234567890</li>
          <li>abcdefgh@gmail.com</li>
        </ul>
      </div>
      </div>

      {/*----Copyright text----*/}
      <div>
        <hr/>
        <p className="text-sm text-center py-5">Copyright 2024 @ ABCDEFGH.abcd - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
