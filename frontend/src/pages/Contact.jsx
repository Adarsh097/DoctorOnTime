import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='w-4/5 mx-auto flex text-center md:text-left  flex-col md:flex-row mt-16 items-center gap-6'>
        <img className='w-full max-w-[370px] lg:mr-20 outline-none rounded-xl shadow-xl' src={assets.contact_image} alt="" />
        <div className='flex flex-col md:pl-10 gap-6'>
        <p className='text-gray-900 text-xl font-medium'>OUR OFFICE</p>
        <p className='text-gray-600 text-sm' >A-25, 3rd Floor, Shivalik Road, Malviya Nagar, New Delhi, Delhi, India, 110017</p>
        <p className='text-gray-600 text-sm'>Tel: (+91) 99999-99999 <br />Email: docontime@gmail.com</p>
        <p  className='text-gray-900 text-xl font-medium'>Careers at DocOnTime</p>
        <p className='text-gray-600 text-sm'>Learn more about our teams and job openings.</p>
        <button className='border py-3 border-gray-300 rounded-lg hover:outline-none hover:border-none  hover:scale-105 hover:shadow-lg transition-all duration-300 hover:text-white hover:bg-sky-800'>Explore Jobs</button>
        </div>
     
      </div>

    </div>
  )
}

export default Contact
