import React from 'react'
import Timeline from '../../components/Timeline'

export default function MedicalRecord() {
  return (
    <div className='h-screen'>
      <h1 className="text-lg my-4 font-bold text-slate-400 mx-12">MEDICAL RECORDS (Last update on 14/04/2024 at 14:30)</h1>
      <div className="flex flex-col p-8 ml-10 rounded-md justify-center items-center bg-white text-white text-base pb-8 sm:text-lg">
        <Timeline />
      </div>
    </div>
  )
}