import nurse from '../assets/nurse.jpg'
import doctor from '../assets/doctor.jpg'
import doctor3 from '../assets/doctor3.jpg'
import doctor4 from '../assets/doctor4.jpg'
import patient1  from '../assets/patient1.jpg'
import patient3  from '../assets/patient2.jpg'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react'

export default function Timeline() {

  const [timeline, setTimeline] = useState([]);

  const user = useSelector((state) => state.user.currentUser);

  const gender = user.gender;
  const patientId = user.userId;

  const pic = gender === "male" ? patient1 : patient3;

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/timeline/${patientId}`)
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

        const title = element.title;

        //const img_src = (title === "Vitals Checkup") ? nurse : (title === "Prescription" || title === "Diagnostic Report") ? doctor : doctor4;

        let img_src="";
        
        switch(title) {
          case "Vitals Checkup":
            img_src = nurse;
            break;
          case "Prescription":
            img_src = doctor;
            break;
          case "Diagnostic Report":
            img_src = doctor4;
            break;
          case "Patient Registration":
            img_src = pic;
            break;
          case "Emergency Call":
            img_src = doctor3;
            break;
          default:
            return pic;
        }

        let timedate = element.time.split(" ");

        return (
          <div key={1} className="flex m-4 relative">
            <div className="items-start w-48 pt-0.5 relative flex">
              <div>
                <div className="w-4/5 text-slate-800 text-lg font-bold">{timedate[0]}</div>
                <div className="w-4/5 text-gray-600 text-right font-semibold">{timedate[1]}</div>
              </div>
              <div
                className={`bg-slate-700 w-[3px] h-5/6 translate-x-8 translate-y-12 opacity-30`}
              ></div>
              <img src={img_src} alt="logo" className="w-12 h-12 ml-2 rounded-full border-4 border-slate-400"/>
            </div>
            <div className="rounded-lg px-12 py-4 bg-slate-200 w-[900px]  text-slate-800 z-10 ">
              <div className="text-xl text-left font-bold">{title}</div>
              <div className="mt-4 text-base text-left mb-2">{element.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}