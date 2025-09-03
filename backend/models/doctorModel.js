const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    imageUrl: { type: String, require: true },
    speciality: { type: String, require: true },
    degree: { type: String, require: true },
    experience: { type: String, require: true },
    about: { type: String, require: true },
    availablity: { type: Boolean, default: true },
    fees: { type: Number, require: true },
    address: { type: String, require: true },
    date: { type: Number, require: true },
    slot_booked: { type: Object, default: {} },
  },
  { minimize: false }
);

const doctorModel =
  mongoose.models.doctor || mongoose.model("doctor", doctorSchema);

module.exports = doctorModel;
