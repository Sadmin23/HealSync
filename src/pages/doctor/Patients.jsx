import React, { useState } from 'react';
import PatientCard from '../../components/PatientCard';
import PatientList from './PatientList';
import Vitals from '../patient/Vitals';
import TreatmentPlan from '../patient/TreatmentPlan';

export default function Patients() {

  const [vitals, setVitals] = useState(false);
  const [treatment, setTreatment] = useState(false);
  const [patientId, setPatientId] = useState(0);

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
            {PatientList.map((patient, index) => (
              <PatientCard key={index} patientId={patient.id} role="doctor" setPatientId={setPatientId} setVitals={setVitals} setTreatment={setTreatment}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}