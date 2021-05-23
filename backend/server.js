import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import bookRoutes from "./routes/book.route.js";

dotenv.config();

const app = express();

app.get("/", (req, res, next) => {
	res.send("API running...");
});

app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);
