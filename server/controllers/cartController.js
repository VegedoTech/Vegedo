import User from "../models/user.js";


export const updateCart = async (req, res) => {
  try {
    const { userId, cartItems } = req.body;
   // console.log(cartItems);
    
    await User.findByIdAndUpdate(userId, { cartItems });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
