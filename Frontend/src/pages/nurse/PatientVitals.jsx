import React, { useEffect, useState } from 'react';

import PatientCard from '../../components/PatientCard';
import Vitals from '../patient/Vitals';
import { useSelector } from 'react-redux';

export default function Patients() {

  const [patientData, setPatientData] = useState([]);

  const user = useSelector((state) => state.user.currentUser);

  const nurseId = user.userId;

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/patientnurse/nurse/${nurseId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch nurse data');
      }
      return response.json();
    })
    .then(data => {
        setPatientData(data);
      }
    )
    .catch(error => console.error('Error fetching patient data:', error));
  }, []);


  const [vitals, setVitals] = useState(false);
  const [patientId, setPatientId] = useState(0);

  return (
    <div className='h-screen'>
      {vitals ? (
        <Vitals role="nurse" patientId={patientId} setVitals={setVitals}/>
      ) : (
        <div className='p-8'>
          <h1 className="text-lg font-bold text-green-900 mx-2">PATIENTS</h1>
          <div className='mt-6 flex space-x-5'>
            {patientData.map((patient, index) => (
              <PatientCard key={index} currentPatientID={patient.patient_id} role="nurse" setPatientId={setPatientId} setVitals={setVitals} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
