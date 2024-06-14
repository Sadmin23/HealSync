import React, { useState } from 'react';
import DoctorForm from './components/DoctorForm';
import NurseForm from './components/NurseForm';
import PatientForm from './components/PatientForm';
import { Link } from 'react-router-dom';
import main from './assets/main.png';

export default function Register() {
    const [user, setUser] = useState('patient');

    const handleUserChange = (selectedUser) => {
        setUser(selectedUser);
    }


    return (
        <div className='flex'>
            <div className='w-1/2 bg-slate-200 h-screen'>
              <h1 className='mt-20 text-center text-5xl font-mono font-bold'>Welcome to HealSync</h1>
              <img src={main} alt='main' className='mx-auto mt-10 w-[550px] h-96 object-cover'/>
            </div>
            <div className='w-2/5 mx-auto'>
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
        </div>
    );
}
