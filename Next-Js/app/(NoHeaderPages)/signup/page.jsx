import dynamic from "next/dynamic";

//___ Css ___//
import LoginStyle from "./signup.module.css";

//___ Components ___//
const AuthForm = dynamic(() => import("@/app/Components/Form/AuthForm"), {
  loading: "",
});

export const metadata = {
  title: "Sign up",
  description: "Agro-vet software",
};

const page = () => {
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
    <div className={`d-flex ${LoginStyle.login}`}>
      <AuthForm
        title={"Sign up"}
        inputFields={inputField}
        api={"/signup"}
        loginOrSingupUrl={"/signin"}
        loginOrSingup={"Sign in"}
      />
    </div>
  );
};

export default page;
