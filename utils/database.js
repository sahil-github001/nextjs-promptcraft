import mongoose from "mongoose";

let isConnected = false; // to track the connection status 

export const connectToDb = async () => {
    mongoose.set("strictQuery", true);
    if(isConnected) {
        console.log(`MongoDb is already connected`);
        return;
    }
    try {
        mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewURlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log(`MongoDb connected`);
    } catch (error) {
        console.log(error)  
    }
}