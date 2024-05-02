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
    <form className='border-2 border-black m-10 px-20 py-10' onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} accept=".pdf" />
      <button type="submit">Upload PDF</button>
    </form>
  );
};

export default PdfUpload;