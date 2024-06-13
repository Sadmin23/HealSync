import React from 'react'
import doctor from '../assets/doctor.jpg'
import doctor3 from '../assets/doctor3.jpg'
import nurse from '../assets/nurse.jpg'
import nurse2 from '../assets/nurse2.jpg'

export default function Card({Time, Name, Phone, type}) {

    let style = "", icon = ""


    switch (type) {
        case 'Vitals Checkup':
            style = "bg-green-200 text-green-500"
            icon = nurse
            break;
        case 'Treatment':
            style = "bg-blue-200 text-blue-500"
            icon = doctor
            break;
        case 'Medication':
            style = "bg-orange-200 text-orange-500"
            icon = nurse2
            break;
        default:
            style = "bg-red-200 text-red-500"
            icon = doctor3
    }


  return (
    <div className='w-[32%] h-48 bg-white border-gray-300 border shadow-md rounded-lg'>
        <div className='p-4'>
            <div className='flex pl-2 pt-2 pb-4 border-b'>
                <div className={`inline-block text-sm font-semibold rounded-md py-1 px-2 ${style}`}>{type}</div>
                <p className='ml-auto text-gray-400 font-semibold tracking-wide'>{Time}</p>                
            </div>
            <div className='flex mt-6 items-center'>
                <img src={icon} alt='doctor' className='w-16 h-16 rounded-full'/>
                <div>
                    <h2 className='ml-4 font-semibold tracking-wide text-blue-800'>{Name}</h2>
                    <h2 className='ml-4 mt-1 font-semibold tracking-wide text-slate-600 text-sm'>{Phone}</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
