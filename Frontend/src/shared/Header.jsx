import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div className="flex flex-col w-screen">
        <div className="flex items-center bg-white px-16 h-16 shadow-sm border-b border-gray-300">
          <img src={logo} alt='logo' className='w-12 h-12 mr-3 object-cover'/>
          <Link to='/'>
            <h1 className='block items-center text-3xl font-bold'>HealSync</h1>
          </Link>
        </div>
    </div>
  )
}
