// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiEndPoints } from '@/utils/config/apiEndPoints';
import { getRequest } from '@/utils/apiCaller';
import { getFromLocalStorage, removeFromLocalStorage } from '@/utils/helper';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null); // State to hold user information

  useEffect(() => {
    const userToken = getFromLocalStorage('gk');
    if (userToken) {
      setToken(userToken);
      fetchUserProfile(userToken); // Fetch user profile when token is set
    }
  }, []);

  const fetchUserProfile = async (token) => {
    const response = await getRequest(apiEndPoints.profile, true); // Pass true to include the Authorization header
    if (response && response.data) {
      setUser(response.data); // Set user information
    } else {
      console.error('Failed to fetch user profile', response);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null); // Clear user information on logout
    removeFromLocalStorage('gk');
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
