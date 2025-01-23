import { useEffect, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { io } from "socket.io-client";

//___ Css ___//
import "./ChatBox.css";

const Home = () => {
  const socket = io("http://localhost:3001");
  const [msg, setMsg] = useState("");
  const [userMsg, setUserMsg] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id, " connected");

      socket.on("msg", (msg) => {
        setMsg(msg);
        // console.log(msg, " from server");
      });
    });

    socket.on("disconnect", () => {
      console.log(socket.id, " disconnected");
    });
  }, []);

  const Submit = (e) => {
    e.preventDefault();
    socket.emit("user_msg", userMsg);
    setUserMsg("");
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Agrovet software" />
      </Helmet>

      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}

      <div className="animated fadeInDown">
        {/* <h1 className="page-title">Dashboard</h1> */}

        <h1>{msg}</h1>

        <div className="chatBox">
          <div className="display"></div>
          <div className="controlPanel">
            <form className="sendMsg" onChange={Submit}>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Type some messages"
                  onChange={(e) => {
                    setUserMsg(e.target.value);
                  }}
                  value={userMsg}
                />
              </div>
              <div>
                <button className="button" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
