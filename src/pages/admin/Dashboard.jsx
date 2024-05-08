import React from 'react'
import Welcome from '../../components/Welcome'

export default function Dashboard() {
  return (
    <div className='h-screen mx-10'>
      <Welcome/>
      <div className='mt-10 flex flex-wrap justify-between'>
        <div className='w-72 h-52 p-4 rounded-md bg-green-700 text-white font-bold'>Box 1</div>
        <div className='w-72 h-52 p-4 rounded-md bg-green-700 text-white font-bold'>Box 2</div>
        <div className='w-72 h-52 p-4 rounded-md bg-green-700 text-white font-bold'>Box 3</div>
        <div className='w-72 h-52 p-4 rounded-md bg-green-700 text-white font-bold'>Box 4</div>
      </div>
    </div>
  )
}
