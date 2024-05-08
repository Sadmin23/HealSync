import React from 'react'
import AllEmergency from './AllEmergencies'

export default function Emergencies() {
  return (
    <div className='h-screen p-8'>
      <h1 className="text-lg font-bold text-green-900 mx-2">EMERGENCY LIST</h1>
      <header className="flex mt-6 text-white bg-green-900 font-semibold border border-green-950 rounded-t-md">
        <div className="pl-6 py-2 w-44">Patient ID</div>
        <div className="pl-6 py-2 w-40">Patient Name</div>
        <div className='pl-6 py-2 w-44'>Doctor ID</div>
        <div className="pl-6 py-2 w-40">Doctor Name</div>
        <div className="pl-6 py-2 w-60">Emergency Time</div>
        <div className="pl-6 py-2 w-60">Action</div>
      </header>
      <body>
        {
          AllEmergency.map((emergency, index) => (
            <div key={index} className={`flex font-semibold border-x border-green-950 ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-200'} ${index === (AllEmergency.length - 1) ?  `border-b rounded-b` : ``}`}>
              <div className="pl-6 py-2 w-44">{emergency.doctorId}</div>
              <div className="pl-6 py-2 w-40">{emergency.doctorName}</div>
              <div className="pl-6 py-2 w-44">{emergency.patientId}</div>
              <div className="pl-6 py-2 w-40">{emergency.patientName}</div>
              <div className="pl-6 py-2 w-60">{emergency.time}</div>
              <div className='flex items-center ml-6 w-60'>{emergency.action}</div>
            </div>
          ))
        }       
      </body>
    </div>
  )
}
