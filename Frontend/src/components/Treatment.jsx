import React from 'react';
import Card from './Card';
import TreatmentPlan from './Plan';

export default function Treatment({team}) {
  // Extract the first three elements from the TreatmentPlan array

  const treatmentData = TreatmentPlan.slice(0, 3);

  return (
    <div>
      <h1 className="text-lg my-4 font-bold text-slate-400 ml-12">UPCOMING TREATMENT</h1>
      <div className='w-[1200px] flex px-3 justify-around items-center ml-10 rounded-lg h-72 bg-white'>
        {treatmentData.map((data, index) => (
          <Card
            key={index}
            Time={data.time}
            Name={data.name}
            Phone={data.phone}
            type={data.type}
          />
        ))}
      </div>
    </div>
  );
}
