import React from 'react';

import PatientCard from '../../components/PatientCard';

export default function Patients() {

  return (
    <div className='h-screen  p-8 overflow-y-auto'>
      <h1 className='text-3xl font-bold mb-8 text-black'>Patients</h1>
      <div className='flex space-x-5'>
        <PatientCard role="doctor"/>
        <PatientCard role="doctor"/>
        <PatientCard role="doctor"/>
      </div>
    </div>
  );
}
