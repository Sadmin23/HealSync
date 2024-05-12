import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux';
import phone from '../assets/phone.png';
import patient1 from '../assets/patient1.jpg';
import patient2 from '../assets/patient2.jpg';
import patient3 from '../assets/patient3.jpg';
import patient4 from '../assets/patient4.jpg';

export default function Layout() {

  const user = useSelector((state) => state.user.currentUser);
  const userType = user.user;

  const [emergencies, setEmergencies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [caller, setCaller] = useState('');

  // const calculateTimeDifference = (time1, time2) => {
  //   const parsedTime1 = parseTimeString(time1);
  //   const parsedTime2 = parseTimeString(time2);
  
  //   const totalSeconds1 = parsedTime1.hours * 3600 + parsedTime1.minutes * 60 + parsedTime1.seconds;
  //   const totalSeconds2 = parsedTime2.hours * 3600 + parsedTime2.minutes * 60 + parsedTime2.seconds;
  
  //   const differenceInSeconds = Math.abs(totalSeconds2 - totalSeconds1);
  //   return differenceInSeconds;
  // };
  
  // const parseTimeString = (timeString) => {
  //   const [time, meridiem] = timeString.split(' ');
  //   const [hours, minutes, seconds] = time.split(':').map(Number);
  
  //   const parsedHours = meridiem === 'PM' ? hours + 12 : hours;
  
  //   return {
  //     hours: parsedHours,
  //     minutes: minutes,
  //     seconds: seconds
  //   };
  // };

  // const fetchEmergencies = async () => {
  //   const response = await fetch('http://localhost:8000/emergencies');
  //   const data = await response.json();
  //   setEmergencies(data);
  //   if (data.length > 0 && userType === 'Doctor') {
  //     let callTime = data[data.length - 1].time;
  //     let currentTime = new Date().toLocaleTimeString();
  //     const timeDifference = calculateTimeDifference(callTime, currentTime);
  //     timeDifference < 30 && data[data.length-1].action === 'false' ? setShowForm(true) : setShowForm(false);
  //   }
  // };

  // useEffect(() => {
  //   if (userType === 'Doctor')
  //   {
  //     const intervalId = setInterval(fetchEmergencies, 3000);
  //     return () => clearInterval(intervalId);
  //   }
  // }, []);


  // useEffect(() => {
  //   setCaller(emergencies[emergencies.length - 1]?.name);
  // }, [emergencies])

  // const handleEmergencyCall = async () => {
  //   try {
  //     window.open('http://localhost:3001/?roomID=123456', '_blank');
  
  //     const updateData = { action: 'Emergency call responded' };
  
  //     const response = await fetch('http://localhost:8000/emergencies/', {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(updateData),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Failed to update emergency record');
  //     }
  
  //     setShowForm(false);
  //   } catch (error) {
  //     console.error('Error updating emergency record:', error);
  //   }
  // };

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
              <img src={patient1} alt='patient' className='h-32 w-32 rounded-full mx-auto mb-2'/>
              <h1 className='text-xl font-bold text-gray-700 mb-1 text-center'>{caller || `John Smith`} </h1>
              <h1 className='text-lg font-semibold text-gray-700 mb-4'>is making an emergency call</h1>
              <div className='bg-white'>
                <div className="flex justify-center">
                  <button className="bg-[#fc445c] flex items-center text-white text-xl tracking-wider font-bold pl-1 pr-6 rounded-md ">
                    <img src={phone} alt='phone' className='h-16 w-16'/>
                    <span>Respond</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}
