import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UseAuthContext } from "../Context/AuthContext";

const GuestLayout = () => {
  const { token, SetToken, setUser } = UseAuthContext();

  if (token) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <Outlet />{" "}
    </>
  );
};

export default GuestLayout;
