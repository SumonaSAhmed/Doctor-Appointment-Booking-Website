import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

  return (
    <div className='h-90 mx-22 mb-20 flex flex-col md:flex-row flex-wrap bg-blue-400 rounded-lg px-3 md:px-6 lg:px-10'>
      {/*----left side----*/}
      <div className='md:w-2/3 flex flex-col items-start justify-center gap-4 py-10 m-auto'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br/>With 100+ Trusted Doctors</p>
        <a onClick={()=>{navigate(`/login`); scrollTo(0,0)}} className='flex items-center gap-2 bg-white py-3 px-8 text-gray-600 text-sm rounded-full m-auto md:m-0 hover:scale-105 transition-all duration-300'>Create Account</a>
      </div>

      {/*----right side----*/}
      <div className='md:w-1/3 relative flex justify-center'>
        <img className='md:absolute h-auto rounded-lg' src={assets.appointment_img} alt=''/>
      </div>
    </div>
  )
}

export default Banner
