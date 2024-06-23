import { lazy, Suspense } from "react";
import { Route, Routes, NavLink } from "react-router-dom";

//___ Css ___//
import "./assets/Css/App.css";
import "./assets/Css/ScrollBar.css";

//___ Components ___//
import Loader from "./Components/Loader/Loader";

//___ Pages ___//
import Layout from "./Layout";
import Protection from "./Protection";
const Login = lazy(() => import("./Pages/Auth/Login"));
const SignUp = lazy(() => import("./Pages/Auth/SignUp"));
const ForgotPass = lazy(() => import("./Pages/Auth/ForgotPass"));
const SubmitOtp = lazy(() => import("./Pages/Auth/SubmitOtp"));

const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const Documentation = lazy(() => import("./Pages/Documentation/Documentation"));
const TempRemote = lazy(() => import("./Pages/TemperatureRemote/TempRemote"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage/ErrorPage"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<Loader />}>
              <SignUp />
            </Suspense>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Suspense fallback={<Loader />}>
              <ForgotPass />
            </Suspense>
          }
        />
        <Route
          path="/submit-otp"
          element={
            <Suspense fallback={<Loader />}>
              <SubmitOtp />
            </Suspense>
          }
        />

        <Route path="/" element={<Protection Child={Layout} />}>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/documentaton"
            element={
              <Suspense fallback={<Loader />}>
                <Documentation />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/settings"
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/todo-app"
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/temperature-remote"
            element={
              <Suspense fallback={<Loader />}>
                <TempRemote />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <ErrorPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
