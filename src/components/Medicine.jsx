import React from 'react'
import { Medicines } from './Medicines'

export default function Medicine() {
  return (
    <div className=''>
        {Medicines.map((medicine, index) => ( 
            <div className='flex'>
                <h1>{medicine.name}</h1>
                <h1>{medicine.dose}</h1>
            </div>
        ))  }
    </div>
  )
}
