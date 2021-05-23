import express from "express";
import { fetchAllBooks, getBookById } from "../controllers/book.controller.js";

const router = express.Router();

router.get("/", fetchAllBooks);

router.route("/:id").get(getBookById);

export default router;
