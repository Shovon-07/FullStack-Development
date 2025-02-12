import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb connected : ", connect.connection.host);
  } catch (error) {
    console.log("Mongodb connection error : ", error);
  }
};
