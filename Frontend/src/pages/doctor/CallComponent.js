import React, { useState } from 'react';
import axios from 'axios';

const CallComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleMakeCall = () => {
    setIsLoading(true);
    setErrorMessage('');

    axios.post('http://localhost:3001/make-call', { phoneNumber })
      .then(response => {
        console.log(response.data.message);
        // Handle success
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error
        setErrorMessage('Error making call. Please try again.');
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
        className="border border-gray-300 px-3 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
      <button
        onClick={handleMakeCall}
        className={`bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isLoading}
      >
        {isLoading ? 'Making Call...' : 'Make Call'}
      </button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default CallComponent;
