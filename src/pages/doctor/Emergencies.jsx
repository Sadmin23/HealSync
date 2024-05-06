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
      <div className="flex mt-8 text-white bg-slate-700 h-16 text-lg font-semibold rounded-t-lg">
        <div className="pl-6 pt-4 border-l rounded-tl-lg border-r border-y border-slate-950 w-60">Patient ID</div>
        <div className="pl-6 pt-4 border-r border-y border-slate-950 w-80">Patient Name</div>
        <div className="pl-6 pt-4 border-r border-y border-slate-950 w-80">Time</div>
        <div className="pl-6 pt-4 border-r rounded-tr-lg border-y border-slate-950 w-80">Action</div>
      </div>
    </div>
  );
}
