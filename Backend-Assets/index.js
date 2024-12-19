import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoute from './routes/userRoute.js'
import connectToMongoDB from './database/connetMongoDB.js'
import cookieParser from 'cookie-parser'
dotenv.config();


const app=express();
app.use(cors());
// const __dirname=path.resolve();
const PORT=process.env.PORT || 5001;
app.use(express.urlencoded({extended:true}));//to parse form data
app.use(cookieParser());

app.use("/api/auth",authRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectToMongoDB();
})
