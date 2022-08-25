import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./connectdb.js";
import userRoutes from "./Routes/userRoutes.js";
import cors from "cors";
import productRouter from "./Routes/productRoutes.js";
import categoryRouter from "./Routes/categoryRoute.js";
import subCateRoute from "./Routes/subCategoryRoutes.js";

const app = express();
dotenv.config();
//app.use = (express.json());
app.use(cors());
app.use(express.json());

ConnectDB();

// <------------------------Routes------------------------------>

app.use("/user", userRoutes);
app.use("/products", productRouter);
app.use("/category", categoryRouter);
app.use("/subCategory", subCateRoute);

// <------------------------------------------------------>

app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT} `);
});
