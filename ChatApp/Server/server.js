require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const PORT = 3001;
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);

//==> Middleware start
// Cors handle
// const corsOptions = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200,
// };
app.use(cors());

app.use(express.json());
//==> Middleware end

//==> Socket code start
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log(`${socket.id} has connected !`);

  // Handle user messages
  socket.on("user_msg", (msg) => {
    console.log(msg);
    io.emit("msg", msg);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} has disconnected !`);
  });
});
//==> Socket code end

//==> Express api's
app.get("/api", (req, res) => {
  res.send("This is backend");
});

const authRoute = require("./Routes/auth-route");
const { Socket } = require("dgram");
app.use("/api/auth", authRoute);

//==> Run server
server.listen(PORT, () => {
  console.log(`Server is connected @ : ${PORT}`);
});
