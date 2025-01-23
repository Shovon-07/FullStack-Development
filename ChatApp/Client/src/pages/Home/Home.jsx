import { useEffect, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { io } from "socket.io-client";

const Home = () => {
  const socket = io("http://localhost:3001");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id, " connected");
    });

    socket.on("disconnect", () => {
      console.log(socket.id, " disconnected");
    });
  }, []);

  const Send = () => {
    console.log(msg);
    socket.emit("user_msg", msg);
    setMsg("");
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
        <h1 className="page-title">Dashboard</h1>

        <input
          type="text"
          placeholder="Type hear"
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          value={msg}
        />
        <button onClick={Send}>Send</button>
      </div>
    </HelmetProvider>
  );
};

export default Home;
