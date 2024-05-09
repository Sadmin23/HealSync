import React from 'react'
import { PatientList } from './PatientList'

export default function Patients() {
  return (
    <div className='h-screen ml-8 mt-8 overflow-y-auto'>
    <h1 className="text-lg font-bold text-green-900 mx-2">PATIENT LIST</h1>
    <header className="flex mt-6 text-white bg-green-900 font-semibold border border-green-950 rounded-t-md">
      <div className="pl-4 py-2 w-32">Patient ID</div>
      <div className="pl-4 py-2 w-32">Patient Name</div>
      <div className="pl-4 py-2 w-32">Blood Group</div>
      <div className="pl-4 py-2 w-32">Phone</div>
      <div className="pl-4 py-2 w-40">Email</div>
      <div className="pl-4 py-2 w-40">Attendant Name</div>
      <div className="pl-4 py-2 w-40">Attendant Phone</div>
      <div className="pl-4 py-2 w-52">Attendant Email</div>
    </header>
    <body>
      {
        PatientList.map((patient, index) => (
          <div key={index} className={`flex font-semibold border-x border-green-950 ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-200'} ${index === (PatientList.length - 1) ?  `border-b rounded-b` : ``}`}>
            <div className="pl-4 py-2 w-32">{patient.patientId}</div>
            <div className="pl-4 py-2 w-32">{patient.name}</div>
            <div className="pl-6 py-2 w-32">{patient.blood_group}</div>
            <div className="pl-4 py-2 w-32">{patient.phone}</div>
            <div className="pl-4 py-2 w-40">{patient.email}</div>
            <div className="pl-4 py-2 w-40">{patient.attendant_name}</div>
            <div className="pl-4 py-2 w-40">{patient.attendant_phone}</div>
            <div className="pl-4 py-2 w-52">{patient.attendant_email}</div>
          </div>
        ))
      }       
    </body>
  </div>
  )
}
