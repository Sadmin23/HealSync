import React, { useEffect, useState } from 'react'
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

    const [nurseData, setNurseData] = useState([]);
    const [nurseLength, setNurseLength] = useState(0);
    const [doctorData, setDoctorData] = useState([]);
    const [doctorLength, setDoctorLength] = useState(0);
    const [patientData, setPatientData] = useState({});

    function generateUniqueRandomNumbers(length) {
        if (length <= 1) {
            return [0];
        }
    
        const numbers = [];
        let num1 = Math.floor(Math.random() * length);
    
        numbers.push(num1);
    
        let num2;
        do {
            num2 = Math.floor(Math.random() * length);
        } while (num2 === num1);
    
        numbers.push(num2);
    
        return numbers;
    }

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/nurse')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch nurse data');
          }
          return response.json();
        })
        .then(data => {
            setNurseData(data)
            setNurseLength(data.length)
          }
        )
        .catch(error => console.error('Error fetching nurse data:', error));
        
        fetch('http://127.0.0.1:8000/api/doctor')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch doctor data');
          }
          return response.json();
        })
        .then(data => {
            setDoctorData(data)
            setDoctorLength(data.length)
          }
        )
        .catch(error => console.error('Error fetching doctor data:', error));        
    }, []);


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

    const assignDoctor = async (index, iteration) => {

        const doctor = doctorData[index];

        console.log('doctor');

        try {
            const response = await fetch('http://127.0.0.1:8000/api/patientdoctor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "patient_id": patientData.id,
                    "patient_name": patientData.name,
                    "doctor_id": doctor.id,
                    "doctor_name": doctor.name,
                    "type": iteration ? 'Treatment' : 'Emergency',
                    "time": iteration ? '12:00 am - 12:15 am' : '',
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to assign doctor');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    const assignNurse = async (index, iteration) => {

        const nurse = nurseData[index];

        console.log(nurse);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/patientnurse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "patient_id": patientData.id,
                    "patient_name": patientData.name,
                    "nurse_id": nurse.id,
                    "nurse_name": nurse.name,
                    "type": iteration ? 'Vitals Checkup' : 'Medication',
                    "time": iteration ? '9:00 am - 9:15 am' : '2:00 pm - 2:15 pm',
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to assign nurse');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    const addEvent = async ()=>{

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-GB'); // Format date as 'DD/MM/YYYY'
        const formattedTime = currentDate.toLocaleTimeString('en-US', { hour12: false }); // Format time as 'HH:MM'


        try {
            const response = await fetch('http://127.0.0.1:8000/api/timeline', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "title": "Patient Registration",
                    "patient_id": patientData.id,
                    "time": formattedDate + ' ' + formattedTime,
                    "description": "You registered successfully to HealSync. Doctors and Nurses has been assigned for your treatment, vitals checkup and medication.",
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to add Event');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }        
    }

    const addVitalsData = async () => {

        try {
            const response = await fetch('http://127.0.0.1:8000/api/vitals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "patient_id": patientData.id,
                    "labels": [
                      "18/04", "19/04", "20/04", "21/04", "22/04", "23/04", "24/04"
                    ],
                    "datasets": [
                          {
                              "label": "Body Temp",
                              "data": [36.5, 36.7, 36.8, 36.9, 37.0, 37.1, 37.2]
                          },
                          {   "label": "Pulse", 
                              "data": [70, 72, 74, 76, 75, 80, 82]
                          },
                          {   "label": "Breathing Rate", 
                              "data": [12, 14, 16, 15, 20, 22, 24]
                          },
                          {
                              "label": "Systolic Pressure",
                              "data": [120, 125, 122, 118, 121, 119, 123]
                          },
                          {
                              "label": "Diasystolic Pressure",
                              "data": [80, 85, 82, 78, 81, 79, 83]
                          }
                    ]
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to add Vitals Data');
            }
        }
        catch (error) {
            console.error('Error:', error);
        } 
    }


    useEffect(() => {

        if (patientData.id) {

            console.log('patient data useEffect if');

            const doctorIndices = generateUniqueRandomNumbers(doctorLength);
            const nurseIndices = generateUniqueRandomNumbers(nurseLength);

            doctorIndices.forEach((index, iteration) => assignDoctor(index, iteration));
            nurseIndices.forEach((index, iteration) => assignNurse(index, iteration));

            addEvent();
            addVitalsData();

            navigate('/');
        }

    }, [patientData])
    


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

            const data = await response.json();
            setPatientData(data.patient);

            // navigate('/');
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
