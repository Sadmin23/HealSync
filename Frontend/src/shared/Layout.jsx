import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux';

export default function Layout() {

  const user = useSelector((state) => state.user.currentUser);
  const userType = user.user;

  const [emergencies, setEmergencies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [responded, setResponded] = useState(false);
  const [caller, setCaller] = useState('');

  const calculateTimeDifference = (time1, time2) => {
    const parsedTime1 = parseTimeString(time1);
    const parsedTime2 = parseTimeString(time2);
  
    const totalSeconds1 = parsedTime1.hours * 3600 + parsedTime1.minutes * 60 + parsedTime1.seconds;
    const totalSeconds2 = parsedTime2.hours * 3600 + parsedTime2.minutes * 60 + parsedTime2.seconds;
  
    const differenceInSeconds = Math.abs(totalSeconds2 - totalSeconds1);
    return differenceInSeconds;
  };
  
  const parseTimeString = (timeString) => {
    const [time, meridiem] = timeString.split(' ');
    const [hours, minutes, seconds] = time.split(':').map(Number);
  
    const parsedHours = meridiem === 'PM' ? hours + 12 : hours;
  
    return {
      hours: parsedHours,
      minutes: minutes,
      seconds: seconds
    };
  };

  const fetchEmergencies = async () => {
    const response = await fetch('http://localhost:8000/emergencies');
    const data = await response.json();
    setEmergencies(data);
    if (data.length > 0 && userType === 'Doctor') {
      let callTime = data[data.length - 1].time;
      let currentTime = new Date().toLocaleTimeString();
      const timeDifference = calculateTimeDifference(callTime, currentTime);
      timeDifference < 30 && data[data.length-1].action === 'false' ? setShowForm(true) : setShowForm(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchEmergencies, 3000);
    return () => clearInterval(intervalId);
  }, []);


  useEffect(() => {
    setCaller(emergencies[emergencies.length - 1]?.name);
  }, [emergencies])

  const handleEmergencyCall = async () => {
    try {
      window.open('http://localhost:3001/?roomID=123456', '_blank');
  
      const updateData = { action: 'Emergency call responded' };
  
      const response = await fetch('http://localhost:8000/emergencies/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update emergency record');
      }
  
      setShowForm(false);
    } catch (error) {
      console.error('Error updating emergency record:', error);
    }
  };

  return (
    <div className='flex-col bg-slate-200'>
        <Header/>
        <div className='flex'>
          <Sidebar/>
          <div>{<Outlet/>}</div>
        </div>
        {showForm && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white px-12 pt-8 pb-8 rounded-lg">
              <h1 className='text-xl font-semibold text-gray-700 mb-8'>{caller} is making an emergency call</h1>
              <div className='bg-white'>
                <div className="flex justify-center">
                  <button type="submit" className="bg-red-600 hover:bg-red-900 text-white text-lg font-semibold py-4 px-6 rounded-md hover:bg-primary-600" onClick={handleEmergencyCall}>
                    Respond
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}
