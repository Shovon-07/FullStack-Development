import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, roles, userRole, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!roles.includes(userRole)) {
    return <Navigate to="/not-found" />;
  }

  return children;
};

export default PrivateRoute;
