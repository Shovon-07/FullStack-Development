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
  const { headers } = useContext(AuthContext);
  const [msgText, setMsgText] = useState("");
  const [data, setData] = useState([]);
  const [selectUdata, setSelectUdata] = useState({});

  useEffect(() => {
    const getData = async () => {
      setLoader(true);
      await ApiConfig.get(`/message/${id}`, { headers })
        .then((res) => {
          setData(res.data.data);
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
      console.log(`✅ Connected: ${socket.id}`);

      socket.on("newMessage", (msg) => {
        // setData([...data, msg]);
        setData((prev) => [...prev, msg]);
      });
    });

    // socket.disconnect();
  }, [id]);

  return (
    <div className="Chat">
      <ChatHead selectUdata={selectUdata} />
      <ChatBox data={data} selectUdata={selectUdata} />
      <ChatFoot
        id={id}
        data={data}
        setData={setData}
        msgText={msgText}
        setMsgText={setMsgText}
        setLoader={setLoader}
      />
    </div>
  );
};

export default Chat;
