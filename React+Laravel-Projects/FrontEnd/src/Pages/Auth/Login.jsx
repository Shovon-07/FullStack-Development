import React, { Suspense, lazy, useEffect, useState } from "react";

//___ Css ___//
import "./Auth.css";

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
      <div className="Auth">
        <Suspense fallback={<Loader />}>
          <Form
            title={"Sign in"}
            inputFields={inputField}
            api={"/sign-in"}
            loginOrSingupUrl={"/signup"}
            loginOrSingup={"Sign up"}
          />
        </Suspense>
      </div>
    </>
  );
};
export default Login;
