const { mongoose } = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    availability: { type: String, required: true },
    fees: { type: Number, required: true },
    address1: { type: String, required: true },
    address2: { type: String },
    date: { type: Number, required: true },
    slot_booked: { type: Object, default: {} },
  },
  { minimize: false }
);

const doctorModel =
  mongoose.models.doctor || mongoose.model("Doctor", doctorSchema);

module.exports = doctorModel;