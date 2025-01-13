import React from 'react'
import {specialityData} from "../assets/assets"
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center justify-center gap-4 py-16 text-gray-800'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>Effortlessly navigate our extensive network of reputable doctors and secure your appointment with utmost convenience.</p>
      <div className='flex gap-5 sm:justify-center pt-5 w-full overflow-scroll scro'>
        {
          specialityData.map((item,index)=>(
            <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
             key={index} to={`/doctor/${item.speciality}`}>
              <img className='w-16 sm:w-24 mb-2 hover:scale-110 transition-all duration-300' src={item.image} alt="" />
              <p>{item.speciality}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default SpecialityMenu
