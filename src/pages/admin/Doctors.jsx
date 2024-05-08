import React from 'react'
import DoctorList from './DoctorList'

export default function Doctors() {
  return (
    <div className='h-screen ml-8 mt-8'>
      <h1 className="text-lg font-bold text-green-900 mx-2">EMERGENCIES</h1>
      <header className="flex mt-6 text-white bg-green-900 font-semibold border border-green-950 rounded-t-md">
        <div className="pl-6 py-2 w-52">Doctor ID</div>
        <div className="pl-6 py-2 w-48">Doctor Name</div>
        <div className='pl-6 py-2 w-32'>Gender</div>
        <div className="pl-6 py-2 w-48">Specalization</div>
        <div className="pl-6 py-2 w-48">Phone</div>
        <div className="pl-6 py-2 w-60">Email</div>
      </header>
      <body>
        {
          DoctorList.map((doctor, index) => (
            <div key={index} className={`flex font-semibold border-x border-green-950 ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-200'} ${index === (DoctorList.length - 1) ?  `border-b rounded-b` : ``}`}>
              <div className="pl-6 py-2 w-52">{doctor.doctorId}</div>
              <div className="pl-6 py-2 w-48">{doctor.name}</div>
              <div className="pl-6 py-2 w-32">{doctor.gender}</div>
              <div className="pl-6 py-2 w-48">{doctor.specializations}</div>
              <div className="pl-6 py-2 w-48">{doctor.phone}</div>
              <div className="pl-6 py-2 w-60">{doctor.email}</div>
            </div>
          ))
        }       
      </body>
    </div>
  )
}
