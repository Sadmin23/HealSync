import React from 'react'
import TreatmentPlan from './TreatmentPlan'
import { useSelector } from 'react-redux';

export default function TreatmentOverview() {

  const user = useSelector((state) => state.user.currentUser);

  const patiendId = user.userId;

  return (
    <div className='h-screen'>
        <TreatmentPlan role="patient" patientId={patiendId}/>
    </div>
  )
}
