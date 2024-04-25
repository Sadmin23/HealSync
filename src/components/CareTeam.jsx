// CareTeam.js
import React from 'react';
import CommonLayout from './CommonLayout';
import CareMember from './CareMember';
import { CareMembers } from './CareMembers';

export default function CareTeam() {
  return (
    <CommonLayout title="YOUR CARE TEAM">
      <div className='mt-3 border-t'></div>
      {
        CareMembers.map((member, index) => (
          <CareMember key={index} {...member} />
        ))
      }
    </CommonLayout>
  );
}