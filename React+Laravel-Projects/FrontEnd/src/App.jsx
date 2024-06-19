import { lazy, Suspense } from "react";
import { Route, Routes, NavLink } from "react-router-dom";

//___ Css ___//
import "./assets/Css/App.css";
import "./assets/Css/ScrollBar.css";

//___ Components ___//
import Loader from "./Components/Loader/Loader";
const SideNav = lazy(() => import("./Components/SideNav/SideNav"));

//___ Pages ___//
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
const TempRemote = lazy(() => import("./Pages/TemperatureRemote/TempRemote"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<Loader />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/tempRemote"
          element={
            <Suspense fallback={<Loader />}>
              <TempRemote />
            </Suspense>
          }
        />
      </Routes>
      {/* <Suspense fallback={<Loader />}>
        <SideNav />
      </Suspense> */}
    </>
  );
}

export default App;
