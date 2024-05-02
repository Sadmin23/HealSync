import doctor from '../../assets/doctor.jpg'
import doctor4 from '../../assets/doctor4.jpg'
import nurse from '../../assets/nurse.jpg'

export const timelineElements = [
    {
      id: 1,
      title: "Consultaion",
      description: "Consultation with Dr. John Deo",
      date: "25/12/2017",
      time: "10:00",
      src : doctor,
      tech: [],
    },
    {
      id: 2,
      title: "X-Ray",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      date: "25/08/2020",
      time: "10:00",
      src : doctor4,
      tech: [],
    },
    {
      id: 3,
      title: "Operation",
      description: "Pianoforte principles our unaffected not for astonished travelling are particular.",
      date: "04/09/2020",
      time: "10:00",
      src : doctor,
      tech: [],
    },
    {
      id: 4,
      title: "Diagnostic Report",
      description: "Diagnostic report and necessary advice to patient by Dr. Sarah Smith.",
      date: "03/03/2021",
      time: "10:00",
      src : doctor4,
      tech: ["Blood Report", "Urine Report", "X-Ray Files"],
    },
    {
      id: 5,
      title: "Vitals Checkup",
      description: "Dialy Vitals Checkup by Nurse Jane Doe.",
      date: "25/08/2021",
      time: "10:00",
      src : nurse,
      tech: [],
    },
    {
      id: 5,
      title: "Prescription",
      description: "Write prescriptio by Dr. Sarah Smith and necessary advice to patient.",
      date: "25/09/2021",
      time: "10:00",
      src : doctor,
      tech: ["Cholera", "Fever"],
    },
  ];
  
  export default timelineElements;