import React, { useState } from "react";

const Calculator = () => {
  // Use state to track the input and result
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Handler for button clicks
  const handleButtonClick = (value) => {
    if (value === "C") {
      // Clear the input and result
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        // Evaluate the input expression
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch (e) {
        setResult("Error");
      }
    } else {
      // Append the value to the input
      setInput(input + value);
    }
  };

  // Render the calculator
  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("/")}>/</button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>

        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("-")}>-</button>

        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick("+")}>+</button>

        <button onClick={() => handleButtonClick("C")}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
