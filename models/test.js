// add-balance
const mongoose = require('mongoose')

// Mongoose Schema
const testSchema = new mongoose.Schema(
  {
    memberName: {
      type: String,
      required: true
    },
    memberId: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('test', testSchema)
