import dotenv from 'dotenv'
import mongoose from "mongoose";

dotenv.config()

const URI = process.env.MONGO_URI.replace("<password>", process.env.MONGO_PASS);

export const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    });
    console.log('DATABASE CONNECTED')
  } catch (err) {
    console.log(err);
  }
};
