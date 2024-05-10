import React from 'react';
import { useSelector } from 'react-redux';

export default function Contact() {

  const user = useSelector((state) => state.user.currentUser);
  const name = user.username;

  const handleEmergencyCall = async () => {
    try {
      const currentTime = new Date().toLocaleTimeString();

      const response = await fetch('http://localhost:8000/emergencies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          time: currentTime,
          action: 'false'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to make emergency call');
      }

      window.open('http://localhost:3001/', '_blank');
    } catch (error) {
      console.error('Error making emergency call:', error);
    }
  };

  return (
    <div className='h-screen flex ml-96 mt-40'>
      <button
        className='bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded h-10'
        onClick={handleEmergencyCall} // Attach the event handler to the onClick event
      >
        Emergency Call
      </button>
    </div>
  );
}
