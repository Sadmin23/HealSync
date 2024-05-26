import React, { useEffect, useState } from 'react'

export default function DashboardBoxes() {

  const [patientData, setPatientData] = useState(0);
  const [doctorData, setDoctorData] = useState([]);
  const [nurseData, setNurseData] = useState([]);
  const [emergencyData, setEmergencyData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/patient`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch patient data');
      }
      return response.json();
    })
    .then(data => {
        setPatientData(data.length);
      }
    )
    .catch(error => console.error('Error fetching patient data:', error));

    fetch(`http://127.0.0.1:8000/api/doctor`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch doctor data');
      }
      return response.json();
    })
    .then(data => {
        setDoctorData(data.length);
      }
    )
    .catch(error => console.error('Error fetching nurse data:', error));

    fetch(`http://127.0.0.1:8000/api/nurse`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch nurse data');
      }
      return response.json();
    })
    .then(data => {
        setNurseData(data.length);
      }
    )
    .catch(error => console.error('Error fetching nurse data:', error));

    fetch(`http://127.0.0.1:8000/api/emergency`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch emergency data');
      }
      return response.json();
    })
    .then(data => {
        setEmergencyData(data.length);
      }
    )
    .catch(error => console.error('Error fetching emergency data:', error));

  }, []);

  return (
    <div className='mt-10 flex flex-wrap justify-between'>
        <div className='w-72 h-52 p-4 text-center space-y-6 rounded-md bg-green-700 text-3xl tracking-wider text-white font-bold'>
          <h1 className='mt-2'>Patients:</h1>
          <h1 className='font-extrabold text-7xl text-yellow-400'>{patientData}</h1>
        </div>
        <div className='w-72 h-52 p-4 text-center space-y-6 rounded-md bg-green-700 text-3xl tracking-wider text-white font-bold'>
          <h1 className='mt-2'>Doctors:</h1>
          <h1 className='font-extrabold text-7xl text-yellow-400'>{doctorData}</h1>
        </div>
        <div className='w-72 h-52 p-4 text-center space-y-6 rounded-md bg-green-700 text-3xl tracking-wider text-white font-bold'>
          <h1 className='mt-2'>Nurses:</h1>
          <h1 className='font-extrabold text-7xl text-yellow-400'>{nurseData}</h1>
        </div>
        <div className='w-72 h-52 p-4 text-center space-y-6 rounded-md bg-green-700 text-3xl tracking-wider text-white font-bold'>
          <h1 className='mt-2'>Emergencies:</h1>
          <h1 className='font-extrabold text-7xl text-yellow-400'>{emergencyData}</h1>
        </div>
    </div>
  )
}
