import bcrypt from "bcryptjs";

const users = [
	{
		name: "Origho Precious",
		email: "origho9@gmail.com",
		password: bcrypt.hashSync("12345678", 10),
	},
];

export default users;
