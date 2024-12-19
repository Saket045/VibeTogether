import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import sanitizeUserResponse  from "../utils/sanitizeResponse.js";
import errorHandler from "../utils/error.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
};



const signup = asyncHandler(async (req, res) => {
    const { username, fullname, email, password, country, phonenumber, role } = req.body;

    let user = await User.findOne({ email });
    if (user) {
        res.status(400);
        throw new Error('User already exists');
    }

    user = new User({
        fullname,
        email,
        password,
        country,
        phonenumber,
        role,
        username,
    });

    // Save the user
    await user.save();

    const token = user.generateAuthToken();

    res.cookie('token', token, cookieOptions);
    res.status(200).json(sanitizeUserResponse(user));
});

async function signin(req, res, next) {
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email }).populate({
        path: "userProfile"
      });
      if (!user) {
        return next(errorHandler(404, "User not found"));
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return next(errorHandler(401, "Invalid credentials"));
      }
  
      const token = user.generateAuthToken();
      
      res.cookie('token', token, cookieOptions);
  
      res.status(200).json( sanitizeUserResponse(user) );
    } catch (err) {
      next(err);
    }
  }

export { signup ,signin };
















