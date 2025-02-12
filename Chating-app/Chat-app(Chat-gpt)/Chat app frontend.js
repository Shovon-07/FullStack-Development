// frontend/src/main.jsx (React + Vite + Tailwind CSS)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './pages/Login';
import Chat from './pages/Chat';

const App = () => {
  return (
    <Router>
      <div className="h-screen flex flex-col bg-gray-100">
        <header className="bg-blue-600 text-white p-4 text-center text-lg font-semibold">
          Chat App
        </header>
        <main className="flex-1 overflow-auto flex">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// frontend/src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/chat");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 mb-2 border rounded" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-2 border rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

// frontend/src/pages/Chat.jsx
import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "Alice", text: "Hello!" },
    { sender: "Bob", text: "Hi there!" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "You", text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/4 bg-gray-800 text-white p-4">Sidebar (Users/Groups)</div>
      <div className="w-3/4 flex flex-col">
        <div className="bg-blue-600 text-white p-4">Chat Header</div>
        <div className="flex-1 overflow-auto p-4 bg-gray-100">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 my-2 ${msg.sender === "You" ? "bg-blue-500 text-white self-end" : "bg-gray-300 text-black"} rounded-lg max-w-xs`}>{msg.sender}: {msg.text}</div>
          ))}
        </div>
        <div className="p-4 flex bg-white border-t">
          <input type="text" className="flex-1 p-2 border rounded" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." />
          <button className="ml-2 bg-blue-600 text-white p-2 rounded" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;

