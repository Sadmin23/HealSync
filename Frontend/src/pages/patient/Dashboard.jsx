import React from 'react'
import Vitals from './Vitals'
import { useSelector } from 'react-redux';

export default function Dashboard() {

  const user = useSelector((state) => state.user.currentUser);

  const patientId = user.userId;

  return (
    <div className='h-screen'>
      <Vitals role="patient" patientId={patientId}/>
    </div>
  )
}
