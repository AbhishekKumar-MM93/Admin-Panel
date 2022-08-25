import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategory,
  gteAllcategory,
  updateCategory,
} from "../controllers/categoryControllers.js";

const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/", gteAllcategory);
categoryRouter.get("/:id", getCategory);
categoryRouter.put("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;
