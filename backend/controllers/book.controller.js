import asyncHandler from "express-async-handler";
import Book from "../models/book.model.js";

export const fetchAllBooks = asyncHandler(async (req, res, next) => {
	const books = await Book.find({});

	res.status(200);

	res.json({ books });
});

export const getBookById = asyncHandler(async (req, res, next) => {
	const book = await Book.findById(req.params.id).select("-__v");

	if (book) {
		res.json(book);
	} else {
		throw new Error("Book not found");
	}
});
