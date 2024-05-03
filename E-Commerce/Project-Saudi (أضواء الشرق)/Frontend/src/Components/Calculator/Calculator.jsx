import React, { useState } from "react";

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
  const [calcInput, setCalcInp] = useState({
    display: "00",
  });

  const handleInput = (e) => {
    setCalcInp({ ...calcInput, [e.target.name]: e.target.value });
  };

  return (
    <div className="Calculator">
      <div className="iconBox d-flex cursor" onClick={handleActive}>
        <IoCalculatorSharp size={25} />
      </div>

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
            type="text"
            value={calcInput.display}
            onChange={handleInput}
            readOnly
          />
        </div>
        <div className="buttons">
          <table>
            <tbody>
              <tr>
                <td>AC</td>
                <td>
                  <FaBackspace />
                </td>
                <td>%</td>
                <td>/</td>
              </tr>
              <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>*</td>
              </tr>
              <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>-</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>+</td>
              </tr>
              <tr>
                <td>0</td>
                <td>.</td>
                <td colSpan="2" className="equalBtn">
                  =
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
