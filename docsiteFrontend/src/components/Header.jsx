import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='h-120 flex flex-col md:flex-row flex-wrap bg-blue-400 rounded-lg px-6 md:px-10 lg:px-20'>
      {/*-----left side-----*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment<br/>With Trusted Doctors</p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-sm text-white font-light'>
            <img className='w-28 h-15' src={assets.group_profiles} alt=''/>
            <p>Simply browse through our extensive trusted doctors,<br className='hidden md:block'/>schedule your appointment hassle free.</p>
        </div>
        <a href='#speciality' className='flex items-center gap-2 bg-white py-3 px-8 text-gray-600 text-sm rounded-full m-auto md:m-0 hover:scale-105 transition-all duration-300'>
          Book Appointment <img className='w-3' src={assets.arrow_icon} alt=''/></a>
      </div>

      {/*-----right side-----*/}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-25 h-auto rounded-lg' src={assets.header_img} alt=''/>
      </div>
    </div>
  )
}

export default Header
