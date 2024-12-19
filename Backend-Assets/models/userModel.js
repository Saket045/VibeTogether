import mongoose from "mongoose"

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
        maxlength: [20, "Password must be at most 20 characters,got {value}"],
    },
    phonenumber: {
        type: String,
        required: true,
        // match: [/^\+?[0-9]{10,15}$/, "Please provide a valid phone number"],
    },
    profilePicture: {
        type: String,
        default: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    }
});

const User = mongoose.model("User", userSchema);
export default User;

