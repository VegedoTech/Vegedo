import Order from "../models/Order.js";
import Product from "../models/Product.js";

export const placeOrderCOD = async (req, res) => {
  try {
    const { userId, items, address } = req.body;

    if (!address || items.length === 0) {
      return res.json({ success: false, message: "Invalid data" });
    }

    // Calculate amount from items
    let amount = await items.reduce(async (acc, item) => {
      const product = await Product.findById(item.product);
      return (await acc) + product.offerPrice * item.quantity;
    }, Promise.resolve(0));

    // Add tax (2%)
    amount += Math.floor(amount * 0.02);

    // Create Order
    const newOrder = new Order({
      userId,
      items,
      amount,
      address,
      paymentType: "COD",
      isPaid: false,
    });

    await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully with COD",
      order: newOrder,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


// Get Orders by User ID : /api/order/user


export const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await Order.find({
      userId,
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product")
      .populate("address")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Failed to get user orders",
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
   

    const orders = await Order.find({
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product")
      .populate("address")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Failed to get user orders",
    });
  }
};

