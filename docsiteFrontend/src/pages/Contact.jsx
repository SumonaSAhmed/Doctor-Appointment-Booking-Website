import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='mx-40 sm:mx-[10%]'>
      <div>
        <p className="text-center text-2xl text-gray-600 font-medium pt-10">
          CONTACT US
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-15">
        <img className='w-150 h-100' src={assets.contact_image} alt=''/>
        <div className="flex flex-col justify-center items-start text-sm text-gray-700 gap-5">
          <b className="text-gray-800 text-base">Our Address:</b>
          <p>MediBook Headquarters</p>
          <p><b className="text-gray-800 text-base">Call Us:</b>+91 1234567890</p>
          <p><b className="text-gray-800 text-base">Email Us:</b>abcdefgh@gmail.com</p>
          <b className="text-gray-800 text-base">Working Hours:</b>
          <p>Monday – Friday: 9:00 AM – 6:00 PM<br/>
          Saturday – Sunday: 10:00 AM – 4:00 PM</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
