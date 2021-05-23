import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const authenticateUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && user.matchPassword(password)) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else if (!user) {
		res.status(401);
		throw new Error("Invaild email address");
	} else if (!user.matchPassword(password)) {
		res.status(401);
		throw new Error("Incorrect password");
	}
});

export const registerUser = asyncHandler(async (req, res, next) => {
	const { name, email, password } = req.body;

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error(`User with ${email} already exists`);
	}

	if (!userExists && password && name) {
		const newUser = await User.create({ name, email, password });

		res.status(201).json({
			_id: newUser._id,
			name: newUser.name,
			email: newUser.email,
			token: generateToken(newUser._id),
		});
	} else if (!email && !password && !name) {
		res.status(422);
		throw new Error("Invalid user details - cannot process null request body");
	} else if (!name || !email || !password) {
		res.status(400);
		throw new Error("Unprocessible Entity - Some required fields not found!");
	}
});

export const getUserDetails = asyncHandler(async (req, res) => {
	const { id } = req.user;

	const user = await User.findById({ _id: id }).select(["-password", "-__v"]);

	if (user) {
		res.json({ user });
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});
