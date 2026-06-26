require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const IotModel = require("./Models/IotModel");

const app = express();
const server = createServer(app);
const PORT = 3001;

//===> Middlewares
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));
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
const IotRoute = require("./Routes/iot-route");
app.use("/api/iot-data", IotRoute);

//===> Run server
server.listen(PORT, () => {
  console.log(`🚀 Server is running at: ${PORT}`);
});
