import cloudinary from "cloudinary";
import dot from "dotenv";
dot.config();
const uploader = cloudinary.v2;

uploader.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export default uploader;
