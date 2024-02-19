import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUser } from '../context/UserProvider';

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useUser();
  const isAuthenticated = !!user;
  
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/sign_in" />
  );
};

export default PrivateRoute;
