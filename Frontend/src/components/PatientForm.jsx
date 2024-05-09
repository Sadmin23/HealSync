import React, { useState } from 'react'

export default function PatientForm() {

    const [gender, setGender] = useState('male');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        age: '',
        weight: '',
        blood_grp: '',
        phone: '',
        gender: 'male',
        attendant_name: '',
        attendant_phone: '',
        attendant_email: '',
    });

    const handleGenderChange = (selectedGender) => {
        setGender(selectedGender);
        setFormData({
            ...formData,
            gender: selectedGender,
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send formData to the server
        console.log(formData);
        // Clear form after submission if needed
        setFormData({
            username: '',
            email: '',
            password: '',
            age: '',
            weight: '',
            blood_grp: '',
            phone: '',
            gender: 'male',
            attendant_name: '',
            attendant_phone: '',
            attendant_email: '',
        });
    }

  return (
    <div className='flex flex-col gap-4 mt-8'>
        <input
            type='text'
            placeholder='Full Name'
            className='border p-3 rounded-lg'
            id='username'
            name='username'
            value={formData.username}
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
        <input
            type='password'
            placeholder='Password'
            className='border p-3 rounded-lg'
            id='password'
            name='password'
            value={formData.password}
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
                placeholder='Phone Number'
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
    </div>
  )
}
