import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    const isAuthRoute = location.pathname.includes('/login') || location.pathname.includes('/signup');
    if (!isAuthRoute) return <Navigate to="/auth/login" replace />;
  }

  // Authenticated user trying to access login or signup
  if (
    isAuthenticated &&
    (location.pathname.includes('/login') || location.pathname.includes('/signup'))
  ) {
    return user?.role === 'admin' ? (
      <Navigate to="/admin/dashboard" replace />
    ) : (
      <Navigate to="/shopping/home" replace />
    );
  }

  // Unauthorized access to admin route by non-admin
  if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('/admin')) {
    return <Navigate to="/unauth-page" replace />;
  }

  // Admin trying to access shopping routes
  if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('/shopping')) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  // Render children for valid paths
  return <>{children}</>;
}

export default CheckAuth;
