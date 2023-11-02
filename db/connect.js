import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connection successful");
    return true;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    return false;
  }
};

export default connect;
