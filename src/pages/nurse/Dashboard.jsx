import React from 'react';

export default function NurseDashboard() {
  return (
    <div className='h-screen flex justify-center items-center bg-teal-900'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8'>
        <div className='bg-white rounded-lg shadow-md'>
          <div className='p-6'>
            <p className='text-lg font-semibold'>Emergency Responses</p>
            <p className='text-3xl font-bold'>55</p>
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-md'>
          <div className='p-6'>
            <p className='text-lg font-semibold'>Current emergency call</p>
            <p className='text-3xl font-bold'>0</p>
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-md'>
          <div className='p-6'>
            <p className='text-lg font-semibold'>Current Contact Request</p>
            <p className='text-3xl font-bold'>0</p>
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-md'>
          <div className='p-6'>
            <p className='text-lg font-semibold'>Next vitals checkup</p>
            <p className='text-base'>in 1 hour 20 minutes, patient ID: 123214</p>
          </div>
        </div>
      </div>
    </div>
  );
}
