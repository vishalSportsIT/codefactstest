"use client"
import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiEndPoints } from '@/utils/config/apiEndPoints';
import { postRequest } from '@/utils/apiCaller';
import { useAuth } from '@/context/AuthContext';

const LoginForm = () => {
  const router = useRouter();
  const { login } = useAuth(); // Use login from context
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postRequest(apiEndPoints.login, formData);
      if (response.status === 200) {
        login(response.data.accessToken); // Call login from AuthContext
        router.push('/home');
      } else {
        console.error('Login failed', response.data);
      }
    } catch (error) {
      console.error('An error occurred during login', error);
    }
  };

  return (
    <Fragment>
      <form 
        onSubmit={handleSubmit} 
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '400px',
          margin: 'auto',
          marginTop: '20px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
        }}
      >
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Log In
        </button>
        <h1 className='text-center my-2'>OR</h1>
        <button
          type="button"
          onClick={() => { router.push('/signUp') }}
          style={{
            marginTop: '15px',
            padding: '10px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
        >
          Sign Up
        </button>
      </form>
    </Fragment>
  );
};

export default LoginForm;
