import React from 'react'
import Contacts from './Contacts'

export default function ContactTable() {
  return (
    <div className='h-screen p-8'>
    <h1 className="text-lg font-bold text-green-900 mx-2">CONTACTS</h1>
    <header className="flex mt-6 text-white bg-green-900 border-x border-y border-green-950 font-semibold rounded-t-md">
      <div className="pl-6 py-2 w-60">Name</div>
      <div className="pl-6 py-2 w-60">Designation</div>
      <div className="pl-6 py-2 w-60">Email</div>
      <div className="pl-6 py-2 w-60">Phone</div>
      <div className="pl-14 py-2 w-60">Action</div>
    </header>
    <body>
      {
        Contacts.map((contact, index) => (
          <div key={index} className={`flex font-semibold border-x border-green-950 ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-200'} ${index === (Contacts.length - 1) ?  `border-b rounded-b` : ``}`}>
            <div className="pl-6 py-2 w-60">{contact.name}</div>
            <div className="pl-6 py-2 w-60">{contact.designation}</div>
            <div className="pl-6 py-2 w-60">{contact.email}</div>
            <div className="pl-6 py-2 w-60">{contact.phone}</div>
            <div className='flex items-center ml-6'>
              <button className='bg-red-600 text-white py-1 px-10 rounded-md'>Email</button>
            </div>
          </div>
        ))
      }
    </body>
  </div>
  )
}
