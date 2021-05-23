import express from "express";
import { authenticateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", authenticateUser);

export default router;
