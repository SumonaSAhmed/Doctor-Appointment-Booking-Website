const validator = require("validator");
const bcrypt = require("bcrypt");
const cloudinary = require("../config/cloudinary");
const doctorModel = require("../models/doctorModel.js");
const jwt = require("jsonwebtoken");

// for adding doctors
exports.postAddDoctor = async (req, res, next) => {
  const {
    name,
    email,
    password,
    speciality,
    degree,
    experience,
    about,
    availability,
    fees,
    address1,
    address2,
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
    !availability ||
    !fees ||
    !address1 ||
    !address2
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
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // uploading image to cloudinary
  let imageUrl = "";
  const imageUploaded = await cloudinary.uploader.upload(imageFile.path, {
    resource_type: "image",
  });
  imageUrl = imageUploaded.secure_url;

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
    address: `${address1}, ${address2}`,
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