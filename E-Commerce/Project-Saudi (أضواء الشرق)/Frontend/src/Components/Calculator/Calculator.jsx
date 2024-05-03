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
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seveen: "7",
    eight: "8",
    nine: "9",
    zero: "0",
    dot: ".",
    AC: "AC",
    percent: "%",
    devide: "/",
    multiply: "*",
    plus: "+",
    minus: "-",
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
            name="display"
            value={calcInput.display}
            onChange={handleInput}
            readOnly
          />
        </div>
        <div className="buttons">
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="submit" value={calcInput.AC} />
                </td>
                <td>
                  <button type="submit" value={"clear"}>
                    <FaBackspace />
                  </button>
                </td>
                <td>
                  <input
                    type="submit"
                    name="percent"
                    value={calcInput.percent}
                  />
                </td>
                <td>
                  <input type="submit" name="devide" value={calcInput.devide} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" name="seveen" value={calcInput.seveen} />
                </td>
                <td>
                  <input type="submit" name="eight" value={calcInput.eight} />
                </td>
                <td>
                  <input type="submit" name="nine" value={calcInput.nine} />
                </td>
                <td>
                  <input
                    type="submit"
                    name="multiply"
                    value={calcInput.multiply}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" name="four" value={calcInput.four} />
                </td>
                <td>
                  <input type="submit" name="five" value={calcInput.five} />
                </td>
                <td>
                  <input type="submit" name="six" value={calcInput.six} />
                </td>
                <td>
                  <input type="submit" name="minus" value={calcInput.minus} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" name="one" value={calcInput.one} />
                </td>
                <td>
                  <input type="submit" name="two" value={calcInput.two} />
                </td>
                <td>
                  <input type="submit" name="three" value={calcInput.three} />
                </td>
                <td>
                  <input type="submit" name="plus" value={calcInput.plus} />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" name="zero" value={calcInput.zero} />
                </td>
                <td>
                  <input type="submit" name="dot" value={calcInput.dot} />
                </td>
                <td colSpan="2" className="equalBtn">
                  <button type="submit" value={"equal"}>
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
