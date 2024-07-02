import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let auth = sessionStorage.getItem("token");
    if (!auth) {
      navigate("/");
    }
  });

  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
