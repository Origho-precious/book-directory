import express from "express";
import { fetchAllBooks } from "../controllers/book.controller.js";

const router = express.Router();

router.get("/", fetchAllBooks);

export default router;
