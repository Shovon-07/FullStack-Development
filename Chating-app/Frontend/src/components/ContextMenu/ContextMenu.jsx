import React, { useContext } from "react";
import { toast } from "react-toastify";

//===> Css
import "./context-menu.css";

//===> Utilities
import ApiConfig from "../../assets/js/ApiConfig";
import { AuthContext } from "../../context/AuthContext";

const ContextMenu = (props) => {
  const { contextMenu, closeContextMenu, data } = props;
  const { headers } = useContext(AuthContext);

  // Handle Edit option
  const handleEdit = () => {
    const updatedMessages = messages.map((msg) =>
      msg.id === contextMenu.messageId ? { ...msg, editable: true } : msg
    );
    setMessages(updatedMessages);
    closeContextMenu();
  };

  // Handle Delete option
  const handleDelete = () => {
    console.log(data);
    ApiConfig.get(`/message/delete/${data}`, { headers })
      .then((res) => {
        console.log(res);
        closeContextMenu();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
    // const updatedMessages = messages.filter(
    //   (msg) => msg.id !== contextMenu.messageId
    // );
    // setMessages(updatedMessages);
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
