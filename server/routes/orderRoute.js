// routes/orderRoute.js

import express from "express";
import {
  placeOrderCOD,
  getUserOrders,
  getAllOrders,
  placeOrderStripe
} from "../controllers/orderController.js";
import authUser from "../middlewares/authUser.js";

const orderRouter = express.Router();

// Place order with Cash on Delivery
orderRouter.post("/cod", authUser, placeOrderCOD);

orderRouter.post("/stripe", authUser, placeOrderStripe);

// Get orders for a specific user
orderRouter.get("/user", authUser, getUserOrders);

// Get all orders (admin usage)
orderRouter.get("/seller", authUser, getAllOrders);

export default orderRouter;
