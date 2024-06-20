import React, { Suspense, lazy, useEffect } from "react";

//___ Css ___//
import "./Auth.css";

//___ Components ___//
const Form = lazy(() => import("../../Components/Form/Form"));
import Loader from "../../Components/Loader/Loader";

const SubmitOtp = () => {
  const inputField = [
    {
      field: "email",
      type: "number",
      placeholder: "Enter 6 digit otp",
      className: "inputBox",
    },
  ];

  return (
    <>
      <div className="Auth">
        <Suspense fallback={<Loader />}>
          <Form
            title={"OTP"}
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
export default SubmitOtp;
