import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="flex flex-col w-screen">
        <div className="flex items-center bg-white px-20 h-16 shadow-sm border-b border-gray-300">
          <Link to='/'>
            <h1 className='block items-center text-2xl font-bold'>HealSync</h1>
          </Link>
        </div>
    </div>
  )
}
