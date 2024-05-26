import React, { useEffect, useState } from 'react'

export default function Nurses() {

  const [nurseData, setNurseData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/nurse`)
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
    .catch(error => console.error('Error fetching nurse data:', error));
  }, []);

  return (
    <div className='h-screen ml-8 mt-8'>
    <h1 className="text-lg font-bold text-green-900 mx-2">NURSE LIST</h1>
    <header className="flex mt-6 text-white bg-green-900 font-semibold border border-green-950 rounded-t-md">
      <div className="pl-6 py-2 w-72">Nurse ID</div>
      <div className="pl-6 py-2 w-48">Nurse Name</div>
      <div className='pl-6 py-2 w-32'>Gender</div>
      <div className="pl-6 py-2 w-48">Phone</div>
      <div className="pl-6 py-2 w-60">Email</div>
    </header>
    <body>
      {
        nurseData.map((nurse, index) => (
          <div key={index} className={`flex font-semibold border-x border-green-950 ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-200'} ${index === (nurseData.length - 1) ?  `border-b rounded-b` : ``}`}>
            <div className="pl-6 py-2 w-72">{nurse.id}</div>
            <div className="pl-6 py-2 w-48">{nurse.name}</div>
            <div className="pl-6 py-2 w-32">{nurse.gender}</div>
            <div className="pl-6 py-2 w-48">{nurse.phone}</div>
            <div className="pl-6 py-2 w-60">{nurse.email}</div>
          </div>
        ))
      }       
    </body>
  </div>
  )
}
