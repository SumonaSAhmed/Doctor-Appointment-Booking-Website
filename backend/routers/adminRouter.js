const express = require("express");
const adminRouter = express.Router();

const adminController = require("../controllers/adminController");
const upload = require("../middlewares/multer");
const { authAdmin } = require("../middlewares/authAdmin");

adminRouter.post("/add-doctor", authAdmin, upload.single('image'), adminController.postAddDoctor);
adminRouter.post("/login", adminController.postLoginAdmin);
adminRouter.get("/doctors-list", authAdmin, adminController.getAllDoctors);

module.exports = adminRouter;