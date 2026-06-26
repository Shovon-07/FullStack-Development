require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const cors = require("cors");
const ApiKeyMiddleware = require("./Middleware/ApiKeyMiddleware");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const WebSecurityModel = require("./Models/WebSecurityModel");

const app = express();
const server = createServer(app);
const PORT = 3001;

//===> Middlewares
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));
app.use(ApiKeyMiddleware);
app.use(express.json());

//===> Connect database
const Mongo_URI = process.env.MONGO_DB_URI;
mongoose
  .connect(Mongo_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

//==> Express API
app.get("/api", (req, res) => {
  res.send("This is backend");
});

//===> Import & use routes if needed
const securityRoute = require("./Routes/security-route");
app.use("/api/security", securityRoute);

const authRoute = require("./Routes/auth-route");
app.use("/api/auth", authRoute);

//===> Socket.io setup
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log(`✅ ${socket.id} connected`);

  //===> Handle client request for security credentials
  socket.on("security-credentials", async (data) => {
    try {
      const dbData = await WebSecurityModel.findOne({
        _id: data.id,
        domain: data.domain,
        token: data.token,
      });

      console.log("Database Data:", dbData);
      if (dbData) {
        io.emit("security-status", [dbData]); // Send initial data
      }
    } catch (error) {
      console.error("❌ Error fetching security credentials:", error);
      io.emit("security-status", {
        error: "Failed to fetch security credentials",
      });
    }
  });

  socket.on("disconnect", () => {
    console.log(`❌ ${socket.id} disconnected`);
  });
});

//===> Watch MongoDB for Changes & Emit Updates
const changeStream = WebSecurityModel.watch();
changeStream.on("change", async (change) => {
  console.log("⚡ MongoDB Change Detected:", change);

  if (change.operationType === "update") {
    const updatedDocument = await WebSecurityModel.findById(
      change.documentKey._id
    );
    if (updatedDocument) {
      io.emit("security-status", [updatedDocument]); // Emit updated data
    }
  }
});

//===> Run server
server.listen(PORT, () => {
  console.log(`🚀 Server is running at: ${PORT}`);
});
