import React, { useReducer } from "react";

const LearnUseReducer = () => {
  const initialstate = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      default:
        return state;
    }
  };
  const [current, dispatch] = useReducer(reducer, initialstate);
  return (
    <div className="py-5">
      <h1>LearnUseReducer</h1>
      <div className="flex gap-5 mt-2">
        <button
          onClick={() => dispatch("Increment")}
          className="bg-green-300 hover:bg-green-400 px-3 py-1 rounded"
        >
          Increment
        </button>{" "}
        <h1 className="bg-blue-950 w-20 text-white flex items-center justify-center rounded-3xl">
          {current}
        </h1>
        <button
          onClick={() => dispatch("Decrement")}
          className="bg-red-300 hover:bg-red-400 px-3 py-1 rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default LearnUseReducer;
