import React, { Suspense, lazy, useEffect } from "react";

//___ Css ___//
import "./Auth.css";

//___ Components ___//
const Form = lazy(() => import("../../Components/Form/Form"));
import Loader from "../../Components/Loader/Loader";

const ForgotPass = () => {
  const inputField = [
    {
      field: "email",
      type: "email",
      placeholder: "Enter your email",
      className: "inputBox",
    },
  ];

  return (
    <>
      <div className="Auth">
        <Suspense fallback={<Loader />}>
          <Form
            title={"Forgot password"}
            inputFields={inputField}
            url={"/dashboard"}
            loginOrSingupUrl={""}
            loginOrSingup={""}
          />
        </Suspense>
      </div>
    </>
  );
};
export default ForgotPass;
