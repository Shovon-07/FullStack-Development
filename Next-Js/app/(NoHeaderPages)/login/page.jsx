import dynamic from "next/dynamic";

//___ Css ___//
import LoginStyle from "./login.module.css";

//___ Components ___//
const AuthForm = dynamic(() => import("@/app/Components/Form/AuthForm"), {
  loading: "",
});

export const metadata = {
  title: "Sign in",
  description: "Agro-vet software",
};

const page = () => {
  const inputField = [
    {
      field: "email",
      type: "email",
      placeholder: "Enter your email",
      className: "inputBox",
      autoCompleteAttr: "on",
    },
    {
      field: "password",
      type: "password",
      placeholder: "Enter your password",
      className: "inputBox d-flex",
      autoCompleteAttr: "off",
    },
  ];

  return (
    <div className={`d-flex ${LoginStyle.login}`}>
      <AuthForm
        title={"Sign in"}
        inputFields={inputField}
        api={"/login"}
        loginOrSingupUrl={"/signup"}
        loginOrSingup={"Sign up"}
      />
    </div>
  );
};

export default page;

// Email : shovon@mail.com
// pass : 12345678
