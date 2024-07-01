import { useEffect, useRef, useState } from "react";
import ToDo_Items from "./ToDo_Items";

//___ Css ___//
import "./ToDo_App.css";

//___ Images ___//
import ToDo_Icon from "../../assets/Images/Icons/todo_icon.png";

const ToDo_App = () => {
  const inputRef = useRef();
  const [toDoList, setToDoList] = useState([]);

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
    console.log(toDoList);
  }, [toDoList]);

  return (
    <div className="ToDo_App  d-flex">
      <h3 className="pageTitle">ToDo App</h3>
      <div className="todoBox">
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
    </div>
  );
};

export default ToDo_App;
