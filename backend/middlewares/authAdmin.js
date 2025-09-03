const jwt = require("jsonwebtoken");

// ADMIN AUTHENTICATION MIDDLEWARE
exports.authAdmin = (req, res, next) => {
  try {
    const { atoken } = req.headders;
    if (!atoken) {
      return res.json({ success: false, message: "Not authorized login" });
    }
    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not authorized login" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, massage: error.message });
  }
};
