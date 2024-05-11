import React from 'react'

export default function DashboardBoxes() {
  return (
    <div className='mt-10 flex flex-wrap justify-between'>
        <div className='w-72 h-52 p-4 text-center space-y-6 rounded-md bg-green-700 text-3xl tracking-wider text-white font-bold'>
          <h1 className='mt-2'>Patients:</h1>
          <h1 className='font-extrabold text-7xl text-yellow-400'>12</h1>
        </div>
        <div className='w-72 h-52 p-4 text-center space-y-6 rounded-md bg-green-700 text-3xl tracking-wider text-white font-bold'>
          <h1 className='mt-2'>Doctors:</h1>
          <h1 className='font-extrabold text-7xl text-yellow-400'>9</h1>
        </div>
        <div className='w-72 h-52 p-4 text-center space-y-6 rounded-md bg-green-700 text-3xl tracking-wider text-white font-bold'>
          <h1 className='mt-2'>Nurses:</h1>
          <h1 className='font-extrabold text-7xl text-yellow-400'>8</h1>
        </div>
        <div className='w-72 h-52 p-4 text-center space-y-6 rounded-md bg-green-700 text-3xl tracking-wider text-white font-bold'>
          <h1 className='mt-2'>Emergencies:</h1>
          <h1 className='font-extrabold text-7xl text-yellow-400'>20</h1>
        </div>
    </div>
  )
}
