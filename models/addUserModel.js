const mongoose = require('mongoose')

// Mongoose Schema
const addUserSchema = new mongoose.Schema(
  {
    memberRole: {
      id: {
        type: Number
        // required: true,
      },
      role: {
        type: String
        // required: true,
      }
    },
    role: {
      id: {
        type: Number,
        required: true
      },
      role: {
        type: String,
        required: true
      }
    },
    name: {
      type: String,
      required: true
    },
    fatherName: {
      type: String
    },
    motherName: {
      type: String
    },
    image: {
      type: String
    },
    memberId: {
      type: Number,
      unique: true,
      required: true
    },
    mobile: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date
    },
    nomineeName: {
      type: String
    },
    nomineeMobile: {
      type: String
    },
    address: {
      type: String
    },
    releaseStatus: {
      type: Boolean
    },
    gender: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

// Mongoose Model
module.exports = mongoose.model('user', addUserSchema)
