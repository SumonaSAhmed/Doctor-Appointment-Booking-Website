import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = [ 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(20, 0, 0, 0);

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 0 : 30);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        //add slot to array
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });

        //increment time by 30 mins
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div className="mx-40 sm:mx-[10%]">

        {/*----Doctors details----*/}
        <div className="flex flex-col sm:flex-row gap-5">
          {/*---Left Side---*/}
          <div className="w-1/4">
            <img className="w-75 h-75 rounded-lg" src={docInfo.image} alt="" />
          </div>

          {/*---Right Side---*/}
          <div className="w-3/4 flex-1 border p-8 py-7 border-gray-500 rounded-lg bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <h2 className="flex items-center gap-2 text-3xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </h2>
            <div className="flex items-center gap-2 text-base mt-2 text-gray-700">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 text-xs border rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center text-sm font-medium text-gray-800 gap-2 mt-3">
                About <img className="w-3" src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-600 mt-1 max-w-[700px]">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-600 font-medium mt-4">
              Appointment fees :{" "}
              <span className="text-gray-800">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/*--- Booking Slots ---*/}
        <div className="sm:ml-72 sm:pl-10 mt-8 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex items-center gap-4 mt-4 w-full overflow-x-auto">
            {
              docSlots.length && docSlots.map((item, index) => (
                <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-sky-600 text-white' : 'border border-gray-500'}`} key={index}>
                  <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                  <p>{item[0] && item[0].dateTime.getDate()}</p>
                </div>
              ))
            }
          </div>
          <div className="flex items-center gap-4 mt-4 w-full overflow-x-auto">
            {
              docSlots.length && docSlots[slotIndex].map((item, index) => (
                <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time ===slotTime ? 'text-white bg-sky-600' : 'text-gray-500 border border-gray-400'} `} key={index}>
                  {item.time.toLowerCase()}
                </p>
              ))
            }
          </div>
          <button className="text-white bg-sky-600 text-base font-light px-12 py-3 rounded-full mt-6">Book an appointment</button>
        </div>

        {/*---Listing related doctors---*/}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
        
      </div>
    )
  );
};

export default Appointments;
