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
		throw new Error("invalid password");
	}
});

export const registerUser = asyncHandler(async (req, res, next) => {});
