import React, { useEffect, useState } from 'react';
import CommonLayout from './CommonLayout';
import PdfUpload from './PdfUpload';
import pdf from '../assets/pdf.svg';

export default function Reports({ update, patientId }) {
  const [pdfList, setPdfList] = useState([]);
  const [showUploadForm, setShowUploadForm] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/pdf')
      .then(response => response.json())
      .then(data => setPdfList(data))
      .catch(error => console.error('Error fetching PDF list:', error));
  }, []);

  const handleUpload = async (newPdf) => {
    setPdfList([...pdfList, newPdf]);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB'); // Format date as 'DD/MM/YYYY'
    const formattedTime = currentDate.toLocaleTimeString('en-US', { hour12: false }); // Format time as 'HH:MM'

    await fetch('http://127.0.0.1:8000/timeline', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Diagnostic Report',
        description: 'Diagnostic Report has been updated by Dr. John Doe.',
        date: formattedDate,
        time: formattedTime
      }),
    });
    
    setShowUploadForm(false);
  };

  return (
    <CommonLayout title="IMPORTANT DOCUMENTS">
      <div className='flex flex-col h-5/6'>
        {pdfList.map((document, index) => (
          <a
            key={index}
            href={`http://localhost:8000/pdf/${document.filename}`}
            target="_blank"
            rel="noopener noreferrer"
            className='flex border-2 border-dotted border-gray-400 rounded-md text-gray-500 p-2 mt-4 w-full hover:bg-slate-100'
          >
            <img src={pdf} alt="pdf" className='w-6 h-6 ml-1'/>
            <h1 className='ml-6 font-semibold'>{document.filename.replace('.pdf', '')}</h1>
          </a>
        ))}
      </div>
      {update && (
        <>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-lg mb-3 ml-24' onClick={() => setShowUploadForm(true)}>
            Add New Report
          </button>
          {showUploadForm && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white px-12 pt-8 pb-8 rounded-lg">
                <div className='flex items-center pb-6'>
                  <h1 className='text-xl font-semibold text-gray-700'>Upload Latest Report Here</h1>
                  <button className="bg-red-500 translate-x-6 -translate-y-4 text-white font-semibold rounded-full px-2  hover:bg-red-700 ml-auto" onClick={() => setShowUploadForm(false)}>X</button>                
                </div>
                <PdfUpload onUpload={handleUpload} />
              </div>
            </div>
          )}
        </>
      )}
    </CommonLayout>
  );
}