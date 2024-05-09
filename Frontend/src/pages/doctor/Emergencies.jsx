import React from 'react';
import EmergencyList from './EmergencyList';

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
      <h1 className="text-lg font-bold text-green-900 mx-2">EMERGENCIES</h1>
      <header className="flex mt-6 text-white bg-green-900 font-semibold border border-green-950 rounded-t-md">
        <div className="pl-6 py-2 w-60">Patient ID</div>
        <div className="pl-6 py-2 w-80">Patient Name</div>
        <div className="pl-6 py-2 w-80">Time</div>
        <div className="pl-16 py-2 w-80">Action</div>
      </header>
      <body>
        {
          EmergencyList.map((emergency, index) => (
            <div key={index} className={`flex font-semibold border-x border-green-950 ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-200'} ${index === (EmergencyList.length - 1) ?  `border-b rounded-b` : ``}`}>
              <div className="pl-6 py-2 w-60">{emergency.id}</div>
              <div className="pl-6 py-2 w-80">{emergency.name}</div>
              <div className="pl-6 py-2 w-80">{emergency.time}</div>
              <div className='flex items-center ml-6'>
                <button className='bg-red-600 text-white py-1 px-10 rounded-md'>Respond</button>
              </div>
            </div>
          ))
        }       
      </body>
    </div>
  );
}
