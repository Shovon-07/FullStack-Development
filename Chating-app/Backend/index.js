import express from "express";
import { server, app } from "./src/lib/socket.io.js";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./src/lib/db.js";
import authRoutes from "./src/routes/auth.route.js";
import messageRoutes from "./src/routes/message.route.js";

dotenv.config();
// const app = express();
const PORT = process.env.PORT;

//===> Middlewares
app.use(express.json());
app.use(cors());

//===> Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

server.listen(PORT, () => {
  console.log("Server is connected @ " + PORT);
  connectDb();
});
