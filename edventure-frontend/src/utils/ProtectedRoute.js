// File: src/utils/ProtectedRoute.js

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// This is a placeholder function to check if the user is an admin.
// Replace it with your actual authentication and admin check logic.
const useAuth = () => {
  const user = { isAdmin: true }; // Placeholder, set this based on your auth logic
  return user && user.isAdmin;
};

const ProtectedRoute = ({ children }) => {
  const isAdmin = useAuth();

  if (!isAdmin) {
    // If the user is not an admin, redirect to the login page.
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
