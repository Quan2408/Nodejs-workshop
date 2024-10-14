import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Web503");
    console.log("Connected!");
  } catch (error) {
    console.log(error);
  }
};
