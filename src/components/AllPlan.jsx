import React from 'react'
import CareTeam from './CareTeam'

export default function AllPlan() {
  return (
    <div className='w-[1200px] flex justify-between items-center mt-8 ml-10 rounded-lg h-72'>
      <CareTeam/>
      <CareTeam/>
      <CareTeam/>
    </div>
  )
}
