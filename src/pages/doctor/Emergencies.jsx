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
      <header className="flex mt-8 text-white bg-green-900 font-semibold border border-green-950 rounded-t-md">
        <div className="pl-6 py-2 w-60">Patient ID</div>
        <div className="pl-6 py-2 w-80">Patient Name</div>
        <div className="pl-6 py-2 w-80">Time</div>
        <div className="pl-6 py-2 w-80">Action</div>
      </header>
      <body>
        <div className="flex font-semibold border-x border-green-950 bg-green-50">
            <div className="pl-6 py-2 w-60">U1102401Y44</div>
            <div className="pl-6 py-2 w-80">Md. Sadmin Tahmid Khan</div>
            <div className="pl-6 py-2 w-80">{new Date().toLocaleString()}</div>
            <div className="pl-6 py-2 w-80">Need emergency response</div>
        </div>
        <div className="flex font-semibold border-x border-green-950 bg-green-200">
            <div className="pl-6 py-2 w-60 rounded-bl-md">U1102401Y44</div>
            <div className="pl-6 py-2 w-80">Md. Sadmin Tahmid Khan</div>
            <div className="pl-6 py-2 w-80">{new Date().toLocaleString()}</div>
            <div className="pl-6 py-2 w-80 rounded-br-md">Need emergency response</div>
        </div>
        <div className="flex font-semibold border-x border-green-950 bg-green-50 rounded-b-md border-b ">
            <div className="pl-6 py-2 w-60">U1102401Y44</div>
            <div className="pl-6 py-2 w-80">Md. Sadmin Tahmid Khan</div>
            <div className="pl-6 py-2 w-80">{new Date().toLocaleString()}</div>
            <div className="pl-6 py-2 w-80">Need emergency response</div>
        </div>        
      </body>
    </div>
  );
}
