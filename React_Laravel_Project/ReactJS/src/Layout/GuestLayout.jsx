import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const GuestLayout = () => {
  const token = true;

  if (token != false) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default GuestLayout;
