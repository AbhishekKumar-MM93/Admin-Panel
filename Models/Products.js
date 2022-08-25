import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, reuired: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  Brand: { type: String, required: true },
  subCategoryFK: {type:mongoose.Schema.Types.ObjectId, ref:"SubCategories"}
});

export default new mongoose.model("Product", ProductSchema);
