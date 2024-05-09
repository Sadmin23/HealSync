import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { SignOut } from '../redux/user/userSlice';
import { adminLinks, doctorLinks, nurseLinks, patientLinks } from './SidebarData';

export default function Sidebar() {

  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let navigationLinks

  const userType = user.user;

  switch (userType) {
    case 'Doctor':
      navigationLinks = doctorLinks
      break;
    case 'Nurse':
      navigationLinks = nurseLinks
      break;
    case 'Patient':
      navigationLinks = patientLinks
      break;
    case 'Admin':
      navigationLinks = adminLinks
      break;
    default:
      navigationLinks = patientLinks
  }

  const handleLogout = () => {
    dispatch(SignOut());
    navigate('/');
  }

  return (
    <div className='w-64 text-gray-700 border-r border-b rounded-br-md shadow-md bg-white border-gray-300 text-center h-full'>
        <img 
          src='avatar.png' 
          alt='logo' 
          className='w-28 h-20 mx-auto mt-5'
        />
        <p className='font-semibold mt-2 mb-1'>{user.username}</p>
        <p>{user.user}</p>
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
