import React from 'react';

export default function Dashboard() {
  return (
    <div className='h-screen w-screen bg-teal-800 flex items-center justify-center'>
      <div className='bg-teal-800'>
        <div className='grid grid-cols-2 gap-x-12 gap-y-8 mx-8'>
          <div className='bg-teal-900 text-white p-6 border border-gray-400 rounded-lg shadow-md'>
            <p className='text-lg font-semibold'>Emergency Responses</p>
            <p className='text-3xl font-bold'>55</p>
          </div>
          <div className='bg-teal-900 text-white p-6 border border-gray-400 rounded-lg shadow-md'>
            <p className='text-lg font-semibold'>Current emergency call</p>
            <p className='text-3xl font-bold'>2</p>
          </div>
          <div className='bg-teal-900 text-white p-6 border border-gray-400 rounded-lg shadow-md'>
            <p className='text-lg font-semibold'>Current Contact Request</p>
            <p className='text-3xl font-bold'>0</p>
          </div>
          <div className='bg-teal-900 text-white p-6 border border-gray-400 rounded-lg shadow-md'>
            <p className='text-lg font-semibold'>Daily In-patient checkup</p>
            <p className='text-3xl font-bold'>6/10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
