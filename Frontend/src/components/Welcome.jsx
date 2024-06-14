import React from 'react'
import welcome from '../assets/welcome.png'
import { useSelector } from 'react-redux';

export default function Welcome() {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };  

  const user = useSelector((state) => state.user.currentUser);
    
  return (
    <div className='w-[1200px] pb-6 bg-white flex rounded-lg shadow-md mt-6 items-center'>
        <img src={welcome} alt='welcome'/>
        <div className='pr-2 space-y-2'>
            <h1 className='text-gray-600 font-semibold'>Welcome Back</h1>
            <h1 className='text-blue-500 text-2xl font-bold tracking-wide'>{capitalizeFirstLetter(user.username)}!</h1>
            <p className='text-gray-600'>We would like to take this opportunity to welcome you to our practice and to thank you for choosing our
physicians to participate in your healthcare.</p>
        </div>
    </div>
  )
}
