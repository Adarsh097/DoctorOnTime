import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    // ! we use this hook to perform the event based navigation. e.g. click,mouseover,hover
    const navigate = useNavigate();
    const {token,setToken,userData} = useContext(AppContext);

    const [showMenu,setShowMenu] = useState(false);

    //! logging out the user
    const logout = ()=>{
      setToken(false);
      localStorage.removeItem('token');
    }
   
  return (
    <div className='flex  items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      
      <div className='flex items-center'>
      <img onClick={()=>{navigate(`/`)}} className='w-8 cursor-pointer ' src={assets.icon} alt="logo" />
      <NavLink to='/' className=' cursor-pointer text-2xl font-bold text-sky-900'>DocOnTime</NavLink>
      </div>
      
      <ul className='hidden  md:flex items-start gap-5 font-medium'>
        <NavLink to='/' className={` hover:translate-y-[-5px] transition-all duration-300`}>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctor'  className={` hover:translate-y-[-5px] transition-all duration-300`}>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'  className={` hover:translate-y-[-5px] transition-all duration-300`}>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'  className={` hover:translate-y-[-5px] transition-all duration-300`}>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {/* button is displayed only when the token is false */}
        {
            (token && userData)?
            <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={userData.image} alt="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                {/* to display drop down */}
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block '>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>
            : <button onClick={()=>{navigate('/login')}} className='bg-primary text-white px-8 py-3 rounded-2xl font-light hidden md:block'>Create Account</button>

        }
        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden cursor-pointer' src={assets.menu_icon} alt="" />
        {/* MOBILE MENU */}
        <div className={`${showMenu ?'fixed w-full':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <div className='flex gap-1'>
            <img onClick={()=>{navigate(`/`)}} className='w-8' src={assets.icon} alt="logo" />
            <p className=' text-2xl font-bold text-sky-900'>DocOnTime</p>
            </div>
           
            <img className='w-7 cursor-pointer' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-10 mt-5 px-5 text-lg font-medium'>
          <NavLink onClick={()=>{setShowMenu(false)}} className="py-5 text-center rounded-lg hover:rounded-full hover:bg-primary border-gray-300 text-gray-900 hover:text-white hover:outline-none hover:border-none hover:scale-105 transition-all duration-300 hover:shadow-md border w-full" to={'/'}>HOME</NavLink>
          <NavLink onClick={()=>{setShowMenu(false)}} className="py-5 text-center rounded-lg hover:rounded-full hover:bg-primary border-gray-300 text-gray-900 hover:text-white hover:outline-none hover:border-none hover:scale-105 transition-all duration-300 hover:shadow-md border w-full" to={'/doctor'}>ALL DOCTORS</NavLink>
          <NavLink onClick={()=>{setShowMenu(false)}} className="py-5 text-center rounded-lg hover:rounded-full hover:bg-primary border-gray-300 text-gray-900 hover:text-white hover:outline-none hover:border-none hover:scale-105 transition-all duration-300 hover:shadow-md border w-full" to={'/about'}>ABOUT</NavLink>
          <NavLink onClick={()=>{setShowMenu(false)}} className="py-5 text-center rounded-lg hover:rounded-full  hover:bg-primary border-gray-300 text-gray-900 hover:text-white hover:outline-none hover:border-none hover:scale-105 transition-all duration-300 hover:shadow-md border w-full"  to={'/contact'}>CONTACT</NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
