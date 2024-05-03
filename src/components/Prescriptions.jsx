// Prescription.js
import React, { useEffect, useState } from 'react';
import CommonLayout from './CommonLayout';
import pill from '../assets/medicine.png';
import syringe from '../assets/syringe.png';
import syrup from '../assets/syrup.png';

export default function Prescriptions({update}) {

  const [medicines, setMedicines] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      dose: formData.get('dose'),
      type: formData.get('type')
    };
  
    try {
      const response = await fetch('http://localhost:8000/prescription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add medicine');
      }
  
      setMedicines(prevMedicines => [...prevMedicines, data]);

      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-GB'); // Format date as 'DD/MM/YYYY'
      const formattedTime = currentDate.toLocaleTimeString('en-US', { hour12: false }); // Format time as 'HH:MM'
  
      await fetch('http://127.0.0.1:8000/timeline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Prescription',
          description: 'Prescription updated by Dr. John Doe.',
          date: formattedDate,
          time: formattedTime
        }),
      });

    } catch (error) {
      console.error('Error:', error);
    }

    setShowForm(false);
  };

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
        {update && <button onClick={()=>setShowForm(true)} className='bg-blue-500 text-white px-8 py-2 rounded-lg ml-20'>Add Medicine</button>}
        {showForm && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white px-12 pt-8 pb-8 rounded-lg">
                <div className='flex items-center pb-6'>
                  <h1 className='text-xl font-semibold text-gray-700'>Add Latest Medicine Here</h1>
                  <button className="bg-red-500 translate-x-6 -translate-y-4 text-white font-semibold rounded-full px-2  hover:bg-red-700 ml-auto" onClick={() => setShowForm(false)}>X</button>                
                </div>
                <div className='bg-white'>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                      <label htmlFor="name" className="block text-gray-700 font-bold">Medicine Name</label>
                      <input type="text" id="name" required={true} name="name" className="w-full border-2 border-gray-300 rounded-md py-2 px-4 mt-1 focus:outline-none focus:border-primary-500" />
                    </div>
                    <div className="mb-6 flex">
                      <div className="w-1/2 mr-2">
                        <label htmlFor="type" className="block text-gray-700 font-bold">Type</label>
                        <select
                            className='border-gray-300 border-2 p-3 rounded-md py-2 px-4 mt-1'
                            id="type"
                            name="type"
                            required={true}
                          >
                            <option value="None" disabled>Type</option>
                            <option value="tablet">Tablet</option>
                            <option value="injection">Injection</option>
                            <option value="syrup">Syrup</option>
                        </select>
                      </div>
                      <div className="w-1/2 ml-2">
                        <label htmlFor="dose" className="block text-gray-700 font-bold">Dose</label>
                        <input type="text" id="dose" required={true} name="dose" className="w-full border-2 border-gray-300 rounded-md py-2 px-4 mt-1 focus:outline-none focus:border-primary-500" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button type="submit" className="bg-slate-800 text-white text-lg font-semibold py-4 px-6 rounded-md hover:bg-primary-600">Add Medicine</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
    </CommonLayout>
  );
}