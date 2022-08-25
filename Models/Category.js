import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({

    category: {type:String, require: true}
})

export default new  mongoose.model("Categories", CategorySchema)