import express from "express";
import { addAddress, getAddress } from "../controllers/addressController.js";
import authUser from "../middlewares/authUser.js";

const addressRouter = express.Router();

// Add Address
addressRouter.post("/add", authUser, addAddress);

// Get Addresses for a User
addressRouter.post("/get", authUser, getAddress);

export default addressRouter;
