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
    <div>
      <button onClick={handleCall} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2'>Call</button>
      <button onClick={handleEmail} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>Email</button>
    </div>
  );
}
