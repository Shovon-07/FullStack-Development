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

  //__ Handle input value __//
  const [result, setResult] = useState("");
  // const [calcInput, setCalcInp] = useState({
  //   one: "1",
  //   two: "2",
  //   three: "3",
  //   four: "4",
  //   five: "5",
  //   six: "6",
  //   seveen: "7",
  //   eight: "8",
  //   nine: "9",
  //   zero: "0",
  //   dot: ".",
  //   AC: "AC",
  //   percent: "%",
  //   devide: "/",
  //   multiply: "*",
  //   plus: "+",
  //   minus: "-",
  // });

  // const changeInput = (e) => {
  //   setResult((prev) => (prev = e.target.value));
  // };

  const handleInput = (event) => {
    // setCalcInp({ ...calcInput, [e.target.name]: e.target.value });
    setResult(result.concat(event.target.value));
  };

  const calculate = () => {
    // setResult(eval(result).toString());
    alert("Calculator doesn't work this moment !");
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
        <div className="display">
          <input
            type="number"
            name="result"
            id="result"
            value={result}
            placeholder="0"
            // onChange={changeInput}
            readOnly
          />
        </div>
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
                  <button type="button" value="clear">
                    <FaBackspace />
                  </button>
                </td>
                <td>
                  <input
                    type="button"
                    name="percent"
                    // value={calcInput.percent}
                    value="%"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    name="devide"
                    // value={calcInput.devide}
                    value="/"
                    onClick={handleInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="button"
                    name="seveen"
                    // value={calcInput.seveen}
                    value="7"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    name="eight"
                    // value={calcInput.eight}
                    value="8"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    name="nine"
                    // value={calcInput.nine}
                    value="9"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    name="multiply"
                    // value={calcInput.multiply}
                    value="*"
                    onClick={handleInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="button"
                    name="four"
                    // value={calcInput.four}
                    value="4"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    name="five"
                    // value={calcInput.five}
                    value="5"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    name="six"
                    // value={calcInput.six}
                    value="6"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    name="minus"
                    // value={calcInput.minus}
                    value="-"
                    onClick={handleInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="button"
                    name="one"
                    // value={calcInput.one}
                    value="1"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    name="two"
                    // value={calcInput.two}
                    value="2"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    name="three"
                    // value={calcInput.three}
                    value="3"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    name="plus"
                    // value={calcInput.plus}
                    value="+"
                    onClick={handleInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="button"
                    name="zero"
                    // value={calcInput.zero}
                    value="0"
                    onClick={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    name="dot"
                    // value={calcInput.dot}
                    value="."
                    onClick={handleInput}
                  />
                </td>
                <td colSpan="2" className="equalBtn">
                  <button type="button" value="equal" onClick={calculate}>
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
