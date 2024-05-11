import React from 'react'
import PatientList from '../pages/doctor/PatientList';
import patient1 from '../assets/patient1.jpg';
import patient2 from '../assets/patient2.jpg';
import patient3 from '../assets/patient3.jpg';
import patient4 from '../assets/patient4.jpg';

export default function PatientCard({currentPatient, role, setPatientId, setVitals, setTreatment}) {
    
  const handleVitals = () => {
    setPatientId(currentPatient.id);
    setVitals(true);
  };

  const handleTreatmentPlan = () => {
    setPatientId(currentPatient.id);
    setTreatment(true);
  };


  return (
    <div className='bg-white w-96 border border-gray-300 shadow-md rounded-lg p-6'>
        <div className='flex items-center border-b-2 pb-4'>
          <img src={patient1} alt='nurse' className='h-16 w-16 rounded-full' />
          <div className='ml-8 font-semibold space-y-2'>
            <h1 className='text-green-600'>{currentPatient.name}</h1>
            <h1 className='text-gray-600'>Patient ID: {currentPatient.id}</h1>
          </div>
        </div>
        <div className='mt-4 pb-4 border-b-2'>
            <div className='flex justify-between text-gray-600 font-semibold'>
              <h1>Age: <span className='text-green-500'>{currentPatient.age}</span></h1>
              <h1>Weight: <span className='text-green-500'>{currentPatient.weight}</span></h1>
              <h1>Blood Group: <span className='text-red-500'>{currentPatient.blood_grp}</span></h1>
            </div>
            <h1 className='text-gray-600 font-semibold mt-4'>Contact: <span className='text-gray-400'>📞 {currentPatient.phone}</span></h1>
            <h1 className='text-gray-600 font-semibold mt-4'>Attendant Name: <span className='text-gray-400 ml-2'>{currentPatient.attendant_name}</span></h1>
            <h1 className='text-gray-600 font-semibold mt-4'>Attendant Contact: <span className='text-gray-400'>📞 {currentPatient.attendant_phone}</span></h1>
            <h1 className='text-gray-600 font-semibold mt-4'>Attendant Email: <span className='text-gray-400 ml-2'>{currentPatient.attendant_email}</span></h1>
        </div>
        <div className='font-semibold'>
            <div className='flex space-x-4'>
              <a href={`mailto:${currentPatient.attendant_email}`} className='bg-green-700 text-white text-center w-full py-2 rounded-lg mt-4'>Contact Patient</a>
              <a href={`mailto:${currentPatient.attendant_email}`} className='bg-green-700 text-white text-center w-full py-2 rounded-lg mt-4'>Contact Attendant</a>
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
