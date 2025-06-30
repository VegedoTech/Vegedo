import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  
  const { token } = req.cookies;

  if (!token) {
      
    return res.status(401).json({ success: false, message: "Not Authorized" });
  }

  
  try {
    
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
 
    if (tokenDecode?.id) {
                          
      
      if (!req.body) req.body = {};
      req.body.userId = tokenDecode.id;
      //console.log("in AU");
      
      // console.log(tokenDecode);
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized" });
    }
    
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "failed" });
  }
};

export default authUser;
