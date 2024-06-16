import React, { useEffect, useState } from 'react';
import PatientCard from '../../components/PatientCard';
import Vitals from '../patient/Vitals';
import TreatmentPlan from '../patient/TreatmentPlan';
import { useSelector } from 'react-redux';

export default function Patients() {

  const [vitals, setVitals] = useState(false);
  const [treatment, setTreatment] = useState(false);
  const [patientId, setPatientId] = useState(0);

  const user = useSelector((state) => state.user.currentUser);

  const doctorId = user.userId;

  const [patientData, setPatientData] = useState([]);  

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/patientdoctor/doctor/${doctorId}`)
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

  return (
    <div className='h-screen'>
      {vitals ? (
        <Vitals role="doctor" patientId={patientId} setVitals={setVitals}/>
      ) 
      : 
      treatment ? (<TreatmentPlan role="doctor" patientId={patientId} setTreatment={setTreatment}/>) :
      (
        <div className='p-8'>
          <h1 className="text-lg font-bold text-green-900 mx-2">PATIENTS</h1>
          <div className='mt-6 flex space-x-5'>
            {patientData.map((patient, index) => (
              <PatientCard key={index} index={index} currentPatientID={patient.patient_id} role="doctor" setPatientId={setPatientId} setVitals={setVitals} setTreatment={setTreatment}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}