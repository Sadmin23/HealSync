// Reports.js
import React from 'react';
import CommonLayout from './CommonLayout';
import { Documents } from './Documents';

export default function Reports() {
  return (
    <CommonLayout title="IMPORTANT DOCUMENTS">
      <div className='mt-5'></div>
      {
        Documents.map((document, index) => (
          <div key={index} className='flex border-2 border-dotted border-gray-400 rounded-md text-gray-500 p-2 mb-4'>
            <img src={document.src} alt={document.name} className='w-6 h-6 ml-1'/>
            <h1 className='ml-6 font-semibold'>{document.name}</h1>
          </div>
        ))
      }
    </CommonLayout>
  );
}