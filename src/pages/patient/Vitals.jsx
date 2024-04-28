import React, { useState, useEffect } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "../../components/LineChart";
import Vital_Box from "../../components/Vital_Box";
import Welcome from "../../components/Welcome";
import { vital_data } from "./data";

Chart.register(CategoryScale);

export default function Vitals() {
  const [vitalsData, setVitalsData] = useState(null);
  const [selected, setSelected] = useState(0);
  const [value, setValue] = useState(["0", "0", "0", "0/0"]);

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
  
  const getLastValueOfDataset = (index) => {
    if (!vitalsData || index < 0 || index >= vitalsData.datasets.length) {
      return 'Loading...';
    }
    
    const dataEntry = vitalsData.datasets[index];
    if (Array.isArray(dataEntry)) {
      // Handle blood pressure values
      const systolicData = dataEntry[0].data;
      const diastolicData = dataEntry[1].data;
      return `${diastolicData[diastolicData.length - 1]}/${systolicData[systolicData.length - 1]}`;
    } else {
      // Handle other vitals
      const data = dataEntry.data;
      return data[data.length - 1].toString();
    }
  };
  
  const data_range = [
    {
      min: 36,
      max: 38
    },
    {
      min: 65,
      max: 85
    },
    {
      min: 10,
      max: 25
    },
    {
      min: 75,
      max: 130
    }
  ]

  const chartData = {
    labels: vitalsData ? vitalsData.labels : [],
    datasets: vitalsData ? Array.isArray(vitalsData.datasets[selected]) ? vitalsData.datasets[selected] : [vitalsData.datasets[selected]] : []
  };

  return (
    <div className="h-screen mx-10 bg-slate-200">
      <Welcome />
      <h1 className="text-lg my-4 font-bold text-slate-400 mx-2">VITALS (Last update on )</h1>
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
