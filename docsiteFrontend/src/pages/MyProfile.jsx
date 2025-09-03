import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Sweta",
    image: assets.profile_pic,
    email: "sweta123@gmail.com",
    phone: "+91 0123456789",
    gender: "female",
    dob: "20-05-2000",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm mx-40 sm:mx-[10%]">
      <img className="w-35 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="text-3xl font-medium text-neutral-800 mt-4">
          {userData.name}
        </p>
      )}

      <hr className="border-t-1 border-gray-600" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] mt-3 gap-y-2.5">
          <p className="font-medium text-neutral-700">Email Id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium text-neutral-700">Phone no.:</p>
          <p>
            {isEdit ? (
              <input
                className="bg-gray-100 max-w-50"
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-500">{userData.phone}</p>
            )}
          </p>
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] mt-3 gap-y-2.5 text-neutral-600">
          <p className="font-medium text-neutral-700">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p className="font-medium text-neutral-700">DOB:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-28"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"
            onClick={() => setIsEdit(false)}
          >
            Save information
          </button>
        ) : (
          <button
            className="border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
