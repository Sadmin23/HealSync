import React from 'react';
import Card from './Card';

export default function Treatment({nurse, doctor}) {

  return (
    <div>
      <h1 className="text-lg my-4 font-bold text-slate-400 ml-12">UPCOMING TREATMENT</h1>
      <div className='w-[1200px] flex px-3 justify-around items-center ml-10 rounded-lg h-60 bg-white'>
        {nurse.map((data, index) => (
          <Card
            key={index}
            Time={data.time}
            Name={data.nurse_name}
            Phone="Nurse"
            type={data.type}
          />
        ))}
        {doctor.map((data, index) => (
          data.type === 'Treatment' &&
          <Card
            key={index}
            Time={data.time}
            Name={data.doctor_name}
            Phone="Doctor"
            type={data.type}
          />
        ))}        
      </div>
    </div>
  );
}
