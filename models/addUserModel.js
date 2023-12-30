const mongoose = require('mongoose');

// Mongoose Schema
const addUserSchema = new mongoose.Schema(
  {
    memberRule: {
      type: String,
    },
    role: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
    },
    motherName: {
      type: String,
    },
    image: {
      type: String,
    },
    memberId: {
      type: String,
      unique: true,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
    },
    nomineeName: {
      type: String,
    },
    nomineeMobile: {
      type: String,
    },
    address: {
      type: String,
    },
    status: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Mongoose Model
module.exports = mongoose.model('user', addUserSchema);
