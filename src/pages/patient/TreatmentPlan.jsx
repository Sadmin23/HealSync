import React from 'react'
import Treatment from '../../components/Treatment'
import CareTeam from '../../components/CareTeam'
import Reports from '../../components/Report'
import Prescriptions from '../../components/Prescriptions'

export default function TreatmentPlan({role, patientId}) {

  const update = role === 'doctor' ? true : false

  return (
    <div className='h-screen'>
      <h1 className="text-lg my-4 font-bold text-slate-400 ml-12">UPCOMING TREATMENT</h1>
      <Treatment/>
      <div className='w-[1200px] flex justify-between items-center mt-8 ml-10 rounded-lg h-72'>
        <CareTeam patientId={patientId}/>
        <Prescriptions update={update} patientId={patientId}/>
        <Reports update={update} patientId={patientId}/>
      </div>
    </div>
  )
}
