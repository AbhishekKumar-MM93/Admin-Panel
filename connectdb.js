import mongoose from "mongoose";

async function ConnectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connect");
    } catch (error) {
        console.log(error.message)
    }
}

export default ConnectDB;