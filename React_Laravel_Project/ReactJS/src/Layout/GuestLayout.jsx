import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UseAuthContext } from "../Context/AuthContext";

const GuestLayout = () => {
  const { token } = UseAuthContext();

  if (token) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default GuestLayout;
