import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

//===> Css
import "./Chat.css";

//===> Components
import ChatHead from "./ChatHead";
import ChatBox from "./ChatBox";
import ChatFoot from "./ChatFoot";

//===> Utilities
import { AuthContext } from "../../context/AuthContext";
import ApiConfig from "../../assets/js/ApiConfig";

const Chat = (props) => {
  const { setLoader } = props;
  const { id } = useParams();
  const { headers, uid } = useContext(AuthContext);
  const [msgText, setMsgText] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectUdata, setSelectUdata] = useState({});

  useEffect(() => {
    const getData = async () => {
      setLoader(true);
      await ApiConfig.get(`/message/${id}`, { headers })
        .then((res) => {
          setMessages(res.data.data);
          setSelectUdata(res.data.userToChatData);
          setLoader(false);
        })
        .catch((err) => {
          setLoader(false);
          toast.error(err.response.data.message);
        });
    };
    getData();
  }, [id]);

  //===> Socket.io
  const socketBaseUrl = import.meta.env.VITE_APP_CHAT_SOCKET_URL;
  const socket = io(socketBaseUrl);

  useEffect(() => {
    socket.on("connect", () => {
      // console.log(`✅ Connected: ${socket.id}`);

      socket.on("newMessage", (msg) => {
        setMessages((prev) => [...prev, msg]);
      });
    });

    // socket.disconnect();
  }, [id, selectUdata]);

  return (
    <div className="Chat">
      <ChatHead selectUdata={selectUdata} />
      <ChatBox messages={messages} selectUdata={selectUdata} />
      <ChatFoot
        id={id}
        messages={messages}
        setMessages={setMessages}
        msgText={msgText}
        setMsgText={setMsgText}
        setLoader={setLoader}
      />
    </div>
  );
};

export default Chat;
