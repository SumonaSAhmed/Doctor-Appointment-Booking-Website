import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-5 my-15 md:mx-10'>
      <h1 className='text-3xl font-medium text-blue-800'>Top Doctors to Book</h1>
      <p className='text-base text-center'>Simply browse through our extensive list of trusted doctors.</p>
      <div className='ml-60 mr-60 w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0,10).map((item,index)=>(
            <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-teal-500 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                <img className='w-53 h-54' src={item.image} alt=''/>
                <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-blue-600'>
                        <p className='w-2 h-2 rounded-full bg-blue-600'></p>
                        <p>Available</p>
                    </div>
                    <p className='text-lg font-medium text-gray-900'>{item.name}</p>
                    <p className='text-sm text-gray-700'>{item.speciality}</p>
                </div>
            </div>
        ))}
      </div>
      <button onClick={()=>{navigate(`/doctors`); scrollTo(0,0)}} className='flex items-center gap-2 bg-blue-100 py-3 px-12 text-gray-700 text-sm font-normal rounded-full m-10 hover:scale-105 transition-all duration-300'>
        more</button>
    </div>
  )
}

export default TopDoctors
