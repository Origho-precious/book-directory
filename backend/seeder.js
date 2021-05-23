// import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import books from "./data/books.js";
import User from "./models/user.model.js";
import Book from "./models/book.model.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const addData = async () => {
	try {
		await User.deleteMany();
		await User.deleteMany();

    const createdUsers = await User.insertMany(users);

		const summarizer = createdUsers[0]._id;
		const sampleBooks = books.map((book) => {
			return { ...book, summarizedBy: summarizer };
    });

		await Book.insertMany(sampleBooks);

		console.log(`Data Imported`.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`Error: ${error.message}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
    await User.deleteMany();
		await Book.deleteMany();

		console.log(`Data Destroyed`.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`Error: ${error.message}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	destroyData();
} else {
	addData();
}
