import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let auth = localStorage.getItem("LoginValue");
    if (!auth) {
      navigate("/");
    }
  });

  // return auth ? <Outlet /> : <Navigate to="/" />;
  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
