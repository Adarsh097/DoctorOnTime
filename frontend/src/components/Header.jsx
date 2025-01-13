import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
<div className="relative rounded-lg overflow-hidden shadow-md bg-white/opacity shadow-header-shadow ">
  {/* Video Background */}
  <video
    src={assets.animation}
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    className="absolute top-0 left-0 w-full h-full object-fill z-0 "
  />

  {/* Content Wrapper */}
  <div className="relative z-10 flex flex-col md:flex-row flex-wrap md:flex-nowrap px-6 md:px-10 lg:px-20">
    {/* ---- LEFT SIDE ---- */}
    <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
      <p className="text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight md:leading-tight lg:leading-tight">
        Book Appointment <br />
        With Trusted Doctors
      </p>

      <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-medium tracking-wide">
        <img className="w-28" src={assets.group_profiles} alt="" />
        <p>
          Take control of your health by booking appointments
          <br className="hidden sm:block" />
          online with expert doctors at your convenience.
        </p>
      </div>
      <a
        href="#speciality"
        className="flex items-center gap-2 bg-white py-3 px-8 rounded-full text-gray-700 text-sm md:m-0 hover:drop-shadow-lg hover:shadow-white hover:scale-105 transition-all duration-300"
      >
        Book Appointment <img className="w-3" src={assets.arrow_icon} alt="" />
      </a>
    </div>

    {/* ---- RIGHT SIDE ---- */}
    <div className="md:w-1/2 relative">
      {/* <img
        className="w-full md:absolute bottom-0 h-auto rounded-lg"
        src={assets.header_img}
        alt=""
      /> */}
    </div>
  </div>

  {/* Optional Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-5"></div>
</div>
)}


export default Header;
