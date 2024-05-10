import React from 'react'
import nurse from '../assets/nurse.jpg'
import PatientList from '../pages/doctor/PatientList';

export default function PatientCard({patientId, role, setPatientId, setVitals, setTreatment}) {
    
  const handleVitals = () => {
    setPatientId(patientId);
    setVitals(true);
  };

  const handleTreatmentPlan = () => {
    setPatientId(patientId);
    setTreatment(true);
  };

  const patient = PatientList.find((patient) => patient.id === patientId);

  return (
    <div className='bg-white w-96 border border-gray-300 shadow-md rounded-lg p-6'>
        <div className='flex items-center border-b-2 pb-4'>
          <img src={nurse} alt='nurse' className='h-16 w-16 rounded-full' />
          <div className='ml-8 font-semibold space-y-2'>
            <h1 className='text-green-600'>{patient.name}</h1>
            <h1 className='text-gray-600'>Patient ID: {patient.id}</h1>
          </div>
        </div>
        <div className='mt-4 pb-4 border-b-2'>
            <div className='flex justify-between text-gray-600 font-semibold'>
              <h1>Age: <span className='text-green-500'>{patient.age}</span></h1>
              <h1>Weight: <span className='text-green-500'>{patient.weight}</span></h1>
              <h1>Blood Group: <span className='text-red-500'>{patient.blood_grp}</span></h1>
            </div>
            <h1 className='text-gray-600 font-semibold mt-4'>Contact: <span className='text-gray-400'>📞 {patient.phone}</span></h1>
            <h1 className='text-gray-600 font-semibold mt-4'>Attendant Name: <span className='text-gray-400 ml-2'>{patient.attendant_name}</span></h1>
            <h1 className='text-gray-600 font-semibold mt-4'>Attendant Contact: <span className='text-gray-400'>📞 {patient.attendant_phone}</span></h1>
            <h1 className='text-gray-600 font-semibold mt-4'>Attendant Email: <span className='text-gray-400 ml-2'>{patient.attendant_email}</span></h1>
        </div>
        <div className='font-semibold'>
            <div className='flex space-x-4'>
              <a href={`mailto:${patient.attendant_email}`} className='bg-green-700 text-white text-center w-full py-2 rounded-lg mt-4'>Contact Patient</a>
              <a href={`mailto:${patient.attendant_email}`} className='bg-green-700 text-white text-center w-full py-2 rounded-lg mt-4'>Contact Attendant</a>
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
