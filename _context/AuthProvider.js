import React, { createContext } from 'react';
import useApi from '../hooks/useApi';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContext = useApi();

  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
