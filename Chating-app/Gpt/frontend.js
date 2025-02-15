// client/src/App.js (React.js frontend)
import { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/messages")
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));

    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  const sendMessage = () => {
    if (message.trim() && username.trim()) {
      const msgData = { sender: username, message };
      socket.emit("sendMessage", msgData);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-center mb-2">Chat App</h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 border rounded mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="h-64 overflow-y-auto border p-2 mb-2 bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className="mb-1">
              <strong>{msg.sender}: </strong>
              {msg.message}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-l"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
