import React from 'react'
import Treatment from '../../components/Treatment'
import AllPlan from '../../components/AllPlan'

export default function TreatmentPlan() {
  return (
    <div className='h-screen'>
      <h1 className="text-lg my-4 font-bold text-slate-400 mx-12">UPCOMING TREATMENT</h1>
      <Treatment/>
      <AllPlan/>
    </div>
  )
}
