import React, { lazy, Suspense, useEffect, useState } from "react";

//___ Css ___//
import "./assets/css/global.css";
import "./assets/css/variables.css";

//___ Components ___//
const Header = lazy(() => import("./Components/Header/Header"));
const Sidenav = lazy(() => import("./Components/Sidenav/Sidenav"));

const App = () => {
  const [toggleSideNav, setToggleSideNav] = useState(false);
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   if (counter != 50) {
  //     setCounter((prev) => (prev = prev + 1));
  //   }
  // });

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
      {/* <h1>Count = {counter} </h1> */}
      <h1>App</h1>
    </div>
  );
};

export default App;
