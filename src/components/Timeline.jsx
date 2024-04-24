import { timelineElements } from "../pages/patient/timelineData";
import schoolIcon from "../assets/school.svg";
import workIcon from "../assets/work.svg";
import pdfIcon from "../assets/pdf.svg";

export default function Timeline({ defaultColor }) {
  return (
    <div>
      {timelineElements.map((element) => {

        const color = defaultColor || `bg-${element.color}-500`;

        return (
          <div key={element.id} className="flex m-4 relative">
            <div className="hidden items-start w-48 pt-0.5 relative sm:flex">
              <div>
                <div className="w-4/5 text-slate-800 font-bold">{element.date}</div>
                <div className="w-4/5 text-slate-800 text-right font-bold">{element.time}</div>
              </div>
              <div
                className={`bg-slate-700 w-[3px] h-full translate-x-8 translate-y-10 opacity-30`}
              ></div>
              <div className="w-6 h-6 ml-[18px] rounded-full mt-4 bg-slate-400"></div>
              <div
                className={`h-1 w-8 translate-y-5 opacity-30`}
              ></div>
            </div>
            <div className="rounded-lg px-12 py-4 bg-slate-200 w-[900px]  text-slate-800 z-10 ">
              <div className="text-xl text-left font-bold">{element.title}</div>
              <div className="mt-4 text-base text-left mb-2">{element.description}</div>
              <div className="flex flex-wrap">
                {element.tech.map((tech, index) => {
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
                })}
              </div>
              <img
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}