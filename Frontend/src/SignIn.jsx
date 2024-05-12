import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { SignInUser } from './redux/userSlice'
import { useEffect, useState } from 'react';

export default function SignIn() {

  const [formState, setFormState] = useState({
    user: 'None',
    username: '',
    password: ''
  });

  const [userdata, setUserdata] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (error) setError('');
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    if (userdata.id) { // Assuming `id` is a good indicator that userdata is populated
      dispatch(SignInUser({
        userId: userdata.id,
        username: userdata.username,
        user: formState.user.toLowerCase(),
        gender: userdata.gender
      }));
      navigate(`/${formState.user}`);
    }
  }, [userdata, dispatch, navigate, formState.user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { user, username, password } = formState;

    if (user === 'None' || !username.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    user = user.toLowerCase();

    try {
        const response = await fetch(`http://127.0.0.1:8000/api/${user}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "role": user,
                "username": username,
                "password": password
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to Sign In');
        }

        const data = await response.json();
        setUserdata(data);
        
        dispatch(SignInUser({userId: data.id, username: data.name, user: user, gender: data.gender}));
        navigate(`/${formState.user}`);
    }
    catch (error) {
        console.error('Error:', error);
        setError('Invalid credentials. Please try again.')
    }
    // dispatch(SignInUser(formState));
    // navigate(`/${formState.user}`);
  };

  return (
    <div onSubmit={handleSubmit} className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-bold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4'>
        <select
            className='border p-3 rounded-lg'
            id="user"
            value={formState.user}
            onChange={handleChange}
            name="user"
            required
          >
            <option value="None" disabled>Choose a user</option>
            <option value="Admin">Admin</option>
            <option value="Doctor">Doctor</option>
            <option value="Nurse">Nurse</option>
            <option value="Patient">Patient</option>
        </select>
        <input
          type='text'
          placeholder='Username'
          className='border p-3 rounded-lg'
          id='username'
          name='username'
          value={formState.username}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          placeholder='Password'
          className='border p-3 rounded-lg'
          id='password'
          name='password'
          value={formState.password}
          onChange={handleChange}
          required
        />
        <button type='submit' className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          Sign In
        </button>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to={'/register'}>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
    </div>
  );
}