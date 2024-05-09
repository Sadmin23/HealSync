import React, { useState } from 'react';
import axios from 'axios';

const PdfUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      
      try {
        const response = await axios.post(
          'http://localhost:8000/upload/',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        onUpload(response.data);
        
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
      <form className='flex flex-col w-96' onSubmit={handleSubmit}>
        <input className='border-2 border-dashed rounded-lg border-gray-500 pl-24 py-14' type="file" onChange={handleFileChange} accept=".pdf" />
        <button className='rounded-lg mt-6 bg-gray-300 font-semibold text-gray-700 hover:bg-gray-500 hover:text-white px-4 py-2 ' type="submit">Upload PDF</button>  
      </form>
  );
};

export default PdfUpload;