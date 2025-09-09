const validator = require("validator");
const bcrypt = require("bcrypt");
const cloudinary = require("../config/cloudinary");
const doctorModel = require("../models/doctorModel.js");
const jwt = require("jsonwebtoken");

// for adding doctors
exports.postAddDoctor = (req, res, next) => {
  const {
    name,
    email,
    password,
    speciality,
    degree,
    experience,
    about,
    availablity,
    fees,
    address,
  } = req.body;
  const imageFile = req.file;

  // Checking all doctors data
  if (
    !name ||
    !email ||
    !password ||
    !speciality ||
    !degree ||
    !experience ||
    !about ||
    !availablity ||
    !fees ||
    !address
  ) {
    return res.json({ success: false, message: "Missing details" });
  }

  // validating email and password
  if (!validator.isEmail(email)) {
    return res.json({ success: false, message: "Please enter a valid email" });
  }

  if (password.length < 8) {
    return res.json({
      success: false,
      message: "Please enter a strong password",
    });
  }

  // hashing password
  const salt = bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hash(password, salt);

  // uploading image to cloudinary
  const imageUploaded = cloudinary.uploader.upload(imageFile.path, {
    resource_type: "imageUrl",
  });
  const imageUrl = imageUploaded.secure_url;

  const doctor = new doctorModel({
    name,
    email,
    imageUrl,
    password: hashedPassword,
    speciality,
    degree,
    experience,
    about,
    fees,
    address: JSON.parse(address),
    date: Date.now(),
  });

  doctor
    .save()
    .then(() => {
      res.json({ success: true, message: "Doctor added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ success: false, message: err.message });
    });
};

exports.postLoginAdmin = (req, res, next) => {
  const { email, password } = req.body;
  
  try {
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign(email+password, process.env.JWT_SECRET);
    res.json({ success:true, token});
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
  }
  catch (error) {
    console.log(error);
      res.json({ success: false, message: error.message });
  }
}