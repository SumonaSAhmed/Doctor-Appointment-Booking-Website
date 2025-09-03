import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="mx-40 sm:mx-[10%]">
      <div>
        <p className="text-center text-2xl text-gray-600 font-medium pt-10">
          ABOUT US
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10">
        <img className="w-full md:max-w-[560px]" src={assets.about_image} />
        <div className="flex flex-col justify-center text-sm text-gray-700 gap-5 md:w-2/4">
          <p>
            At MediBook, we make healthcare simple, accessible, and hassle-free.
            Our platform connects patients with trusted doctors, enabling
            seamless online appointment booking anytime, anywhere. Whether you
            need a general check-up, specialist consultation, or emergency care,
            MediBook ensures you find the right doctor at the right time.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            We envision a future where quality healthcare is within everyone's
            reach. MediBook is committed to bridging the gap between patients
            and healthcare professionals by leveraging technology to create a
            seamless, efficient, and patient-centered experience. Our goal is to
            revolutionize the way people access medical care, making it faster,
            easier, and more convenient for all.
          </p>
          <p>
            Book your appointment today and take a step towards better
            healthcare!
          </p>
        </div>
      </div>

      <div>
        <p className="text-xl my-4 font-medium">WHY CHOOSE US</p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border border-gray-300 w-1/4 p-10 md:p-15 flex flex-col hover:bg-sky-600 hover:text-white transition-all duration-300 cursor-pointer text-gray-600">
          <b>Easy Doctor Search:</b>
          <p className="text-sm pt-5">
            {" "}
            Browse a wide range of verified doctors by speciality, location, or
            availability.
          </p>
        </div>
        <div className="border border-gray-300 w-1/4 p-10 md:p-15 flex flex-col hover:bg-sky-600 hover:text-white transition-all duration-300 cursor-pointer text-gray-600">
          <b>Instant Appointments:</b>
          <p className="text-sm pt-5">
            {" "}
            Book and manage your appointments with just a few clicks.
          </p>
        </div>
        <div className="border border-gray-300 w-1/4 p-10 md:p-15 flex flex-col hover:bg-sky-600 hover:text-white transition-all duration-300 cursor-pointer text-gray-600">
          <b>24/7 Accessibility:</b>
          <p className="text-sm pt-5">
            Access medical services anytime, from the comfort of your home.
          </p>
        </div>
        <div className="border border-gray-300 w-1/4 p-10 md:p-15 flex flex-col hover:bg-sky-600 hover:text-white transition-all duration-300 cursor-pointer text-gray-600">
          <b>Secure & Reliable:</b>
          <p className="text-sm pt-5">
            Your health data is safe with us, ensuring privacy and security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
