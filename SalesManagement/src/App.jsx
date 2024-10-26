import React, { lazy, Suspense, useEffect, useState } from "react";

//___ Css ___//
import "./assets/css/global.css";
import "./assets/css/variables.css";

//___ Components ___//
const Header = lazy(() => import("./Components/Header/Header"));
const Sidenav = lazy(() => import("./Components/Sidenav/Sidenav"));

const App = ({ children }) => {
  const [toggleSideNav, setToggleSideNav] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter != 50) {
      setCounter((prev) => (prev = prev + 1));
    }
  });

  return (
    <div className="main">
      <Suspense fallback={"Loading..."}>
        <Header
          toggleSideNav={toggleSideNav}
          setToggleSideNav={setToggleSideNav}
        />
      </Suspense>
      <Suspense fallback={"Loading..."}>
        <Sidenav
          toggleSideNav={toggleSideNav}
          setToggleSideNav={setToggleSideNav}
        />
      </Suspense>
      <div className="container">
        <h1>Count = {counter} </h1>
        <div
          className={`body-overlay ${toggleSideNav == true ? "active" : ""}`}
          onClick={() => setToggleSideNav((prev) => !prev)}
        ></div>
        <h1>App</h1>
        {children}
      </div>
    </div>
  );
};

export default App;
