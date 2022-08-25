import mongoose from "mongoose";

const subCategeory = new mongoose.Schema({
  categoryFK: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
  subCategory: { type: String, require: true },
}); 

export default new mongoose.model("SubCategories", subCategeory);
