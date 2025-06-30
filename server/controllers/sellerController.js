import jwt from "jsonwebtoken";

const sellerLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (
      password === process.env.SELLER_PASSWORD &&
      email === process.env.SELLER_EMAIL
    ) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.cookie("sellerToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // set true in production
        sameSite: process.env.NODE_ENV === "production" ? "none" : "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return res
        .status(200)
        .json({ success: true, message: "Seller Logged In" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
};

const isSellerAuth = async (req, res) => {
  try {
    //console.log("here");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed bro" });
  }
};

const sellerLogout = (req, res) => {
  try {
    res.clearCookie("sellerToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // set true in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "Strict",
    });

    res
      .status(200)
      .json({ success: true, message: "Seller Logged out successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { sellerLogin, isSellerAuth, sellerLogout };
