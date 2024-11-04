import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiEndPoints } from '@/utils/config/apiEndPoints';
import { getRequest } from '@/utils/apiCaller';
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from '@/utils/helper';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = getFromLocalStorage('gk');
    if (userToken) {
      setToken(userToken);
      fetchUserProfile(userToken);
    }
  }, []);

  const fetchUserProfile = async (token) => {
    const response = await getRequest(apiEndPoints.profile, token);
    if (response && response.data) {
      setUser(response.data);
    } else {
      console.error('Failed to fetch user profile', response);
    }
  };

  const login = (userToken) => {
    setToken(userToken);
    setToLocalStorage('gk', userToken);
    fetchUserProfile(userToken);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    removeFromLocalStorage('gk');
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
