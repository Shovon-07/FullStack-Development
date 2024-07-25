import { useState } from "react";

//___ Iconst ___//
import { MdEditDocument } from "react-icons/md";

//___ Css ___//
import "./FixedComponents.css";

//___ Components ___//
// const ToDoApp = lazy(() => );
import ToDoApp from "../../Pages/ToDo-App/ToDo_App";

const FixedToDo = () => {
  const [openTodo, setOpenToDo] = useState(false);

  return (
    <div className="FixedComponents" style={{ bottom: "50px" }}>
      <MdEditDocument
        size={20}
        style={{ background: "var(--green)" }}
        className="icon"
        onClick={() => {
          setOpenToDo((prev) => !prev);
        }}
      />
      {openTodo == true ? <ToDoApp /> : ""}
    </div>
  );
};

export default FixedToDo;
