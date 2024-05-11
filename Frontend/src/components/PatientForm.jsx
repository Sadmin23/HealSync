import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function PatientForm() {

    const [gender, setGender] = useState('male');
    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        gender: 'male',
        phone: '',
        email: '',
        password: '',
        age: null,
        blood_grp: '',
        weight: null,
        attendant_name: '',
        attendant_email: '',
        attendant_phone: '',
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

        const numericValue = name === 'age' || name === 'weight' ? parseInt(value) : value;
    
        setFormData({
            ...formData,
            [name]: numericValue,
        });
        if (error) setError('');
    }

    const handleSubmit = async (e) => {
        if (
            !formData.fullname || !formData.email || !formData.username ||
            !formData.password || !formData.phone || !formData.age ||
            !formData.blood_grp || !formData.weight ||
            !formData.attendant_name || !formData.attendant_email ||
            !formData.attendant_phone
        ) {
            setError('Please fill in all fields.');
            return;
        }

        console.log(formData);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/patient/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "username": formData.username,
                    "name": formData.fullname,
                    "gender": formData.gender,
                    "phone": formData.phone,
                    "email": formData.email,
                    "password": formData.password,
                    "role": 'patient',
                    "age": formData.age,
                    "blood_group": formData.blood_grp,
                    "weight": formData.weight,
                    "attendant_name": formData.attendant_name,
                    "attendant_email": formData.attendant_email,
                    "attendant_phone": formData.attendant_phone,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to register patient');
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
        <div className='flex space-x-4'>
            <input
                type='number'
                placeholder='Age'
                className='border p-3 rounded-lg w-1/3'
                id='age'
                name='age'
                value={formData.age}
                onChange={handleChange}
                required
            />
            <input
                type='number'
                placeholder='Weight'
                className='border p-3 rounded-lg w-1/3'
                id='weight'
                name='weight'
                value={formData.weight}
                onChange={handleChange}
                required
            />
            <input
                type='text'
                placeholder='Blood Group'
                className='border p-3 rounded-lg w-1/3'
                id='blood_grp'
                name='blood_grp'
                value={formData.blood_grp}
                onChange={handleChange}
                required
            />
        </div>
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
        <input
            type='text'
            placeholder='Attendant Name'
            className='border p-3 rounded-lg'
            id='attendant_name'
            name='attendant_name'
            value={formData.attendant_name}
            onChange={handleChange}
            required
        />
        <div className='flex space-x-6'>
            <input
                type='email'
                placeholder='Attendant Email'
                className='border p-3 rounded-lg w-1/2'
                id='attendant_email'
                name='attendant_email'
                value={formData.attendant_email}
                onChange={handleChange}
                required
            />
            <input
                type='text'
                placeholder='Attendant Phone'
                className='border p-3 rounded-lg w-1/2'
                id='attendant_phone'
                name='attendant_phone'
                value={formData.attendant_phone}
                onChange={handleChange}
                required
            />
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
