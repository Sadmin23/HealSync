import React from 'react'
import doctor from '../assets/doctor.jpg'
import doctor2 from '../assets/doctor2.jpg'
import nurse from '../assets/nurse.jpg'

export default function Card({Time, Name, Phone, type}) {

    let style = "", icon = ""


    switch (type) {
        case 'Vitals Checkup':
            style = "bg-green-200 text-green-500"
            icon = nurse
            break;
        case 'Treatment':
            style = "bg-blue-200 text-blue-500"
            icon = doctor2
            break;
        case 'Emergency':
            style = "bg-red-200 text-red-500"
            icon = doctor
            break;
        default:
            style = "bg-green-200 text-green-500"
    }


  return (
    <div className='w-[32%] h-56 bg-white border-gray-300 border shadow-xl rounded-lg'>
        <div className='p-4'>
            <div className={`inline-block text-sm font-semibold rounded-md py-1 px-2 ${style}`}>{type}</div>
            <div className='flex pl-2 py-6 border-b'>
                <p className='text-sm text-gray-400 font-semibold tracking-wider'>{Time}</p>
                <p className='text-sm text-blue-800 font-semibold tracking-wide ml-20'>Starts in 15m</p>
            </div>
            <div className='flex mt-5 items-center'>
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
