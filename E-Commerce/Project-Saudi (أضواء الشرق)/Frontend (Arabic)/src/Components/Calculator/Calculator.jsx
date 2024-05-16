import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

//___ Icons ___//
import { IoCalculatorSharp } from "react-icons/io5";
import { LuExpand } from "react-icons/lu";
import { FaMinus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FaBackspace } from "react-icons/fa";

//___ Css ___//
import "./Calculator.css";

const Calculator = () => {
  //__ Open & close calculator __//
  const [activeCalculator, setActivCalculator] = useState(0);

  const handleActive = () => {
    setActivCalculator((prev) => (prev = 1));
  };

  const handleMaximize = () => {
    setActivCalculator((prev) => (prev = 2));
  };

  const handleMinimize = () => {
    setActivCalculator((prev) => (prev = 3));
  };

  const handleClose = () => {
    setActivCalculator((prev) => (prev = 0));
  };

  const [result, setResult] = useState("");

  const handleInput = (event) => {
    // setCalcInp({ ...calcInput, [e.target.name]: e.target.value });
    setResult(result.concat(event.target.value));
  };

  const calculate = () => {
    try {
      // Evaluate the input expression
      const evalResult = eval(result);
      setResult(evalResult.toString());
    } catch (e) {
      setResult("Error");
    }
  };

  return (
    <div className="Calculator">
      <Tooltip title="Calculator">
        <div className="iconBox d-flex cursor" onClick={handleActive}>
          <IoCalculatorSharp size={25} />
        </div>
      </Tooltip>

      <div
        className={(() => {
          if (activeCalculator == 1) {
            return "active calculatorBox";
          } else if (activeCalculator == 2) {
            return "fullWidth calculatorBox";
          } else if (activeCalculator == 3) {
            return "active calculatorBox";
          } else {
            return "calculatorBox";
          }
        })()}
      >
        <div className="closeIcon">
          <LuExpand
            size={15}
            className="icon cursor"
            onClick={handleMaximize}
          />
          <FaMinus size={15} className="icon cursor" onClick={handleMinimize} />
          <RxCross1 size={15} className="icon cursor" onClick={handleClose} />
        </div>
        <div className="display">{result}</div>
        <div className="buttons">
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="button"
                    // value={calcInput.AC}
                    value="AC"
                    onClick={() => {
                      setResult("");
                    }}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    value="clear"
                    onClick={() => {
                      setResult(result.slice(0, -1));
                    }}
                  >
                    <FaBackspace />
                  </button>
                </td>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="percent"
                    value="%"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="devide"
                    value="/"
                    onClick={handleInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="seveen"
                    value="7"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="eight"
                    value="8"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="nine"
                    value="9"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="multiply"
                    value="*"
                    onClick={handleInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="four"
                    value="4"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="five"
                    value="5"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="six"
                    value="6"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="minus"
                    value="-"
                    onClick={handleInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="one"
                    value="1"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="two"
                    value="2"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="three"
                    value="3"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="plus"
                    value="+"
                    onClick={handleInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="zero"
                    value="0"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    className={result.length >= 12 ? "disbled" : ""}
                    type="button"
                    name="dot"
                    value="."
                    onClick={handleInput}
                  />
                </td>
                <td colSpan="2" className="equalBtn" onClick={calculate}>
                  <button type="button" value="equal">
                    =
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
