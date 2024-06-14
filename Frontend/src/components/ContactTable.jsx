import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function ContactTable() {

  const user = useSelector((state) => state.user.currentUser);

  const userId = user.userId;

  const [patientData, setPatientData] = useState([]);
  const [doctorData, setDoctorData] = useState([])
  const [nurseData, setNurseData] = useState([]);
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/patient`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch patient data');
      }
      return response.json();
    })
    .then(data => {
        setPatientData(data);
      }
    )
    .catch(error => console.error('Error fetching patient data:', error));

    fetch(`http://127.0.0.1:8000/api/doctor`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch doctor data');
      }
      return response.json();
    })
    .then(data => {
        setDoctorData(data);
      }
    )
    .catch(error => console.error('Error fetching nurse data:', error));

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

  useEffect(() => {
    setContacts([...patientData, ...doctorData, ...nurseData].filter(contact => contact.id !== userId))
  }, [patientData, doctorData, nurseData])

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };  

  return (
    <div className='h-screen p-8'>
    <h1 className="text-lg font-bold text-green-900 mx-2">CONTACTS</h1>
    <header className="flex mt-6 text-white bg-green-900 border-x border-y border-green-950 font-semibold rounded-t-md">
      <div className="pl-6 py-2 w-60">Name</div>
      <div className="pl-6 py-2 w-52">Designation</div>
      <div className="pl-6 py-2 w-60">Email</div>
      <div className="pl-6 py-2 w-60">Phone</div>
      <div className="pl-14 py-2 w-60">Action</div>
    </header>
    <body>
      {
        contacts.map((contact, index) => (
          <div key={index} className={`flex font-semibold border-x border-green-950 ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-200'} ${index === (contacts.length - 1) ?  `border-b rounded-b` : ``}`}>
            <div className="pl-6 py-2 w-60">{contact.name}</div>
            <div className="pl-6 py-2 w-52">{capitalizeFirstLetter(contact.role)}</div>
            <div className="pl-6 py-2 w-60">{contact.email}</div>
            <div className="pl-6 py-2 w-60">{contact.phone}</div>
            <div className='flex items-center ml-6'>
              <a href={`mailto:${contact.email}`} className='bg-red-600 text-white py-1 px-10 rounded-md text-center'>Email</a>
            </div>
          </div>
        ))
      }
    </body>
  </div>
  )
}
