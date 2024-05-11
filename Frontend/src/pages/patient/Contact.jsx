import React from 'react';
import { useSelector } from 'react-redux';
import phone from '../../assets/phone.png';
import email from '../../assets/email.png';

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
    <div className='h-screen mt-8 '>
      <h1 className='text-green-900 text-4xl font-bold ml-80'>Contact Your Emergency Doctor</h1>
      <div className='flex space-x-20 mt-12 ml-48'>
        <div>
          <button className='w-96 h-96 bg-[#fc445c] border-8 border-red-600 rounded-full text-white font-bold text-5xl relative flex flex-col items-center' 
            onClick={handleEmergencyCall}>
            <img src={phone} alt='phone' className='h-60 w-60 mt-8'/>
            <span className='absolute left-1/2 transform -translate-x-1/2 bottom-20'>Emergency</span>
          </button>
          <h1 className='text-center mt-8 text-red-600 text-4xl font-bold'>Make an Emergency Call</h1>
        </div>
        <div>
          <button className='w-96 h-96 bg-[#60a8ff] border-8 border-blue-600 rounded-full text-white font-bold text-5xl relative flex flex-col items-center' 
          >
            <img src={email} alt='email' className='h-60 w-60 mt-8'/>
            <span className='absolute left-1/2 transform -translate-x-1/2 bottom-20'>Email</span>
          </button>
          <h1 className='text-center mt-8 text-blue-600 text-4xl font-bold'>Send an Email</h1>
        </div>
      </div>
    </div>
  );
}
