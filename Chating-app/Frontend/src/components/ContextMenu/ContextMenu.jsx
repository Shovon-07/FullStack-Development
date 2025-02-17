import React, { useContext } from "react";
import { toast } from "react-toastify";

//===> Css
import "./context-menu.css";

//===> Utilities
import ApiConfig from "../../assets/js/ApiConfig";
import { AuthContext } from "../../context/AuthContext";

const ContextMenu = (props) => {
  const { contextMenu, closeContextMenu, data, setReloader } = props;
  const { headers } = useContext(AuthContext);

  //===> Edit option
  const handleEdit = () => {
    toast.error("This feature has not been added yet");
    closeContextMenu();
  };

  //===> Delete option
  const handleDelete = () => {
    console.log(data);
    ApiConfig.get(`/message/delete/${data}`, { headers })
      .then((res) => {
        setReloader((prev) => !prev);
        closeContextMenu();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  // Handle saving edited message
  const handleSave = (id, newText) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === id ? { ...msg, text: newText, editable: false } : msg
    );
    setMessages(updatedMessages);
  };

  return (
    <div
      className={`context-menu ${contextMenu.visible && "visible"}`}
      style={{
        position: "absolute",
        top: contextMenu.y,
        left: contextMenu.x,
      }}
    >
      <div className="context-menu-item" onClick={handleEdit}>
        Edit
      </div>
      <div className="context-menu-item" onClick={handleDelete}>
        Delete
      </div>
    </div>
  );
};

export default ContextMenu;
