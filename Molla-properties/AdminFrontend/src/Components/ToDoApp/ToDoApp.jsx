import React, { useEffect, useRef, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import ToDo_Items from "./ToDo_Items";

//___ Icons ___//
import { IoCalculatorSharp } from "react-icons/io5";
import { LuExpand } from "react-icons/lu";
import { FaMinus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

//___ Images ___//
import ToDo_Icon from "../../assets/Images/Icons/todo_icon.png";

//___ Css ___//
import "./ToDoApp.css";

const ToDoApp = () => {
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

  const inputRef = useRef();
  const [toDoList, setToDoList] = useState(
    localStorage.getItem("ToDos")
      ? JSON.parse(localStorage.getItem("ToDos"))
      : []
  );

  const Add = () => {
    const inputTxt = inputRef.current.value.trim();
    if (inputTxt === "") {
      return null;
    }
    const newToDo = {
      id: Date.now(),
      text: inputTxt,
      isComplete: false,
    };
    setToDoList((prev) => [...prev, newToDo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setToDoList((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const toggleTodo = (id) => {
    setToDoList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("ToDos", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <div className="ToDoApp">
      <Tooltip title="ToDo App">
        <div className="iconBox d-flex c_pointer" onClick={handleActive}>
          <IoCalculatorSharp size={25} />
        </div>
      </Tooltip>

      <div
        className={(() => {
          if (activeCalculator == 1) {
            return "active toDoAppBox";
          } else if (activeCalculator == 2) {
            return "fullWidth toDoAppBox";
          } else if (activeCalculator == 3) {
            return "active toDoAppBox";
          } else {
            return "toDoAppBox";
          }
        })()}
      >
        <div className="closeIcon d-flex">
          <LuExpand
            size={15}
            className="icon c_pointer"
            onClick={handleMaximize}
          />
          <FaMinus
            size={15}
            className="icon c_pointer"
            onClick={handleMinimize}
          />
          <RxCross1
            size={15}
            className="icon c_pointer"
            onClick={handleClose}
          />
        </div>

        <div className="todoBox">
          <div className="addTaskBox">
            <div className="d-flex gap-10">
              <div>
                <img src={ToDo_Icon} alt="" className="todoIcon" />
              </div>
              <div>
                <h3 className="toDoTitle">To-Do List</h3>
              </div>
            </div>
            <div className="addTask d-flex">
              <input type="text" ref={inputRef} placeholder="Add your task" />
              <button onClick={Add}>Add</button>
            </div>
          </div>
          <div>
            {toDoList.map((items, index) => {
              return (
                <ToDo_Items
                  key={index}
                  id={items.id}
                  text={items.text}
                  isComplete={items.isComplete}
                  deleteTodo={deleteTodo}
                  toggleTodo={toggleTodo}
                />
              );
            })}
            {/* <ToDo_Items text="Java" />
          <ToDo_Items text="Php" /> */}
          </div>
        </div>

        {/* <div className="display">{result}</div>
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
        </div> */}
      </div>
    </div>
  );
};

export default ToDoApp;
