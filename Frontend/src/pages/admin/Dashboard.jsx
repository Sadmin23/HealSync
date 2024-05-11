import React from 'react'
import Welcome from '../../components/Welcome'
import DashboardBoxes from '../../components/DashboardBoxes'

export default function Dashboard() {
  return (
    <div className='h-screen mx-10'>
      <Welcome/>
      <DashboardBoxes/>
    </div>
  )
}
