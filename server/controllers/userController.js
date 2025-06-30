import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        return res.json({success: false , message: "Missing Details"})
    }
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate JWT Token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" } // token valid for 7 days
    );

    // Send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // set true in production
      sameSite: process.env.NODE_ENV === "production" ? 'none' :"Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Send response
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Register error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user){
      //console.log("inlogin");
      return res.status(400).json({success: false,  message: 'Invalid email or password' });
    }
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // set true in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Send response
    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ success:false ,message: 'Internal server error much' });
  }
};


 const isAuth = async (req, res) => {
  try {
    const { userId }= req.body;
   //console.log(userId);
   
    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: No user ID" });
    }

    const user = await User.findById(userId).select("-password"); // exclude password

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    console.log("finally authenticated");
    
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed bro"});
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // set true in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "Strict",
    });

    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



export {register , login , isAuth , logout}
