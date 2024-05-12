import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './shared/Layout'

import MedicalRecord from './pages/patient/MedicalRecord'
import Contact from './pages/patient/Contact'
import SignIn from './SignIn'
import Emergencies from './pages/doctor/Emergencies'
import Patients from './pages/doctor/Patients'
import DoctorContact from './pages/doctor/Contact'
import NurseContact from './pages/nurse/Contact'
import PatientVitals from './pages/nurse/PatientVitals'
import DoctorDashboard from './pages/doctor/Dashboard'
import NurseDashboard from './pages/nurse/Dashboard'
import AllDoctors from './pages/admin/Doctors'
import AllPatients from './pages/admin/Patients'
import AllNurses from './pages/admin/Nurses'
import AllEmergencies from './pages/admin/Emergencies'
import AdminDashboard from './pages/admin/Dashboard'
import { useSelector } from 'react-redux'
import PrivateRoute from './utils/ProtectedRoute'
import PatientDashboard from './pages/patient/Dashboard'
import TreatmentOverview from './pages/patient/TreatmentOverview'
import Register from './Register'

export default function App() {

    const user = useSelector((state) => state.user.currentUser);

    const userType = user.user;

    console.log(userType);

    const AuthenticatedRoute = ({ element, path }) => {
        return (userType !== 'None') ? (
          <Navigate to={userType} replace state={{ from: path }} />
        ) : (
          element
        );
      };

  return (
    <Router>
    <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<AuthenticatedRoute element={<SignIn />} path={"/"}/>} />
        <Route path="/admin" element={<PrivateRoute userType={userType} allowedUserTypes={['admin']} />}>
            <Route index element={<AdminDashboard />} />
            <Route path='emergencies' element={<AllEmergencies />} />
            <Route path='patient-list' element={<AllPatients />} />
            <Route path='doctor-list' element={<AllDoctors />} />
            <Route path='nurse-list' element={<AllNurses />} />
        </Route>
        <Route path="/patient" element={<PrivateRoute userType={userType} allowedUserTypes={['patient']} />}>
            <Route index element={<PatientDashboard />} />
            <Route path='treatment-plan' element={<TreatmentOverview />} />
            <Route path='medical-record' element={<MedicalRecord />} />
            <Route path='contact' element={<Contact />} />
        </Route>
        <Route path="/doctor" element={<PrivateRoute userType={userType} allowedUserTypes={['doctor']} />}>
            <Route index element={<DoctorDashboard />} />
            <Route path='emergencies' element={<Emergencies />} />
            <Route path='patient-list' element={<Patients />} />
            <Route path='contact' element={<DoctorContact />} />
        </Route>
        <Route path="/nurse" element={<PrivateRoute userType={userType} allowedUserTypes={['nurse']} />}>
            <Route index element={<NurseDashboard />} />
            <Route path='patient-vitals' element={<PatientVitals />} />
            <Route path='contact' element={<NurseContact />} />
        </Route>
    </Routes>
</Router>
  )
}
