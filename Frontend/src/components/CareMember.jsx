import React from 'react'
import doctor from '../assets/doctor.jpg'
import doctor3 from '../assets/doctor3.jpg'
import nurse from '../assets/nurse.jpg'
import nurse2 from '../assets/nurse2.jpg'


export default function CareMember({name, designation, type}) {

  let icon = ""


  switch (type) {
      case 'Vitals Checkup':
        icon = nurse
          break;
      case 'Treatment':
        icon = doctor
          break;
      case 'Medication':
        icon = nurse2
          break;
      default:
        icon = doctor3
    
  }

  return (
    <div className='flex py-3 border-b space-x-4'>
        <img src={icon} alt='Care Member' className='w-12 h-12 rounded-full' />
        <div>
            <h1 className='text-blue-700 font-semibold'>{name}</h1>
            <h2 className='text-gray-400 font-semibold'>{designation}</h2>
        </div>
    </div>
  )
}
