import mongoose from "mongoose";
import dotenv from "dotenv"

mongoose.set('strictQuery', true);

dotenv.config()

const URL = process.env.MONGO_URI

const Connection = async()=>{
    try {
       await mongoose.connect(URL,{ useNewUrlParser: true })
       console.log(`Connected to Database successfully`);
    } catch (error) {
        console.log('Disconnected',error);
    }
}

export default Connection;
