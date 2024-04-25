// CareTeam.js
import React from 'react';
import CommonLayout from './CommonLayout';
import doctor3 from '../assets/doctor3.jpg'
import doctor4 from '../assets/doctor4.jpg'
import nurse from '../assets/nurse.jpg'
import nurse2 from '../assets/nurse2.jpg'
import CareMember from './CareMember';
import { CareMembers } from './CareMembers';

export default function CareTeam() {
  return (
    <CommonLayout title="Your Care Team">
      <div className='mt-4 border-t'></div>
      {
        CareMembers.map((member, index) => (
          <CareMember key={index} {...member} />
        ))
      }
    </CommonLayout>
  );
}