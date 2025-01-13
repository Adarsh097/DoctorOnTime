import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
  const navigate = useNavigate();
  const {backendUrl, token, setToken} = useContext(AppContext);
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    //! Add any form handling logic here
    try {
      if(state == 'Sign Up'){
        const {data} = await axios.post(backendUrl + '/api/user/register',{name,password,email})
        if(data.success){
          localStorage.setItem('token',data.token);
          setToken(data.token)
        }else{
          toast.error(data.message);
        }
      }else{
        const {data} = await axios.post(backendUrl + '/api/user/login',{password,email})
        if(data.success){
          localStorage.setItem('token',data.token);
          setToken(data.token)
        }else{
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
    
  };

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='m-10 min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-300 to-white hover:shadow-lg outline-none hover:bg-gradient-to-b hover:from-white hover:to-sky-300 transition-all duration-700 rounded-lg'>
      <div className=' flex flex-col gap-4 p-8 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-sky-900'>
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </h2>
        <p className='text-sm text-gray-500'>
          Please {state === 'Sign Up' ? "sign up" : "sign in"} to book an appointment
        </p>
        {
          (state === 'Sign Up') &&  <div className='w-full'>
          <label className='block text-gray-600 font-medium mb-1'>Full Name</label>
          <input
            className='hover:scale-105 transition-all duration-500 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-500'
            type="text"
            placeholder="Enter your full name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        }
       
        
        <div className='w-full'>
          <label className='block text-gray-600 font-medium mb-1'>Email</label>
          <input
            className='hover:scale-105 transition-all duration-500 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-500'
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        
        <div className='w-full'>
          <label className='block text-gray-600 font-medium mb-1'>Password</label>
          <input
            className='hover:scale-105 transition-all duration-500 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-indigo-500'
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        
        <button
          type="submit"
          className='w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-sky-900 transition hover:scale-105 duration-500'
        >
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </button>

        <p className='text-sm text-gray-500'>
          {state === 'Sign Up' ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}
            className='text-primary cursor-pointer hover:underline'
          >
            {state === 'Sign Up' ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </form>
  )
}

export default Login;
