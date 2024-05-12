import React, { useEffect, useState } from 'react'
import PatientList from '../pages/doctor/PatientList';
import patient1 from '../assets/patient1.jpg';
import patient2 from '../assets/patient2.jpg';
import patient3 from '../assets/patient3.jpg';
import patient4 from '../assets/patient4.jpg';

export default function PatientCard({currentPatientID, role, setPatientId, setVitals, setTreatment}) {
    
  const handleVitals = () => {
    setPatientId(currPatient.id);
    setVitals(true);
  };

  const handleTreatmentPlan = () => {
    setPatientId(currPatient.id);
    setTreatment(true);
  };

  const [currPatient, setCurrPatient] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/patient/${currentPatientID}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch nurse data');
      }
      return response.json();
    })
    .then(data => {
        setCurrPatient(data);
      }
    )
    .catch(error => console.error('Error fetching patient data:', error));
  }, []);


  console.log(currPatient);

  return (
    <div className='bg-white w-96 border border-gray-300 shadow-md rounded-lg p-6'>
        <div className='flex items-center border-b-2 pb-4'>
          <img src={patient1} alt='nurse' className='h-16 w-16 rounded-full' />
          <div className='ml-8 font-semibold space-y-2'>
            <h1 className='text-green-600'>{currPatient.name}</h1>
            <h1 className='text-gray-600'>Patient Username: {currPatient.username}</h1>
          </div>
        </div>
        <div className='mt-4 pb-4 border-b-2'>
            <div className='flex justify-between text-gray-600 font-semibold'>
              <h1>Age: <span className='text-green-500'>{currPatient.age}</span></h1>
              <h1>Weight: <span className='text-green-500'>{currPatient.weight} kg</span></h1>
              <h1>Blood Group: <span className='text-red-500'>{currPatient.blood_group}</span></h1>
            </div>
            <h1 className='text-gray-600 font-semibold mt-4'>Email: <span className='text-gray-400 ml-2'>{currPatient.email}</span></h1>            
            <h1 className='text-gray-600 font-semibold mt-4'>Contact: <span className='text-gray-400'>📞 {currPatient.phone}</span></h1>
            <h1 className='text-gray-600 font-semibold mt-4'>Attendant Name: <span className='text-gray-400 ml-2'>{currPatient.attendant_name}</span></h1>
            <h1 className='text-gray-600 font-semibold mt-4'>Attendant Contact: <span className='text-gray-400'>📞 {currPatient.attendant_phone}</span></h1>
            <h1 className='text-gray-600 font-semibold mt-4'>Attendant Email: <span className='text-gray-400 ml-2'>{currPatient.attendant_email}</span></h1>
        </div>
        <div className='font-semibold'>
            <div className='flex space-x-4'>
              <a href={`mailto:${currPatient.email}`} className='bg-green-700 text-white text-center w-full py-2 rounded-lg mt-4'>Contact Patient</a>
              <a href={`mailto:${currPatient.attendant_email}`} className='bg-green-700 text-white text-center w-full py-2 rounded-lg mt-4'>Contact Attendant</a>
            </div>
            {
                role === 'doctor' && 
                <div className='flex space-x-4'>
                    <button className='bg-green-700 text-white w-full py-2 rounded-lg mt-4' onClick={handleVitals}>Latest Vitals</button>
                    <button className='bg-green-700 text-white w-full py-2 rounded-lg mt-4' onClick={handleTreatmentPlan}>Treatment Plan</button>
                </div>            
            }
            {
                role === 'nurse' && 
                <div className='flex'>
                    <button className='bg-green-700 text-white w-full py-2 rounded-lg mt-4' onClick={handleVitals}>View / Update Latest Vitals</button>
                </div>            
            }
        </div>
    </div>
  )
}
