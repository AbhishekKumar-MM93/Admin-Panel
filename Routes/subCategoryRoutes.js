import express from "express";

import {
  createSubcategory,
  deleteSubcategory,
  getAllSubcategory,
  getSubcategory,
  updateSubcategory,
} from "../controllers/subCategoryControllers.js";

const subCateRoute = express.Router();

subCateRoute.post("/", createSubcategory);
subCateRoute.get("/", getAllSubcategory);
subCateRoute.get("/:id",getSubcategory);
subCateRoute.put("/:id", updateSubcategory);
subCateRoute.delete("/:id", deleteSubcategory);

export default subCateRoute;
