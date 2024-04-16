import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "../../components/LineChart";

Chart.register(CategoryScale);

const labels = ['06/01', '06/02', '06/03', '06/04', '06/05', '06/06', '06/07']

const datasets = [  {
    label: 'Personalized',
    data: [{
      x: '06/01',
      y: 3200
    }, {
      x: '06/02',
      y: 2800
    }, {
      x: '06/03',
      y: 1500
    }, {
      x: '06/04',
      y: 2500
    }],
    borderColor: '#8B5CF6'
  },
  {
    label: 'Random',
    data: [{
      x: '06/02',
      y: 3200
    }, {
      x: '06/03',
      y: 2600
    }, {
      x: '06/04',
      y: 1700
    }, {
      x: '06/05',
      y: 2500
    }],
    borderColor: '#b2beb5'
  }
]

export default function Vitals() {

  const chartData = {
    labels,
    datasets
  };


  return (
    <div className="h-screen">
      <h1 className="text-lg my-4 font-bold text-slate-400 mx-10">VITALS (Last update on 14/04/2024 at 14:30)</h1>
      <div className="py-10 rounded-lg shadow-md flex h-1/2 px-5 bg-white items-center mx-10 space-x-4">
        <div className="w-[500px]  grid grid-cols-2 gap-5 text-slate-400 font-semibold">
            <div className="bg-slate-200 rounded-md p-6 font-bold space-y-1">
              <p>Body Temp</p>
              <h1 className="text-2xl text-black pt-3">36.5</h1>
              <p>℃</p>
            </div>
            <div className="bg-slate-200 rounded-md p-6 font-bold space-y-1">
              <p>Pulse</p>
              <h1 className="text-2xl text-black pt-3">85</h1>
              <p>bpm</p>
            </div>            
            <div className="bg-green-700 rounded-md p-6 text-white font-bold space-y-1">
              <p>Blood Pressure</p>
              <h1 className="text-2xl pt-3">80/70</h1>
              <p>mm/Hg</p>
            </div>            
            <div className="bg-slate-200 rounded-md p-6 font-bold space-y-1">
              <p>Breathing Rate</p>
              <h1 className="text-2xl text-black pt-3">15</h1>
              <p>breaths/m</p>
            </div>        
          </div>
        <LineChart chartData={chartData} maxData={4000} />
      </div>
    </div>
  );
}