import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import {
  getUserForSidebar,
  getMessage,
  sendMessage,
  deletedMessage,
} from "../controllers/message.controller.js";

const router = express.Router();
router.get("/users", protectedRoute, getUserForSidebar);
router.get("/:id", protectedRoute, getMessage);
router.post("/send/:id", protectedRoute, sendMessage);
router.get("/delete/:msgId", protectedRoute, deletedMessage);

export default router;
