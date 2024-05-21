import React, { useEffect, useState } from 'react'
import Treatment from '../../components/Treatment'
import CareTeam from '../../components/CareTeam'
import Reports from '../../components/Report'
import Prescriptions from '../../components/Prescriptions'

export default function TreatmentPlan({role, patientId, setTreatment}) {

  const update = role === 'doctor' ? true : false

  const handleBack = () => {
    setTreatment(false);
  };

  const [nurseData, setNurseData] = useState([]);
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/patientnurse/patient/${patientId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch nurse data');
      }
      return response.json();
    })
    .then(data => {
        setNurseData(data);
      }
    )
    .catch(error => console.error('Error fetching patient data:', error));

    fetch(`http://127.0.0.1:8000/api/patientdoctor/patient/${patientId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch nurse data');
      }
      return response.json();
    })
    .then(data => {
        setDoctorData(data);
      }
    )
    .catch(error => console.error('Error fetching patient data:', error));
  }, []);

  return (
    <div className='h-screen'>
      {(role !== 'patient') && <button onClick={handleBack} className='mt-4 ml-12 bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg'>Back</button>}      
      {role === 'patient' && <Treatment nurse={nurseData} doctor={doctorData}/>}
      <div className='w-[1200px] flex justify-between items-center mt-8 ml-10 rounded-lg h-72'>
        <CareTeam patientId={patientId} nurse={nurseData} doctor={doctorData}/>
        <Prescriptions update={update} patientId={patientId}/>
        <Reports update={update} patientId={patientId}/>
      </div>
    </div>
  )
}
