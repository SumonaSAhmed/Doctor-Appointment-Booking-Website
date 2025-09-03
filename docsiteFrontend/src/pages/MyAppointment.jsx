import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {
  const {doctors} = useContext(AppContext);

  return (
    <div className="mx-40 sm:mx-[10%]">
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b border-gray-300">My appointments</p>
      <div>
        {doctors.slice(0,3).map((item, index)=>(
          <div className="grid grid-col-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-gray-300" key={index}>
            <div>
              <img className="w-35" src={item.image} alt=''/>
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-xs mt-1"><span className="text-sm text-zinc-700 font-medium">Date & Time:</span>10, march, 2024 | 2pm</p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-stone-600 text-center sm:min-w-50 py-2 border rounded hover:text-white hover:bg-sky-600 transition-all duration-300">Pay online</button>
              <button className="text-sm text-stone-600 text-center sm:min-w-50 py-2 border rounded hover:text-white hover:bg-red-600 transition-all duration-300">Cancel appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment
