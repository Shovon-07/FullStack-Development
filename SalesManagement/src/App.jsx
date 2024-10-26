import React, { lazy, Suspense } from "react";

//___ Css ___//
import "./assets/css/global.css";
import "./assets/css/variables.css";

//___ Components ___//
const Header = lazy(() => import("./Components/Header/Header"));

const App = () => {
  return (
    <div className="main">
      <Suspense fallback={"Loading..."}>
        <Header />
      </Suspense>
      <h1>app</h1>
    </div>
  );
};

export default App;
