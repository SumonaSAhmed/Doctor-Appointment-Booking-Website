import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-5 my-15 md:mx-10">
      <h1 className="text-3xl font-medium text-blue-800">Related Doctors</h1>
      <p className="text-base text-center">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="ml-60 mr-60 w-full grid grid-cols-[repeat(auto-fit,minmax(230px,230px))] gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            key={item._id}
            onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
            className="border border-teal-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img className="w-57 h-58" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-blue-600">
                <p className="w-2 h-2 rounded-full bg-blue-600"></p>
                <p>Available</p>
              </div>
              <p className="text-lg font-medium text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-700">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedDoctors;
