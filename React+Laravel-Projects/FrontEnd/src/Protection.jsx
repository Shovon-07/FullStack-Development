import { Navigate } from "react-router-dom";
// import AuthUser from "./assets/Js/AuthUser";
// import { useEffect, useState } from "react";

const Protection = (props) => {
  const { Child } = props;
  // const { http } = AuthUser();
  // const [auth, setAuth] = useState();

  // const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   http.post("/get-token", { id: userId }).then((res) => {
  //     setAuth(res.data.dbToken);
  //   });
  // });

  return <>{token ? <Child /> : <Navigate to="/login" />}</>;
};

export default Protection;
