import React, { useEffect, useState } from 'react'

export default function Doctors() {

  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/doctor`)
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
    .catch(error => console.error('Error fetching nurse data:', error));
  }, []);

  return (
    <div className='h-screen ml-8 mt-8'>
      <h1 className="text-lg font-bold text-green-900 mx-2">DOCTOR LIST</h1>
      <header className="flex mt-6 text-white bg-green-900 font-semibold border border-green-950 rounded-t-md">
        <div className="pl-6 py-2 w-72">Doctor ID</div>
        <div className="pl-6 py-2 w-44">Doctor Name</div>
        <div className='pl-6 py-2 w-28'>Gender</div>
        <div className="pl-6 py-2 w-48">Specalization</div>
        <div className="pl-6 py-2 w-48">Phone</div>
        <div className="pl-6 py-2 w-60">Email</div>
      </header>
      <body>
        {
          doctorData.map((doctor, index) => (
            <div key={index} className={`flex font-semibold border-x border-green-950 ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-200'} ${index === (doctorData.length - 1) ?  `border-b rounded-b` : ``}`}>
              <div className="pl-6 py-2 w-72">{doctor.id}</div>
              <div className="pl-6 py-2 w-44">{doctor.name}</div>
              <div className="pl-6 py-2 w-28">{doctor.gender}</div>
              <div className="pl-6 py-2 w-48">{doctor.specialization}</div>
              <div className="pl-6 py-2 w-48">{doctor.phone}</div>
              <div className="pl-6 py-2 w-60">{doctor.email}</div>
            </div>
          ))
        }       
      </body>
    </div>
  )
}
