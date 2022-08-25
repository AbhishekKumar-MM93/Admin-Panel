import mongoose from "mongoose";

const User = new mongoose.Schema({
  image: { type: String },
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

export default new mongoose.model("AdminPanel", User);
