// Reports.js
import React, { useEffect, useState } from 'react';
import CommonLayout from './CommonLayout';
import pdf from '../assets/pdf.svg'

export default function Reports() {

  const [pdfList, setPdfList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/pdf')
      .then(response => response.json())
      .then(data => setPdfList(data))
      .catch(error => console.error('Error fetching PDF list:', error));
  }, []);



  return (
    <CommonLayout title="IMPORTANT DOCUMENTS">
      <div className='mt-5'></div>
      {
        pdfList.map((document, index) => (

          <a
            key={index}
            href={`http://localhost:8000/pdf/${document.filename}`} // Assuming the PDFs are served from this endpoint
            target="_blank"
            rel="noopener noreferrer"
            className='flex border-2 border-dotted border-gray-400 rounded-md text-gray-500 p-2 mb-4 w-full hover:bg-slate-100'
          >
            <img src={pdf} alt="pdf" className='w-6 h-6 ml-1'/>
            <h1 className='ml-6 font-semibold'>{document.filename.replace('.pdf', '')}</h1>
          </a>
        ))
      }
    </CommonLayout>
  );
}