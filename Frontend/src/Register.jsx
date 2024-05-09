import React, { useState } from 'react';
import DoctorForm from './components/DoctorForm';
import NurseForm from './components/NurseForm';
import PatientForm from './components/PatientForm';

export default function Register() {
    const [user, setUser] = useState('patient');

    const handleUserChange = (selectedUser) => {
        setUser(selectedUser);
    }


    return (
        <div className='max-w-xl mx-auto'>
            <h1 className='text-3xl text-center font-bold mt-10 mb-7'>Register</h1>
            <div className='flex space-x-10 flex-wrap justify-center mt-10'>
                <button 
                    className={`${user === 'patient' ? `bg-blue-700 shadow-2xl` : 'bg-blue-400'}  hover:shadow-md text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleUserChange('patient')}
                >
                    Patient
                </button>
                <button 
                    className={`${user === 'doctor' ? `bg-pink-700 shadow-2xl` : 'bg-pink-400'}  hover:shadow-md text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleUserChange('doctor')}
                >
                    Doctor
                </button>
                <button 
                    className={`${user === 'nurse' ? `bg-orange-700 shadow-2xl` : 'bg-orange-400'}  hover:shadow-md text-white font-bold py-2 px-4 rounded`}
                    onClick={() => handleUserChange('nurse')}
                >
                    Nurse
                </button>
            </div>
            {user === 'doctor' ? <DoctorForm /> : user === 'nurse' ? <NurseForm/> : <PatientForm/>}
        </div>
    );
}
