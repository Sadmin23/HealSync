import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function DoctorForm() {

    const [gender, setGender] = useState('male');
    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        gender: 'male',
        specialization: '',
        phone: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const [error, setError] = useState('');    

    const handleGenderChange = (selectedGender) => {
        setGender(selectedGender);
        setFormData({
            ...formData,
            gender: selectedGender,
        });
        if (error) setError('');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (error) setError('');
    }

    const handleSubmit = async (e) => {

        if (
            !formData.fullname ||
            !formData.email ||
            !formData.username ||
            !formData.password ||
            !formData.phone ||
            !formData.specialization
        ) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/doctor/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": formData.username,
                    "name": formData.fullname,
                    "gender": formData.gender,
                    "specialization": formData.specialization,
                    "phone": formData.phone,
                    "email": formData.email,
                    "password": formData.password,
                    "role": 'doctor',
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to register doctor');
            }
    
            navigate('/');
            
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <div className='flex flex-col gap-4'>
    <input
        type='text'
        placeholder='Full Name'
        className='border p-3 rounded-lg'
        id='fullname'
        name='fullname'
        value={formData.fullname}
        onChange={handleChange}
        required
    />
    <input
        type='email'
        placeholder='Email Address'
        className='border p-3 rounded-lg'
        id='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required
    />
    <div className='flex space-x-6'>
        <input
          type='text'
          placeholder='Username'
          className='border p-3 rounded-lg w-1/2'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          required={true}
        />
        <input
          type='password'
          placeholder='Password'
          className='border p-3 rounded-lg w-1/2'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required={true}
        />
    </div>
    <input
        type='text'
        placeholder='Specialization'
        className='border p-3 rounded-lg'
        id='specialization'
        name='specialization'
        value={formData.specialization}
        onChange={handleChange}
        required
    />
    <div className='flex space-x-10'>
        <input
            type='text'
            placeholder='Phone Number'
            className='border p-3 rounded-lg w-1/2'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
        />
        <div className='flex items-center pr-4'>
            <label className='mr-4 text-lg'>Gender:</label>
            <input 
                type='radio' 
                id='male' 
                name='gender' 
                value='male' 
                checked={gender === 'male'} 
                onChange={() => handleGenderChange('male')} 
            />
            <label htmlFor='male' className='mr-4 text-lg'>Male</label>
            <input 
                type='radio' 
                id='female' 
                name='gender' 
                value='female' 
                checked={gender === 'female'} 
                onChange={() => handleGenderChange('female')} 
            />
            <label htmlFor='female' className='text-lg'>Female</label>
        </div>
    </div>                    
    <button 
        className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        onClick={handleSubmit}
    >
        Register
    </button>
    {error && <div className="text-red-500 mt-2">{error}</div>}
</div>
  )
}
