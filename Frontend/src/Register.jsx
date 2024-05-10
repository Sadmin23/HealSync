import React, { useState } from 'react';
import DoctorForm from './components/DoctorForm';
import NurseForm from './components/NurseForm';
import PatientForm from './components/PatientForm';
import { Link } from 'react-router-dom';

export default function Register() {
    const [user, setUser] = useState('patient');

    const handleUserChange = (selectedUser) => {
        setUser(selectedUser);
    }


    return (
        <div className='max-w-xl mx-auto'>
            <h1 className='text-3xl text-center font-bold my-4'>Register</h1>
            <div className='flex space-x-10 flex-wrap justify-center mb-4'>
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
            <div className='flex gap-2 mt-5 mb-10'>
              <p>Already have an account?</p>
              <Link to={'/'}>
                <span className='text-blue-700'>Sign In</span>
              </Link>
            </div>
        </div>
    );
}
