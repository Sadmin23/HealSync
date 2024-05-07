import React from 'react'

export default function ContactTable() {
  return (
    <div className='h-screen p-8'>
    <h1 className='text-2xl font-bold mb-4'>Contact</h1>
    <header className="flex mt-8 text-white bg-green-900 border-x border-y border-green-950 font-semibold rounded-t-md">
      <div className="pl-6 py-2 w-60">Name</div>
      <div className="pl-6 py-2 w-60">Designation</div>
      <div className="pl-6 py-2 w-60">Email</div>
      <div className="pl-6 py-2 w-60">Phone</div>
      <div className="pl-6 py-2 w-60">Action</div>
    </header>
    <body>
      <div className="flex font-semibold border border-green-950 bg-green-50">
          <div className="pl-6 py-2 w-60">Dr. Jane Doe</div>
          <div className="pl-6 py-2 w-60">Doctor</div>
          <div className="pl-6 py-2 w-60">jane@gmail.com</div>
          <div className="pl-6 py-2 w-60">+123456789</div>
          <div className="pl-6 py-2 w-60">Email</div>
      </div>
      <div className="flex font-semibold border-x border-green-950 bg-green-200">
          <div className="pl-6 py-2 w-60">Dr. Jane Doe</div>
          <div className="pl-6 py-2 w-60">Doctor</div>
          <div className="pl-6 py-2 w-60">jane@gmail.com</div>
          <div className="pl-6 py-2 w-60">+123456789</div>
          <div className="pl-6 py-2 w-60">Email</div>
      </div>
      <div className="flex font-semibold border-x border-b border-green-950 bg-green-50 rounded-b-md">
          <div className="pl-6 py-2 w-60">Dr. Jane Doe</div>
          <div className="pl-6 py-2 w-60">Doctor</div>
          <div className="pl-6 py-2 w-60">jane@gmail.com</div>
          <div className="pl-6 py-2 w-60">+123456789</div>
          <div className="pl-6 py-2 w-60">Email</div>
      </div>
    </body>
  </div>
  )
}
