import jwt from "jsonwebtoken";

const authSeller = (req, res, next) => {
  const { sellerToken } = req.cookies;

  if (!sellerToken) {
    return res.status(404).json({ status: false, message: "Not Authorized" });
  }
  try {
    const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET);

    if (tokenDecode.email === process.env.SELLER_EMAIL) {
      next();
      // console.log(tokenDecode);
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized" });
    }
  } catch (error) {
    return res.status(404).json({ success: false, message: "failed" });
  }
};

export default authSeller;
