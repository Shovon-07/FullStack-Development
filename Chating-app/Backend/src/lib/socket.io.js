import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:5000",
      "https://shovonchat.netlify.app",
    ],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`✅  ${socket.id} has connected`);

  socket.on("disconnect", () => {
    console.log(`${socket.id} has disconnected`);
  });
});

export { io, server, app };
