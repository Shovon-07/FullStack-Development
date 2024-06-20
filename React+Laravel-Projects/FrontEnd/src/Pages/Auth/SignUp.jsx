import React, { Suspense, lazy, useEffect } from "react";

//___ Css ___//
import "./Auth.css";

//___ Components ___//
const Form = lazy(() => import("../../Components/Form/Form"));
import Loader from "../../Components/Loader/Loader";

const SignUp = () => {
  const inputField = [
    {
      field: "name",
      type: "text",
      placeholder: "Enter your name",
      className: "inputBox",
    },
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
    {
      field: "confirmPassword",
      type: "password",
      placeholder: "Please confirm password",
      className: "inputBox d-flex",
    },
  ];

  return (
    <>
      <div className="Auth">
        <Suspense fallback={<Loader />}>
          <Form
            title={"Sign up"}
            inputFields={inputField}
            url={"/dashboard"}
            loginOrSingupUrl={"/"}
            loginOrSingup={"Sign in"}
          />
        </Suspense>
      </div>
    </>
  );
};
export default SignUp;
