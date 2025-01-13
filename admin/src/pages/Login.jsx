import React, { useContext, useState } from 'react'
import {assets} from "../assets/assets.js"
import { AdminContext } from '../context/AdminContext.jsx';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [state,setState] = useState("Admin");
    const {setAToken,backendUrl} = useContext(AdminContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const onSubmitHandler = async()=>{
        event.preventDefault(); //! to prevent the loading of the webpage on submitting the form
        try {
            if (state === 'Admin') {
                const {data} = await axios.post(`https://docontime.onrender.com` + '/api/admin/login',{
                    email : email,
                    password : password
                });
                if(data.success){
                    //! we will also store this token in local storage so, that when we reload the page, admin will be logged in 
                    setAToken(data.token);
                    localStorage.setItem('aToken',data.token);
                    toast.success("Login Successfull!");
                }else{
                    toast.error(data.message);
                    // toast.error("Login failed");
                }
            } else {
                
            }
        } catch (error) {
            toast.error("Login failed");
        }
    }
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <form onSubmit={onSubmitHandler} className="w-full max-w-md bg-white shadow-md rounded-lg p-8 space-y-6 hover:scale-110 transition-all duration-300">
        {/* Title Section */}
        <div className="text-center">
            <p className="text-2xl font-semibold text-gray-700">
                <span className="font-bold text-primary">{state}</span> Login
            </p>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    required 
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-gray-700"
                    placeholder="Enter your email"
                    onChange={(e)=>setEmail(e.target.value)} 
                    value={email}
                />
            </div>

            {/* Password Field */}
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    required 
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary text-gray-700"
                    placeholder="Enter your password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    value={password}
                />
            </div>
        </div>

        {/* Submit Button */}
        <button 
            type="submit" 
            className="w-full py-3 bg-primary hover:scale-105 hover:shadow-lg transition-all duration-500 text-white font-semibold rounded-lg hover:bg-sky-800 hover:text-white focus:outline-none focus:ring-2 "
        >
            Login
        </button>
        {
            state === 'Admin'
            ? <p>Doctor Login? <span className='text-primary underline cursor-pointer' onClick={()=>{setState('Doctor')}}>Click here!</span></p>
            : <p>Admin Login? <span className='text-primary underline cursor-pointer' onClick={()=>{setState('Admin')}}>Click here!</span></p>
        }
    </form>
</div>
  )
}

export default Login
