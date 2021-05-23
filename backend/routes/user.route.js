import express from "express";
import {
	authenticateUser,
	registerUser,
	getUserDetails,
} from "../controllers/user.controller.js";
import { protect } from "../middlewares/protect.middleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", authenticateUser);
router.route("/profile").get(protect, getUserDetails);

export default router;
