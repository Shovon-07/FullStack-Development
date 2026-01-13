import React from "react";
import "./assets/Css/App.css";

import LearnUseReducer from "./Components/LearnUseReducer";
import LearnUseCallback from "./Components/LearnUseCallback";

const App = () => {
  return (
    <div>
      <h1 className="text-center bg-gray-800 py-2 text-white text-3xl">App</h1>
      <div className="px-5">
        <LearnUseReducer /> <hr />
        <LearnUseCallback />
      </div>
    </div>
  );
};

export default App;
