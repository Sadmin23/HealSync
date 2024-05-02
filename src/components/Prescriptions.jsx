// Prescription.js
import React, { useEffect, useState } from 'react';
import CommonLayout from './CommonLayout';
import pill from '../assets/medicine.png';
import syringe from '../assets/syringe.png';
import syrup from '../assets/syrup.png';

export default function Prescriptions({update}) {

  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/prescription')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to prescription data');
        }
        return response.json();
      })
      .then(data => 
        setMedicines(data)
      )
      .catch(error => console.error('Error fetching prescription data:', error));
  }, []);

  return (
    <CommonLayout title="PRESCRIBED MEDICATIONS">
        <div className="flex flex-col h-5/6 scroll-auto">
        {medicines.map((medicine, index) => ( 
            <div key={index} className='flex text-gray-600 mt-6'>
                <img src={medicine.type === "tablet" ? pill : medicine.type === "injection" ? syringe : syrup} alt={medicine.name} className='w-6 h-6'/>
                <h1 className='ml-4'>{medicine.name}</h1>
                <h1 className='ml-auto'>{medicine.dose}</h1>
            </div>
        ))  }
        </div>
        {update && <button className='bg-blue-500 text-white px-8 py-2 rounded-lg ml-20'>Add Medicine</button>}
    </CommonLayout>
  );
}