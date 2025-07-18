import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors';
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js"
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { stripeWebhooks } from "./controllers/orderController.js";


const app = express();
const port = process.env.PORT || 4000;
const allowedOrigins = ["http://localhost:5173"];

app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

await connectDB()

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : allowedOrigins,
    credentials: true
}));


app.use("/api/user" , userRouter)
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address" , addressRouter);
app.use("/api/order", orderRouter);



app.get('/', (req, res) => {
    res.send(`API is working`)
})

app.listen(port , (req,res) => {
    console.log(`server is running on port ${port}`);
    
})