import React from 'react'
import NurseList from './NurseList'

export default function Nurses() {
  return (
    <div className='h-screen ml-8 mt-8'>
    <h1 className="text-lg font-bold text-green-900 mx-2">NURSE LIST</h1>
    <header className="flex mt-6 text-white bg-green-900 font-semibold border border-green-950 rounded-t-md">
      <div className="pl-6 py-2 w-52">Nurse ID</div>
      <div className="pl-6 py-2 w-48">Nurse Name</div>
      <div className='pl-6 py-2 w-32'>Gender</div>
      <div className="pl-6 py-2 w-48">Phone</div>
      <div className="pl-6 py-2 w-60">Email</div>
    </header>
    <body>
      {
        NurseList.map((nurse, index) => (
          <div key={index} className={`flex font-semibold border-x border-green-950 ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-200'} ${index === (NurseList.length - 1) ?  `border-b rounded-b` : ``}`}>
            <div className="pl-6 py-2 w-52">{nurse.nurseId}</div>
            <div className="pl-6 py-2 w-48">{nurse.name}</div>
            <div className="pl-6 py-2 w-32">{nurse.gender}</div>
            <div className="pl-6 py-2 w-48">{nurse.phone}</div>
            <div className="pl-6 py-2 w-60">{nurse.email}</div>
          </div>
        ))
      }       
    </body>
  </div>
  )
}
