import Mongoose from "mongoose";

const { Schema } = Mongoose;

const bookSchema = Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		title: { type: String, required: true },
		author: { type: String, required: true },
		yearPublished: {
			type: Number,
			required: true,
		},
		genre: { type: String, required: true },
		summary: { type: String, required: true },
		summarizedBy: { type: String, required: true },
	},
	{ timestamps: true }
);

export default Mongoose.model("Book", bookSchema);
