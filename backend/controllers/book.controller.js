import asyncHandler from "express-async-handler";

export const fetchAllBooks = asyncHandler(async (req, res, next) => {
	console.log(req.path);
});
