import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "../../components/LineChart";
import { vital_data } from "./data";
import Vital_Box from "../../components/Vital_Box";
import { useState } from "react";

Chart.register(CategoryScale);

const labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const dataset = [
  {
    label: 'Body Temp',
    data: [36.5, 36.7, 36.8, 36.9, 37.0, 37.1, 37.2],
    borderColor: '#8B5CF6'
  },
  {
    label: 'Pulse',
    data: [100, 72, 74, 76, 78, 80, 82],
    borderColor: '#FF6F61'
  },
  {
    label: 'Breathing Rate',
    data: [100, 14, 16, 18, 20, 22, 24],
    borderColor: '#5EBA7D'
  },
  [ {
    label: 'Systolic Pressure',
    data: [120, 125, 122, 118, 121, 119, 123],
    borderColor: '#8B5CF6'
  },
  {
    label: 'Diasystolic Pressure',
    data: [80, 85, 82, 78, 81, 79, 83],
    borderColor: '#FF6F61'
  }]
];



export default function Vitals() {

  const [selected, setSelected] = useState(0);

  const chartData = {
    labels,
    datasets: Array.isArray(dataset[selected]) ? dataset[selected] : [dataset[selected]]
  };

  return (
    <div className="h-screen">
      <h1 className="text-lg my-4 font-bold text-slate-400 mx-12">VITALS (Last update on 14/04/2024 at 14:30)</h1>
      <div className="py-10 rounded-lg shadow-md flex h-1/2 px-5 bg-white items-center mx-10 space-x-4">
        <div className="w-[450px] grid grid-cols-2 gap-5 text-slate-400 font-semibold">
            {vital_data.map((vital, index) => (
              <button onClick={() => setSelected(index) } key={index} className="text-left">
                <Vital_Box title={vital.label} value={35} unit={vital.unit} selected={selected===index} />
              </button>
            ))}
          </div>
        <LineChart chartData={chartData} maxData={4000} />
      </div>
    </div>
  );
}