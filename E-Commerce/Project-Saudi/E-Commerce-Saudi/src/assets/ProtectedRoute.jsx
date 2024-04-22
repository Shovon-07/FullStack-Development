import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = localStorage.getItem("LoginValue");
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
