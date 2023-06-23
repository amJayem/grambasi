const mongoose = require("mongoose");

// Mongoose Schema
const addUserSchema = new mongoose.Schema(
  {
    memberRule: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    memberId: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    nomineeName: {
      type: String,
      required: true,
    },
    nomineeMobile: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      // enum: ['expense', 'credit']
    },
  },
  { timestamps: true }
);

// Mongoose Model
module.exports = mongoose.model("user", addUserSchema);
