"use client";
import React, { Fragment, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { apiEndPoints } from '../../utils/config/apiEndPoints';
import { postRequest } from '@/utils/apiCaller';
 // Adjust the import path according to your project structure

const SignUpForm = () => {
  const router = useRouter();
  
  // Use refs for form fields
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const profilePicRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('username', usernameRef.current.value);
    formDataToSend.append('email', emailRef.current.value);
    formDataToSend.append('password', passwordRef.current.value);
    if (profilePicRef.current.files[0]) {
      formDataToSend.append('profilePic', profilePicRef.current.files[0]);
    }

    try {
      const response = await postRequest(apiEndPoints.signUp, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });
    
      // Handle success, e.g., redirect to login or show a success message
      router.push('/login');
    } catch (error) {
      console.error('Sign Up error:', error.response);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <Fragment>
      <form className='my-5'
        onSubmit={handleSubmit} 
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '400px',
          margin: '20px auto',
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
            ref={usernameRef}
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
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
          <label htmlFor="profilePic">Profile Picture:</label>
          <input
            type="file"
            id="profilePic"
            ref={profilePicRef}
            accept="image/*"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
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
          Sign Up
        </button>
        <h1 className='text-center my-2'>OR</h1>
        <button
          type="button"
          onClick={() => { router.push('/login') }}
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
          Log In
        </button>
      </form>
    </Fragment>
  );
};

export default SignUpForm;
