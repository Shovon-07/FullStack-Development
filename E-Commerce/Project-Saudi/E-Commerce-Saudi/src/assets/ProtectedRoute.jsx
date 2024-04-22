import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  const { getToken } = AuthUser();

  useEffect(() => {
    let auth = localStorage.getItem("token");
    if (!auth) {
      navigate("/");
    }
  });

  // return !getToken ? "" : <Navigate to="/" />;
  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
