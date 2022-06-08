import React, { createContext } from 'react';
import { Navigate } from 'react-router-dom';

const RequiredAuth = ({ children, redirectTo }) => {
  const authCtx = createContext({ user: 'Not Logged' });
  return authCtx.isLoggedin ? children : <Navigate to={redirectTo} />;
};

export default RequiredAuth;
