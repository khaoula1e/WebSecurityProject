import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Component />
        ) : (
          <Navigate to="/login" replace={true} state={{ from: rest.location }} />
        )
      }
    />
  );
}

export default ProtectedRoute;
