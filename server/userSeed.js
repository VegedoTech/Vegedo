import User from "./models/user.js";
import bcrypt from "bcrypt";
import connectToDatabase from "./configs/db.js";

const userRegister = async () => {
  await connectToDatabase();
  try {
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
  }
};

userRegister();
