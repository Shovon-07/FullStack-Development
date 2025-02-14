import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { formatMessageTime } from "../../assets/js/DateFormater";
import demoImg from "../../assets/images/profile.png";

const ChatBox = (props) => {
  const { data, selectUdata } = props;
  const { uid, uImg } = useContext(AuthContext);
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (messageEndRef.current && data) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);

  //===> Handel context menu & edit & delete
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    messageId: null,
  });

  const handleRightClick = (e, messageId) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
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
    <div className="chatBox" onClick={closeContextMenu}>
      <div className="starting flex items-center justify-center flex-col mt-5 mb-10">
        <img src={selectUdata.profilePic || demoImg} alt="" />
        <p className="text-sm">Start chat with</p>
        <h1 className="text-xl">{selectUdata.fullname}</h1>
      </div>
      {Array.isArray(data) &&
        data.map((item) => {
          return (
            <div
              className={`chat ${
                item.senderId == uid ? "chat-end" : "chat-start"
              }`}
              key={item._id}
              ref={messageEndRef}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src={
                      item.senderId != uid
                        ? selectUdata.profilePic || demoImg
                        : uImg || demoImg
                    }
                  />
                </div>
              </div>
              <div className="chat-header ">
                {item.fullname}
                <time className="text-xs opacity-50 ml-2">
                  {formatMessageTime(item.createdAt)}
                </time>
              </div>
              <div
                className={`chat-bubble ${
                  item.senderId == uid ? "bg-[#3c3c55]" : ""
                }`}
                style={{ maxWidth: "230px" }}
                onContextMenu={(e) => handleRightClick(e, item._id)}
              >
                {item.text}
              </div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
          );
        })}

      {/* Context Menu */}
      {contextMenu.visible && (
        <div
          style={{
            position: "absolute",
            top: contextMenu.y,
            left: contextMenu.x,
            backgroundColor: "var(--dark-blue)",
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
};

export default ChatBox;
