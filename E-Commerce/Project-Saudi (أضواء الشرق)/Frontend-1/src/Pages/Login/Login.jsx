import React, { Suspense, lazy, useEffect } from "react";

//___ Css ___//
import "./Login.css";

//___ Components ___//
const Form = lazy(() => import("../../Components/Form/Form"));
import Loader from "../../Components/Loader/Loader";

const Login = () => {
  const inputField = [
    {
      field: "email",
      type: "email",
      placeholder: "Enter your email",
      className: "inputBox",
    },
    {
      field: "password",
      type: "password",
      placeholder: "Enter your password",
      className: "inputBox d-flex",
    },
  ];

  return (
    <>
      <div className="Login">
        <Suspense fallback={<Loader />}>
          <Form
            title={"Sign in"}
            inputFields={inputField}
            url={"/dashboard"}
            loginOrSingupUrl={"/signup"}
            loginOrSingup={"Sign up"}
          />
        </Suspense>
      </div>
    </>
  );
};
export default Login;
