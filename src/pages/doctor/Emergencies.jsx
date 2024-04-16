import React from 'react';

export default function Emergencies() {
  // Function to generate a random patient ID
  const generateRandomPatientID = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  // Generate a random patient ID
  const defaultPatientID = generateRandomPatientID();

  // Function to generate a random action
  const generateRandomAction = () => {
    const actions = ['Need emergency response', 'Seeking immediate help', 'Urgent assistance required'];
    const randomIndex = Math.floor(Math.random() * actions.length);
    return actions[randomIndex];
  };

  // Generate a random action
  const defaultAction = generateRandomAction();

  return (
    <div className='h-screen p-8'>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-2xl font-bold text-teal-800'>Healsync</h1>
        <p className='text-2xl font-bold text-teal-800'>EMERGENCIES</p>
      </div>
      <div className="w-full">
        <table className='block w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-teal-700 text-white'>
              <th className='border border-gray-300 p-2'>Patient ID</th>
              <th className='border border-gray-300 p-2'>Date/Time</th>
              <th className='border border-gray-300 p-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-gray-300 p-2'>{defaultPatientID}</td>
              <td className='border border-gray-300 p-2'>{new Date().toLocaleString()}</td>
              <td className='border border-gray-300 p-2'>{defaultAction}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
