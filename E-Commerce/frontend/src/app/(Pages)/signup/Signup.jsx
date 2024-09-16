import React from "react";

//___ CSS ___//
import "./Signup.scss";

//___ Components ___//
import Header from "../../Components/Header/Header";
import Form from "../../Components/Form/Form";
import Footer from "../../Components/Footer/Footer";

const Signup = () => {
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
      field: "signUpPassword",
      type: "password",
      placeholder: "Enter a unique password",
      className: "inputBox",
    },
    {
      field: "confirmSignUpPassword",
      type: "password",
      placeholder: "Retype password",
      className: "inputBox",
    },
  ];

  return (
    <>
      <Header />
      <div className="Singup">
        <Form
          mainTitle="Create your Company Account"
          mainRightTitle={`Already member?`}
          title="Sign up"
          url="/signup"
          inputFields={inputField}
          loginOrSingupUrl="/login"
          loginOrSingup="Login"
        />
      </div>
      <Footer />
    </>
  );
};

export default Signup;
