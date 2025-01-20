import { lazy, Suspense, useEffect, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

//___ Css ___//
import "./Login.css";

//___ Components ___//
import Loader from "../../components/Loader/Loader";
const AuthForm = lazy(() => import("../../components/Form/AuthForm"));
// import ApiConfig from "../../assets/js/ApiConfig";

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

  // useEffect(() => {
  //   async function name() {
  //     await ApiConfig.get("/auth")
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  //   name();
  // }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Agrovet software" />
      </Helmet>

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
    </HelmetProvider>
  );
};

export default Login;

// Email : shovon@mail.com
// pass : 12345678
