import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/connectDB.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config(); // Load environment variables

connectDB(); // Connect to the database

const app = express();
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, this is a simple message from the server!");
});

app.use("/api/auth",userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
