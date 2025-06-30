import express from "express";
import {
  addProduct,
  productList,
  productById,
  changeStock,
} from "../controllers/productController.js";

import { upload } from "../configs/cloudinary.js"; // adjust path as needed
import sellerAuth from "../middlewares/authSeller.js"; // optional for protecting seller routes

const productRouter = express.Router();

// POST /api/products/add - Add product with image upload (protected route)
productRouter.post("/add", sellerAuth, upload.array("images"), addProduct);

// GET /api/products/list - Get all products
productRouter.get("/all", productList);

// GET /api/products/:id - Get product by ID
productRouter.get("/:id", productById);

// PUT /api/products/stock/:id - Update stock status
productRouter.post("/stock", sellerAuth, changeStock);

export default productRouter;
