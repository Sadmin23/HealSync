import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className='flex-col bg-slate-200'>
          <Header/>
        <div className='flex'>
          <Sidebar/>
          <div>{<Outlet/>}</div>
        </div>
    </div>
  )
}
