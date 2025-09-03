const express = require("express");
const adminRouter = express.Router();

const adminController = require("../controllers/adminController");
const upload = require("../middlewares/multer");
const { authAdmin } = require("../middlewares/authAdmin");

adminRouter.post("/add-doctor", authAdmin, upload.single('imageUrl') ,adminController.postAddDoctor);
adminRouter.post("/login", adminController.postLoginAdmin);

module.exports = adminRouter;