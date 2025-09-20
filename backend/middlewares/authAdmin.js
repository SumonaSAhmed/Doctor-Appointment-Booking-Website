const jwt = require("jsonwebtoken");

// ADMIN AUTHENTICATION MIDDLEWARE
exports.authAdmin = (req, res, next) => {
  try {
    //const { atoken } = req.headers;
    const atoken = req.headers.atoken || req.headers.aToken || req.headers["x-auth-token"];

    if (!atoken) {
      return res.status(401).json({ success: false, message: "Not authorized login" });
    }
    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

    if (!token_decode.email || token_decode.email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({ success: false, message: "Not authorized login" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, massage: error.message });
  }
};
