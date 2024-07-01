//___ Css ___//
import "./ToDo_App.css";

//___ Images ___//
import Tick from "../../assets/Images/Icons/tick.png";
import Not_Tick from "../../assets/Images/Icons/not_tick.png";
import Delete from "../../assets/Images/Icons/delete.png";

const ToDo_Items = (props) => {
  const { id, text, isComplete, deleteTodo, toggleTodo } = props;

  return (
    <div className="ToDo_Items d-flex gap-10">
      <div
        onClick={() => toggleTodo(id)}
        className="toDoOnlyOneItems d-flex gap-10"
      >
        <img src={isComplete ? Tick : Not_Tick} alt="" className="c_pointer" />
        <p className={`c_pointer ${isComplete ? "line-throw" : ""}`}>{text}</p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        src={Delete}
        alt=""
        className="deleteIcon c_pointer"
      />
    </div>
  );
};

export default ToDo_Items;
