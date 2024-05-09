import React from 'react';

export default function ContactButtons({ onClose }) {
  const handleCall = () => {
    // Logic to handle call action
    alert('Calling...');
  };

  const handleEmail = () => {
    // Logic to handle email action
    alert('Sending email...');
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button onClick={handleCall} className='bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400'>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3v3M9 3v3m6 0L12 5 9 6m6 9v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4l6-3 6 3zm0 0v3l3-1.5" />
        </svg>
        Call
      </button>
      <button onClick={handleEmail} className='bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400'>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4m8-5H4m8 10H4m8-5H4m8 10a9 9 0 110-18 9 9 0 010 18z" />
        </svg>
        Email
      </button>
    </div>
  );
}
