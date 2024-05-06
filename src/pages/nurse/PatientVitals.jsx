import React, { useState } from 'react';
import ContactButtons from './ContactButtons'; // Import the ContactButtons component
import ReactDOM from 'react-dom'; // Add this import statement

// Patient card component
const PatientCard = ({ patient, onUpdateVitals, onContactPatient, onContactAttendant }) => {
  const { id, image, address, phoneNumber, bloodGroup, reportLink, attendantName, attendantPhoneNumber, attendantMail } = patient;

  const handleUpdateVitals = () => {
    onUpdateVitals(id);
  };

  const handleContactPatient = () => {
    onContactPatient(id);
  };

  const handleContactAttendant = () => {
    onContactAttendant(id);
  };

  return (
    <div className='bg-white p-4 border border-gray-300 rounded shadow-md'>
      <div className='mb-4'>
        <img src={image} alt={`Patient ${id}`} className='w-24 h-auto rounded-lg' />
      </div>
      <p><span className='font-semibold'>ID:</span> {id}</p>
      <p><span className='font-semibold'>Address:</span> {address}</p>
      <p><span className='font-semibold'>Phone No:</span> {phoneNumber}</p>
      <p><span className='font-semibold'>Blood Group:</span> {bloodGroup}</p>
      <p><span className='font-semibold'>Report Link:</span> <a href={reportLink} target='_blank' rel='noopener noreferrer'>View Report</a></p>
      <p><span className='font-semibold'>Attendant Name:</span> {attendantName}</p>
      <p><span className='font-semibold'>Attendant Phone No:</span> {attendantPhoneNumber}</p>
      <p><span className='font-semibold'>Attendant Mail:</span> {attendantMail}</p>
      <div className='mt-4 space-y-2'>
        <button onClick={handleContactPatient} className='bg-teal-700 hover:bg-teal-800 text-white py-2 px-4 rounded'>Contact Patient</button>
        <button onClick={handleContactAttendant} className='bg-teal-700 hover:bg-teal-800 text-white py-2 px-4 rounded'>Contact Attendant</button>
        <button onClick={handleUpdateVitals} className='bg-teal-700 hover:bg-teal-800 text-white py-2 px-4 rounded'>Update Vitals</button>
      </div>
    </div>
  );
};

// PatientVitals component
export default function PatientVitals() {
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [vitalsUpdated, setVitalsUpdated] = useState(false);

  const handleUpdateVitals = (patientId) => {
    setSelectedPatientId(patientId);
  };

  const handleContact = (type, patientId) => {
    const contactWindow = window.open('', '_blank', 'width=300,height=200');
    contactWindow.document.body.innerHTML = `
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-2">Contact Options</h2>
        <div id="contact-buttons"></div>
      </div>
    `;
    ReactDOM.render(<ContactButtons onClose={() => contactWindow.close()} />, contactWindow.document.getElementById('contact-buttons'));
  };

  // Sample patient data with image URLs
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
      attendantMail: 'jane@example.com'
    },
    // Add more patient objects as needed
  ];

  const handleCloseForm = () => {
    setSelectedPatientId(null);
    setVitalsUpdated(false); // Reset vitalsUpdated state
  };

  return (
    <div className='h-screen p-8 bg-teal-900'>
      <h1 className='text-2xl font-bold mb-4 text-white'>Patient Vitals</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {patients.map(patient => (
          <PatientCard 
            key={patient.id} 
            patient={patient} 
            onUpdateVitals={handleUpdateVitals} 
            onContactPatient={() => handleContact('patient', patient.id)} 
            onContactAttendant={() => handleContact('attendant', patient.id)} 
          />
        ))}
      </div>
      {selectedPatientId && (
        <div className="fixed inset-0 flex items-center justify-center bg-teal-900 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Update Patient Vitals</h2>
            {/* Form for updating patient vitals */}
            <form>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 text-gray-800">Date and Time</label>
                <input type="datetime-local" className="w-full border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 text-gray-800">Blood Pressure</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 text-gray-800">Sugar Level</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2 text-gray-800">Oxygen Saturation</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg" />
              </div>
              <div className="flex justify-between">
                <button type="button" className="bg-teal-700 hover:bg-teal-800 text-white py-2 px-4 rounded" onClick={handleCloseForm}>Close</button>
                <button type="button" className="bg-teal-700 hover:bg-teal-800 text-white py-2 px-4 rounded" onClick={() => setVitalsUpdated(true)}>Update</button>
              </div>
            </form>
            {/* Message for showing success */}
            {vitalsUpdated && <p className="mt-2 text-green-600">Vitals updated successfully.</p>}
          </div>
        </div>
      )}
    </div>
  );
}
