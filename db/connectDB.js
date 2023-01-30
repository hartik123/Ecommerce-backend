import mongoose from "mongoose";

mongoose.set('strictQuery', true);
const connectDB = (DATABASE_URL, OPTIONS) => {
    return mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Connected successfully")
    })
    .catch((err)=>{
        console.log(err)
    })

}

export default connectDB