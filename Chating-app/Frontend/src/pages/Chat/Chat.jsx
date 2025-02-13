import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  //   const [reloader, setReloader] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoader(true);
      await ApiConfig.get(`/message/${id}`, { headers })
        .then((res) => {
          setData(res.data.data);
          console.log(res.data);
          setLoader(false);
        })
        .catch((err) => {
          setLoader(false);
          toast.error(err.response.data.message);
        });
    };
    getUsers();
  }, []);

  return (
    <div className="Chat">
      <ChatHead />
      <ChatBox data={data} />
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
