import express from "express";
import { getUserForSidebar } from "../controllers/message.controller.js";
import { protectedRoute } from "../middleware/auth.middleware.js";

const router = express.Router();
router.get("/users", protectedRoute, getUserForSidebar);

export default router;
