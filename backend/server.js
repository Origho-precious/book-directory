import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/book.route.js";
import { notFound, errorHandler } from "./middlewares/error.middleware.js";

dotenv.config();

connectDB();

const app = express();

app.use("/api/books", bookRoutes);

app.get("/", (req, res, next) => {
	res.send("API running...");
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);
