import { lazy, Suspense, useState } from "react";

//===> Css
import "./Login.css";

//===> Components
import Loader from "../../components/Loader/Loader";
const AuthForm = lazy(() => import("../../components/Form/AuthForm"));

const Login = (props) => {
  const { setIsAuthenticated, setUserRole } = props;
  const [loader, setLoader] = useState(false);

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
    <>
      {loader && <Loader />}
      <div className="d-flex loginContainer animated fadeInDown">
        <div className="d-flex login">
          <Suspense fallback={<Loader />}>
            <AuthForm
              title={"Sign in"}
              inputFields={inputField}
              api={"/auth/login"}
              loginOrSingupUrl={"/signup"}
              loginOrSingup={"Sign up"}
              // For authentication
              setIsAuthenticated={setIsAuthenticated}
              setUserRole={setUserRole}
              setLoader={setLoader}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Login;
