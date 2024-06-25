import { Navigate } from "react-router-dom";

const Protection = (props) => {
  const { Child } = props;
  const auth = sessionStorage.getItem("token");

  return <>{auth ? <Child /> : <Navigate to="/login" />}</>;
};

export default Protection;
