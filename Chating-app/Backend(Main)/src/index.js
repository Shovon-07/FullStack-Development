import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

//===> Middlewares
app.use(express.json());

//===> Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log("Server is connected @ " + PORT);
  connectDb();
});
