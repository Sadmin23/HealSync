import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { SignOut } from '../redux/userSlice';
import { adminLinks, doctorLinks, nurseLinks, patientLinks } from './SidebarData';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';


export default function Sidebar() {

  const user = useSelector((state) => state.user.currentUser);
  const gender = user.gender;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let navigationLinks

  const userType = user.user;

  switch (userType) {
    case 'doctor':
      navigationLinks = doctorLinks
      break;
    case 'nurse':
      navigationLinks = nurseLinks
      break;
    case 'patient':
      navigationLinks = patientLinks
      break;
    case 'admin':
      navigationLinks = adminLinks
      break;
    default:
      navigationLinks = patientLinks
  }

  const handleLogout = () => {
    dispatch(SignOut());
    navigate('/');
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };  

  return (
    <div className='w-64 text-gray-700 border-r border-b rounded-br-md shadow-md bg-white border-gray-300 text-center h-screen'>
        <img 
          src={gender === 'male' ? avatar1 : avatar2} 
          alt='logo' 
          className='w-28 h-20 mx-auto mt-5'
        />
        <p className='font-bold text-xl mt-2 mb-1'>{capitalizeFirstLetter(user.username)}</p>
        <p className='font-semibold text-slate-500'>{capitalizeFirstLetter(user.user)}</p>
        <main className='my-10'>
            <ul className='px-4'>
              {navigationLinks.map((link, index) => (
                <Link to={link.to} key={index}>
                  <li className='p-2 flex items-center rounded-lg h-14 font-semibold hover:bg-gray-100'>
                    {link.label}
                  </li>
                </Link>
              ))}
              <button className='w-full p-2 flex items-center rounded-lg h-14 font-semibold hover:bg-gray-100' onClick={handleLogout}>
                Logout
              </button>
            </ul>
        </main>
    </div>
  )
}
