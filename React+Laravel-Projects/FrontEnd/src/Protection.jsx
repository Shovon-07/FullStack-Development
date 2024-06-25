import { Navigate } from "react-router-dom";

const Protection = (props) => {
  const { Child } = props;
  const auth = localStorage.getItem("token");

  return <>{auth ? <Child /> : <Navigate to="/login" />}</>;
};

export default Protection;
