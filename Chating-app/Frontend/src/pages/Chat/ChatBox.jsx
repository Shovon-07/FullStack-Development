import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import demoImg from "../../assets/images/profile.png";

//===> Css
import "../../assets/css/context-menu.css";

//===> Components
import ContextMenu from "../../components/ContextMenu/ContextMenu";
import { formatMessageTime } from "../../assets/js/DateFormater";

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
              <div className="chat-header">
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

      {/* Context Menu with Animation */}
      <ContextMenu
        contextMenu={contextMenu}
        closeContextMenu={closeContextMenu}
      />
      {/* <div
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
      </div> */}
    </div>
  );
};

export default ChatBox;
