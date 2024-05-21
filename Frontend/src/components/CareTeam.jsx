// CareTeam.js
import React from 'react';
import CommonLayout from './CommonLayout';
import CareMember from './CareMember';

export default function CareTeam({nurse, doctor}) {

  return (
    <CommonLayout title="PATIENT CARE TEAM">
      <div className='mt-3 border-t'></div>
      {
        nurse.map((member, index) => (
          <CareMember key={index} name={member.nurse_name} designation="Nurse" type={member.type}/>
        ))
      }
      {
        doctor.map((member, index) => (
          <CareMember key={index} name={member.doctor_name} designation="Doctor" type={member.type}/>
        ))
      }      
    </CommonLayout>
  );
}