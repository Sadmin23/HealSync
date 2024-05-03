import React from 'react'
import CareTeam from '../../components/CareTeam'
import Prescriptions from '../../components/Prescriptions'
import Reports from '../../components/Report'

export default function Contact() {
  return (
    <div className='h-screen'>
      <div className='w-[1200px] flex justify-between items-center mt-8 ml-10 rounded-lg h-72'>
        <CareTeam/>
        <Prescriptions update={true}/>
        <Reports update={true}/>
      </div>
    </div>
  )
}
