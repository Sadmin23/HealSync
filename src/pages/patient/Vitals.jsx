import React, { useState, useEffect } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "../../components/LineChart";
import Vital_Box from "../../components/Vital_Box";
import Welcome from "../../components/Welcome";
import { data_range, vital_data } from "./data";

Chart.register(CategoryScale);

export default function Vitals({update}) {
  const [vitalsData, setVitalsData] = useState(null);
  const [selected, setSelected] = useState(0);
  const [value, setValue] = useState(["0", "0", "0", "0/0"]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/vitals')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch vitals data');
        }
        return response.json();
      })
      .then(data => 
        setVitalsData(data)
      )
      .catch(error => console.error('Error fetching vitals data:', error));
  }, []);


  useEffect(() => {
    if (vitalsData && vitalsData.datasets) {
      const updatedValues = vitalsData.datasets.map((_, index) => getLastValueOfDataset(index));
      setValue(updatedValues);
    }
  }, [vitalsData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    const temp = formData.get('temp');
    const pulse = formData.get('pulse');
    const breaths = formData.get('breaths');
    const sysPressure = formData.get('sys_pressure');
    const diasPressure = formData.get('dias_pressure');
  
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const label = `${day}/${month}`;
  
    const data = {
      label: label,
      data: [parseFloat(temp), parseInt(pulse), parseInt(breaths), parseInt(sysPressure), parseInt(diasPressure)]
    };
  
    try {
      const response = await fetch('http://localhost:8000/vitals', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update vitals data');
      }
  
      const updatedDataResponse = await fetch('http://localhost:8000/vitals');
      if (!updatedDataResponse.ok) {
        throw new Error('Failed to fetch updated vitals data');
      }
  
      const updatedData = await updatedDataResponse.json();
      setVitalsData(updatedData);
      
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-GB'); // Format date as 'DD/MM/YYYY'
      const formattedTime = currentDate.toLocaleTimeString('en-US', { hour12: false }); // Format time as 'HH:MM'
  
      await fetch('http://127.0.0.1:8000/timeline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Vitals Checkup',
          description: 'Vitals updated by sister Jane Doe.',
          date: formattedDate,
          time: formattedTime
        }),
      });

    } catch (error) {
      console.error('Error updating vitals data:', error);
    }
  
    setShowForm(false);
  }
  
  
  const getLastValueOfDataset = (index) => {
    if (!vitalsData || index < 0 || index >= vitalsData.datasets.length) {
      return 'Loading...';
    }
    
    const dataEntry = vitalsData.datasets[index];
    if (Array.isArray(dataEntry)) {
      const systolicData = dataEntry[0].data;
      const diastolicData = dataEntry[1].data;
      return `${diastolicData[diastolicData.length - 1]}/${systolicData[systolicData.length - 1]}`;
    } else {
      const data = dataEntry.data;
      return data[data.length - 1].toString();
    }
  };

  const getLastDate = () => {
    if (!vitalsData || vitalsData.labels.length === 0) {
      return 'Loading...';
    }
    return vitalsData.labels[vitalsData.labels.length - 1];
  }

  const chartData = {
    labels: vitalsData ? vitalsData.labels : [],
    datasets: vitalsData ? Array.isArray(vitalsData.datasets[selected]) ? vitalsData.datasets[selected] : [vitalsData.datasets[selected]] : []
  };

  return (
    <div className="h-screen mx-10 bg-slate-200">
      {!update && <Welcome />}
      <div className='flex justify-between items-center'>
        <h1 className="text-lg my-4 font-bold text-slate-400 mx-2">VITALS (Last update on {getLastDate()})</h1>
        {update && <button onClick={()=>setShowForm(true)} className='bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg ml-20'>Update Vitals</button>}
        {showForm && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white px-12 pt-8 pb-8 rounded-lg">
                <div className='flex items-center pb-6'>
                  <h1 className='text-xl font-bold text-gray-700'>Add Latest Vitals Here</h1>
                  <button className="bg-red-500 translate-x-6 -translate-y-4 text-white font-semibold rounded-full px-2  hover:bg-red-700 ml-auto" onClick={() => setShowForm(false)}>X</button>                
                </div>
                <div className='bg-white'>
                  <form onSubmit={handleSubmit}>
                  <div className="mb-8">
                    <label htmlFor="temp" className="block text-gray-700 font-bold">Body Temperature</label>
                    <input
                      type="number"
                      id="temp"
                      placeholder="in ℃"
                      step="0.1" // Allow float input
                      required={true}
                      name="temp"
                      className="w-full border-2 border-gray-300 rounded-md py-2 px-4 mt-1 focus:outline-none focus:border-primary-500"
                    />
                  </div>
                      <div className="mb-8">
                        <label htmlFor="pulse" className="block text-gray-700 font-bold">Pulse Rate</label>
                        <input type="number" id="pulse" placeholder='in bpm' required={true} name="pulse" className="w-full border-2 border-gray-300 rounded-md py-2 px-4 mt-1 focus:outline-none focus:border-primary-500" />
                      </div>
                    <div className="mb-8">
                      <label htmlFor="breaths" className="block text-gray-700 font-bold">Breathing Rate</label>
                      <input type="number" id="breaths" placeholder='in breaths/min' required={true} name="breaths" className="w-full border-2 border-gray-300 rounded-md py-2 px-4 mt-1 focus:outline-none focus:border-primary-500" />
                    </div>
                    <div className='flex space-x-4'>
                      <div className="mb-8">
                        <label htmlFor="sys_pressure" className="block text-gray-700 font-bold">Systolic Pressure</label>
                        <input type="number" id="sys_pressure" placeholder='in mm/Hg' required={true} name="sys_pressure" className="w-full border-2 border-gray-300 rounded-md py-2 px-4 mt-1 focus:outline-none focus:border-primary-500" />
                      </div>
                      <div className="">
                        <label htmlFor="dias_pressure" className="block text-gray-700 font-bold">Diastolic Pressure</label>
                        <input type="number" id="dias_pressure" placeholder='in mm/Hg' required={true} name="dias_pressure" className="w-full border-2 border-gray-300 rounded-md py-2 px-4 mt-1 focus:outline-none focus:border-primary-500" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-slate-800 text-white text-lg font-semibold py-4 px-6 rounded-md hover:bg-primary-600">Add Vitals</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
      </div>
      <div className="w-[1200px] py-10 rounded-lg shadow-md flex h-1/2 px-5 bg-white items-center space-x-4">
        <div className="w-[450px] grid grid-cols-2 gap-5 text-slate-400 font-semibold">
          {vital_data.map((vital, index) => (
            <button onClick={() => setSelected(index)} key={index} className="text-left">
              <Vital_Box title={vital.label} value={value[index]} unit={vital.unit} selected={selected === index} />
            </button>
          ))}

        </div>
          <LineChart chartData={chartData} vitalIndex={selected} minmax={data_range[selected]} />
      </div>
    </div>
  );
}
