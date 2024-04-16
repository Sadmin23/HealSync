import React from 'react';
import ContactButtons from './ContactButtons'; // Import the ContactButtons component
import ReactDOM from 'react-dom'; // Add this import statement

export default function NurseContact() {
  const handleContact = (action) => {
    // Open a new window with contact buttons
    const contactWindow = window.open('', '_blank', 'width=300,height=200');
    contactWindow.document.body.innerHTML = `
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-2">Contact Options</h2>
        <div id="contact-buttons"></div>
      </div>
    `;
    // Render ContactButtons component in the new window
    ReactDOM.render(<ContactButtons action={action} onClose={() => contactWindow.close()} />, contactWindow.document.getElementById('contact-buttons'));
  };

  // Sample data for demonstration
  const nurses = [
    {
      id: 1,
      image: 'https://via.placeholder.com/50', // Sample image URL
      name: 'Nurse Jane Smith',
      designation: 'Nurse',
      email: 'jane@example.com',
      mobile: '987-654-3210'
    },
    // Add more nurses as needed
  ];

  return (
    <div className='h-screen p-8' style={{ backgroundColor: '#fff', color: '#000' }}>
      <h1 className='text-2xl font-bold mb-4'>Contact</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full border-collapse border border-gray-300'>
          <thead>
            <tr style={{ backgroundColor: 'teal', color: '#fff' }}> {/* Teal color */}
              <th className='border border-gray-300 px-4 py-2'>Image</th>
              <th className='border border-gray-300 px-4 py-2'>Name</th>
              <th className='border border-gray-300 px-4 py-2'>Designation</th>
              <th className='border border-gray-300 px-4 py-2'>Email</th>
              <th className='border border-gray-300 px-4 py-2'>Mobile</th>
              <th className='border border-gray-300 px-4 py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {nurses.map((nurse) => (
              <tr key={nurse.id}>
                <td className='border border-gray-300 px-4 py-2'>
                  <img src={nurse.image} alt={nurse.name} className='w-8 h-8 rounded-full' />
                </td>
                <td className='border border-gray-300 px-4 py-2'>{nurse.name}</td>
                <td className='border border-gray-300 px-4 py-2'>{nurse.designation}</td>
                <td className='border border-gray-300 px-4 py-2'>{nurse.email}</td>
                <td className='border border-gray-300 px-4 py-2'>{nurse.mobile}</td>
                <td className='border border-gray-300 px-4 py-2'>
                  <button onClick={() => handleContact('call')} style={{ backgroundColor: 'teal', color: '#fff', borderRadius: '4px', padding: '8px 12px', marginRight: '8px', border: 'none' }}>Call</button>
                  <button onClick={() => handleContact('email')} style={{ backgroundColor: 'teal', color: '#fff', borderRadius: '4px', padding: '8px 12px', border: 'none' }}>Email</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
