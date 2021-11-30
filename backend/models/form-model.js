const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailOrPhone: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    dayOfBirth: { type: Number, required: true },
    monthOfBirth: { type: String, required: true },
    yearOfBirth: { type: Number, required: true },
  },
  { timestamps: true }
);

const formData = mongoose.model("formData", formSchema);

module.exports = formData;
