"use client";
import React, { useReducer } from "react";

const UseReducer = () => {
  const initialState = { count: 0, status: false };
  const reducer = (stateVal, action) => {
    switch (action.type) {
      case "inc":
        return { ...stateVal, count: stateVal.count++ };
      case "dec":
        return {
          ...stateVal,
          count: stateVal.count != 0 ? stateVal.count-- : 0,
        };
      case "moodSwing":
        return { ...stateVal, status: !stateVal.status };
      default:
        return stateVal.count;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="flex items-center gap-5">
        <button
          onClick={() => {
            dispatch({ type: "inc" });
          }}
        >
          +
        </button>
        <span className="text-[30px]">{state.count}</span>
        <button onClick={() => dispatch({ type: "dec" })}>-</button>
      </div>
      <hr
        style={{
          background: "#fff",
          height: "1px",
          width: "50%",
          margin: "20px 0",
        }}
      />
      <div className="flex items-center flex-col gap-5">
        <h1 className="text-[30px]">
          Mood status : {state.status ? "Good 😊" : "Bad 😞"}
        </h1>
        <button onClick={() => dispatch({ type: "moodSwing" })}>
          Mood swing
        </button>
      </div>
    </>
  );
};

export default UseReducer;
