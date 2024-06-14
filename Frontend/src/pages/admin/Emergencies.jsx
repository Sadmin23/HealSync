import React, { useEffect, useState } from 'react'
import error from '../../assets/latest/error.jpg'

export default function Emergencies() {

  const [emergencyList, setEmergencyList] = useState([]);


  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/emergency`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch emergency data');
      }
      return response.json();
    })
    .then(data => {
        setEmergencyList(data);
      }
    )
    .catch(error => console.error('Error fetching patient data:', error))}
  , []);

  return (
    <div className='h-screen p-8'>
      <h1 className="text-lg font-bold text-green-900 mx-2">EMERGENCY LIST</h1>
      <header className="flex mt-6 text-white bg-green-900 font-semibold border border-green-950 rounded-t-md">
        <div className="pl-6 py-2 w-72">Patient ID</div>
        <div className="pl-6 py-2 w-60">Patient Name</div>
        <div className="pl-6 py-2 w-48">Date</div>
        <div className="pl-6 py-2 w-40">Time</div>
        <div className="pl-6 py-2 w-72">Response</div>
      </header>
      <body>
      { emergencyList.length !== 0 ?
        emergencyList.map((emergency, index) => (
          <div key={index} className={`flex font-semibold border-x border-green-950 ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-200'} ${index === (emergencyList.length - 1) ?  `border-b rounded-b` : ``}`}>
            <div className="pl-6 py-2 w-72">{emergency.id}</div>
            <div className="pl-6 py-2 w-60">{emergency.name}</div>
            <div className="pl-6 py-2 w-48">{emergency.time.split('|')[0]}</div>
            <div className="pl-6 py-2 w-40">{emergency.time.split('|')[1]}</div>
            <div className="pl-6 py-2 w-72">{emergency.action}</div>
          </div>
        )) :
        <div className="flex flex-col items-center justify-center bg-white rounded-b-md">
        <img src={error} alt="error" className="w-96 h-80" />
        <h1 className="text-2xl font-bold text-red-900 pb-12">No emergencies found!</h1>
      </div>        
      }       
      </body>
    </div>
  )
}
