import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const Speciality = () => {
  return (
    <div id="speciality" className="flex flex-col items-center gap-5 py-15">
      <h1 className="text-3xl font-medium text-blue-800">Find by Speciality</h1>
      <p className="sm:w-1/3 text-base text-center text-gray-900">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-5 pt-5 w-full">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            key={item}
            to={`/doctors/${item.speciality}`}
          >
            <img className="w-20 sm:w-25 mb-2" src={item.image} alt="" />
            <p className="text-sm text-center text-gray-900">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
