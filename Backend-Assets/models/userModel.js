import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: [5, "Full name must be at least 5 characters"],
        maxlength: 50,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters,got {value}"],
        maxlength: [20, "Password must be at most 12 characters,got {value}"],
    },
    phonenumber: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    }
});

userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword;
        }
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.generateAuthToken = function () {
    const payload = { id: this._id, username: this.username};
    const token = jwt.sign(payload, "abc123", { expiresIn: "1800s" });
    return token;
};


const User = mongoose.model("User", userSchema);
export default User;

