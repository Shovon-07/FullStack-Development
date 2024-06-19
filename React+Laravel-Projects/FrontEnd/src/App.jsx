import { lazy, Suspense } from "react";

//___ Css ___//
import "./assets/Css/App.css";
import "./assets/Css/ScrollBar.css";

//___ Components ___//
import Loader from "./Components/Loader/Loader";
const SideNav = lazy(() => import("./Components/SideNav/SideNav"));

//___ Pages ___//
const TempRemote = lazy(() => import("./Pages/TemperatureRemote/TempRemote"));
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      {/* <Login /> */}
      <Suspense fallback={<Loader />}>
        <SideNav />
        <TempRemote />
      </Suspense>
    </>
  );
}

export default App;
