export const patientLinks = [
    { to: '/patient', label: 'Vitals' },
    { to: '/patient/treatment-plan', label: 'Treatment Plan' },
    { to: '/patient/medical-record', label: 'Medical Records' },
    { to: '/patient/contact', label: 'Contact' }
];

export const nurseLinks = [
    { to: '/nurse', label: 'Dashboard' },
    { to: '/nurse/patient-vitals', label: 'Patient Vitals' },
    { to: '/nurse/contact', label: 'Contact' }
];

export const doctorLinks = [
    { to: '/doctor', label: 'Dashboard' },
    { to: '/doctor/emergencies', label: 'Emergencies' },
    { to: '/doctor/patient-list', label: 'Patients' },
    { to: '/doctor/contact', label: 'Contact' }
];

export const adminLinks = [
    { to: '/admin', label: 'Dashboard' },
    { to: '/admin/emergencies', label: 'Emergencies' },
    { to: '/admin/doctor-list', label: 'Doctors' },
    { to: '/admin/patient-list', label: 'Patients' },
    { to: '/admin/nurse-list', label: 'Nurses' }
];