import React from 'react'
import nurse from '../assets/nurse.jpg'

export default function PatientCard({role}) {
    
      const handleVitals = () => {
        // Placeholder for vitals handling function
        alert("Latest vitals update here.");
      };
    
      const handleTreatmentPlan = () => {
        // Placeholder for treatment plan handling function
        alert("Treatment plan details here.");
      };

  return (
    <div className='bg-white w-96 border border-gray-300 shadow-md rounded-lg p-6'>
        <div className='flex items-center border-b-2 pb-4'>
          <img src={nurse} alt='nurse' className='h-16 w-16 rounded-full' />
          <div className='ml-8 font-semibold space-y-2'>
            <h1 className='text-green-600'>Lindsay Johnson</h1>
            <h1 className='text-gray-600'>Patient ID: 1204</h1>
          </div>
        </div>
        <div className='mt-4 pb-4 border-b-2'>
            <div className='flex justify-between text-gray-600 font-semibold'>
              <h1>Age: <span className='text-green-500'>24</span></h1>
              <h1>Weight: <span className='text-green-500'>70 kg</span></h1>
              <h1>Blood Group: <span className='text-red-500'>O+</span></h1>
            </div>
            <h1 className='text-gray-600 font-semibold mt-4'>Contact: <span className='text-gray-400'>📞 +8801234567890</span></h1>
            <h1 className='text-gray-600 font-semibold mt-4'>Attendant Name: <span className='text-gray-400 ml-2'>Mr. John Doe</span></h1>
            <h1 className='text-gray-600 font-semibold mt-4'>Attendant Contact: <span className='text-gray-400'>📞 +8801234567890</span></h1>
            <h1 className='text-gray-600 font-semibold mt-4'>Attendant Email: <span className='text-gray-400 ml-2'>sample@gmail.com</span></h1>
        </div>
        <div className='font-semibold'>
            <div className='flex space-x-4'>
              <button className='bg-green-700 text-white w-full py-2 rounded-lg mt-4'>Contact Patient</button>
              <button className='bg-green-700 text-white w-full py-2 rounded-lg mt-4'>Contact Attendant</button>
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
