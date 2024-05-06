import React from 'react';
import ContactButtons from './ContactButtons';
import ReactDOM from 'react-dom';

export default function Patients() {
  const handleContact = () => {
    const contactWindow = window.open('', '_blank', 'width=300,height=200');
    contactWindow.document.body.innerHTML = `
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-2">Contact Options</h2>
        <div id="contact-buttons"></div>
      </div>
    `;
    ReactDOM.render(<ContactButtons onClose={() => contactWindow.close()} />, contactWindow.document.getElementById('contact-buttons'));
  };

  const handleVitals = () => {
    // Placeholder for vitals handling function
    alert("Latest vitals update here.");
  };

  const handleTreatmentPlan = () => {
    // Placeholder for treatment plan handling function
    alert("Treatment plan details here.");
  };

  const patients = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      address: '123 Main St',
      phoneNumber: '555-555-5555',
      bloodGroup: 'A+',
      reportLink: 'http://example.com/report',
      attendantName: 'Jane Doe',
      attendantPhoneNumber: '555-555-5556',
      attendantMail: 'jane@example.com',
    },
    // Additional patient objects...
  ];

  return (
    <div className='h-screen w-screen p-8 bg-teal-900 overflow-y-auto'>
      <h1 className='text-3xl font-bold mb-8 text-white'>Patients</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {patients.map((patient) => (
          <div key={patient.id} className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='p-4'>
              <img src={patient.image} alt={`Patient ${patient.id}`} className='w-full h-auto rounded-lg' />
            </div>
            <div className='p-4'>
              <p className='text-lg font-semibold mb-2'>ID: {patient.id}</p>
              <p className='text-sm text-gray-600 mb-2'>Address: {patient.address}</p>
              <p className='text-sm text-gray-600 mb-2'>Phone No: {patient.phoneNumber}</p>
              <p className='text-sm text-gray-600 mb-2'>Blood Group: {patient.bloodGroup}</p>
              <p className='text-sm text-gray-600 mb-2'>Report Link: <a href={patient.reportLink} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>View Report</a></p>
              <p className='text-sm text-gray-600 mb-2'>Attendant Name: {patient.attendantName}</p>
              <p className='text-sm text-gray-600 mb-2'>Attendant Phone No: {patient.attendantPhoneNumber}</p>
              <p className='text-sm text-gray-600 mb-2'>Attendant Mail: {patient.attendantMail}</p>
            </div>
            <div className='flex justify-between bg-teal-700 py-2 px-4'>
              <button onClick={handleContact} className='text-white text-sm px-4 py-1 rounded-full bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400'>Contact Patient</button>
              <button onClick={handleContact} className='text-white text-sm px-4 py-1 rounded-full bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400'>Contact Attendant</button>
            </div>
            <div className='flex justify-between bg-teal-700 py-2 px-4'>
              <button onClick={handleVitals} className='text-white text-sm px-4 py-1 rounded-full bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400'>Latest Vitals Update</button>
              <button onClick={handleTreatmentPlan} className='text-white text-sm px-4 py-1 rounded-full bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400'>Treatment Plan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
