import React from 'react';
import ContactButtons from './ContactButtons';
import ReactDOM from 'react-dom';

export default function DoctorContact() {
  const handleContact = (action) => {
    const contactWindow = window.open('', '_blank', 'width=300,height=200');
    contactWindow.document.body.innerHTML = `
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-2">Contact Options</h2>
        <div id="contact-buttons"></div>
      </div>
    `;
    ReactDOM.render(<ContactButtons action={action} onClose={() => contactWindow.close()} />, contactWindow.document.getElementById('contact-buttons'));
  };

  const doctors = [
    {
      id: 1,
      image: 'https://via.placeholder.com/50',
      name: 'Dr. John Doe',
      designation: 'Doctor',
      email: 'john@example.com',
      mobile: '123-456-7890'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/50',
      name: 'Nurse Jane Smith',
      designation: 'Nurse',
      email: 'jane@example.com',
      mobile: '987-654-3210'
    },
  ];

  return (
    <div className='h-screen p-8 bg-white'>
      <h1 className='text-2xl font-bold mb-4'>Contact</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-teal-700 text-white'>
              <th className='border border-gray-300 px-4 py-2'>Image</th>
              <th className='border border-gray-300 px-4 py-2'>Name</th>
              <th className='border border-gray-300 px-4 py-2'>Designation</th>
              <th className='border border-gray-300 px-4 py-2'>Email</th>
              <th className='border border-gray-300 px-4 py-2'>Mobile</th>
              <th className='border border-gray-300 px-4 py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td className='border border-gray-300 px-4 py-2'>
                  <img src={doctor.image} alt={doctor.name} className='w-8 h-8 rounded-full' />
                </td>
                <td className='border border-gray-300 px-4 py-2'>{doctor.name}</td>
                <td className='border border-gray-300 px-4 py-2'>{doctor.designation}</td>
                <td className='border border-gray-300 px-4 py-2'>{doctor.email}</td>
                <td className='border border-gray-300 px-4 py-2'>{doctor.mobile}</td>
                <td className='border border-gray-300 px-4 py-2'>
                  <button onClick={() => handleContact('call')} className='bg-teal-800 hover:bg-teal-900 text-white py-1 px-2 rounded mr-2'>Call</button>
                  <button onClick={() => handleContact('email')} className='bg-teal-800 hover:bg-teal-900 text-white py-1 px-2 rounded'>Email</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
