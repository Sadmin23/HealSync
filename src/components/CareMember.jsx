import React from 'react'

export default function CareMember({src, name, designation}) {
  return (
    <div className='flex py-3 border-b space-x-4'>
        <img src={src} alt='Care Member' className='w-12 h-12 rounded-full' />
        <div>
            <h1 className='text-blue-700 font-semibold'>{name}</h1>
            <h2 className='text-gray-400 font-semibold'>{designation}</h2>
        </div>
    </div>
  )
}
