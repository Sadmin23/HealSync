import React from 'react'

export default function CareMember({src, name, designation}) {
  return (
    <div className='flex py-6 border-b space-x-4'>
        <img src={src} alt='Care Member' className='w-12 h-12 rounded-full' />
        <div>
            <h1>{name}</h1>
            <h2>{designation}</h2>
        </div>
    </div>
  )
}
