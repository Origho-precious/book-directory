import express from "express";
import {
	authenticateUser,
	registerUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", authenticateUser);

export default router;
