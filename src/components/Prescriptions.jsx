// Prescription.js
import React from 'react';
import CommonLayout from './CommonLayout';
import { Medicines } from './Medicines';

export default function Prescriptions() {
  return (
    <CommonLayout title="PRESCRIBED MEDICATIONS">
        <div className='mt-6 '></div>
        {Medicines.map((medicine, index) => ( 
            <div key={index} className='flex text-gray-600 mb-6'>
                <img src={medicine.src} alt={medicine.name} className='w-6 h-6'/>
                <h1 className='ml-4'>{medicine.name}</h1>
                <h1 className='ml-auto'>{medicine.dose}</h1>
            </div>
        ))  }
    </CommonLayout>
  );
}