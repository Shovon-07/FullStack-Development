import React from "react";

const ContextMenu = (props) => {
  const { contextMenu, closeContextMenu } = props;

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
    const updatedMessages = messages.filter(
      (msg) => msg.id !== contextMenu.messageId
    );
    setMessages(updatedMessages);
    closeContextMenu();
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
