import mongoose from "mongoose";

let isConnected = false; // Track the connection status

// Function to connect to the MongoDB database
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  // If already connected, return
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  // Or Connect to the MongoDB database
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
