import React from 'react'
import TreatmentPlan from './TreatmentPlan'

export default function TreatmentOverview() {
  return (
    <div className='h-screen'>
        <TreatmentPlan role="patient" patientId="102456"/>
    </div>
  )
}
