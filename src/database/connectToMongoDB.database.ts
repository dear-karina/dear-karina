import mongoose from "mongoose";
const connectToMongoDB = async () => {
  try {
    const DATABASE_URL = process.env.DATABASE_URL;
    if (DATABASE_URL === undefined) {
      console.log("DATABASE_URL not set.");
      return;
    }
    await mongoose.connect(DATABASE_URL);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongoDB;
