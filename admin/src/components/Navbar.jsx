import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const {aToken,setAToken} = useContext(AdminContext);
    const navigate = useNavigate();

    const logout = ()=>{
        navigate('/');
        aToken && setAToken('');
        aToken && localStorage.removeItem('aToken');
       
    }
  return (
    <div className='flex items-center justify-between px-4 sm:px-10 py-4 border-b bg-white shadow-md'> 
      <div className='flex gap-3 items-center text-xs'>
        <img onClick={()=>{navigate(`/`)}} className='w-8 cursor-pointer ' src={assets.icon} alt="logo" />

        <p className=' cursor-pointer text-2xl font-bold text-sky-900'>DocOnTime</p>
    
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-700'>{aToken?'Admin':'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full hover:scale-105 hover:shadow-sm transition-all ease-in-out duration-300'>Logout</button>
    </div>
  )
}

export default Navbar
