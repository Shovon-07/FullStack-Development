import React, { useState } from "react";

function ChatApp() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", editable: false },
    { id: 2, text: "How are you?", editable: false },
  ]);
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    messageId: null,
  });

  // Handle right-click event
  const handleRightClick = (event, messageId) => {
    event.preventDefault(); // Prevent default context menu
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      messageId: messageId,
    });
  };

  // Close the context menu
  const closeContextMenu = () => {
    setContextMenu({ ...contextMenu, visible: false });
  };

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
    <div onClick={closeContextMenu} style={{ padding: "20px" }}>
      <h1>Chat App</h1>
      {messages.map((message) => (
        <div
          key={message.id}
          onContextMenu={(e) => handleRightClick(e, message.id)}
          style={{
            margin: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            cursor: "context-menu",
          }}
        >
          {message.editable ? (
            <input
              type="text"
              value={message.text}
              onChange={(e) =>
                setMessages(
                  messages.map((msg) =>
                    msg.id === message.id
                      ? { ...msg, text: e.target.value }
                      : msg
                  )
                )
              }
              onBlur={() => handleSave(message.id, message.text)}
              autoFocus
            />
          ) : (
            <span>{message.text}</span>
          )}
        </div>
      ))}

      {/* Context Menu */}
      {contextMenu.visible && (
        <div
          style={{
            position: "absolute",
            top: contextMenu.y,
            left: contextMenu.x,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <div
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={handleEdit}
          >
            Edit
          </div>
          <div
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={handleDelete}
          >
            Delete
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatApp;
