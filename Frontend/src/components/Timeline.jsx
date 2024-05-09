import nurse from '../assets/nurse.jpg'
import doctor from '../assets/doctor.jpg'
import doctor4 from '../assets/doctor4.jpg'
import pdfIcon from "../assets/pdf.svg";
import { useEffect, useState } from "react";

export default function Timeline({ defaultColor }) {

  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/timeline')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch timeline data');
        }
        return response.json();
      })
      .then(data => 
        setTimeline(data)
      )
      .catch(error => console.error('Error fetching timeline data:', error));
  }, []);

  return (
    <div>
      {timeline.map((element) => {

        const img_src = (element.title === "Vitals Checkup") ? nurse : (element.title === "Prescription" || element.title === "Diagnostic Report") ? doctor : doctor4;    

        const color = defaultColor || `bg-${element.color}-500`;

        return (
          <div key={1} className="flex m-4 relative">
            <div className="items-start w-48 pt-0.5 relative flex">
              <div>
                <div className="w-4/5 text-slate-800 font-bold">{element.date}</div>
                <div className="w-4/5 text-slate-800 text-right font-bold">{element.time}</div>
              </div>
              <div
                className={`bg-slate-700 w-[3px] h-full translate-x-8 translate-y-12 opacity-30`}
              ></div>
              <img src={img_src} alt="logo" className="w-12 h-12 ml-2 rounded-full border-4 border-slate-400"/>
            </div>
            <div className="rounded-lg px-12 py-4 bg-slate-200 w-[900px]  text-slate-800 z-10 ">
              <div className="text-xl text-left font-bold">{element.title}</div>
              <div className="mt-4 text-base text-left mb-2">{element.description}</div>
              <div className="flex flex-wrap">
                {/* {element.tech.map((tech, index) => {
                  return (
                    <div className="w-28 mt-4 item-center">
                      <img
                        src={pdfIcon}
                        alt="icon"
                        width={50}
                        height={50}
                      />
                      <p className="text-sm ml-1 mt-1">{tech}</p>
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}