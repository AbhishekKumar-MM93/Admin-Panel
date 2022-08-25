import express from "express";
import upload from "../Config/multer.js";
import {
  createProduct,
  getAllproduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controllers/productsControllers.js";

const productRouter = express.Router();

productRouter.post("/", upload.single("image"), createProduct);
productRouter.get("/", getAllproduct);
productRouter.get("/:id", getProduct);
productRouter.put("/:id",upload.single("image"), updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
