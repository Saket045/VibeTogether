import mongoose from 'mongoose'

const connectDB=async(req,res)=>{
try{
    const conn=await mongoose.connect("mongodb://localhost:27017/CommunityBase")
    console.log(`MongoDB connected ${conn.connection.host}`)
}
catch(error){
     console.log(`Error ${error.message}`)
}
}
export default connectDB;
