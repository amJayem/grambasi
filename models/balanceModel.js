// add-balance
const mongoose = require('mongoose')

// Mongoose Schema
const balanceSchema = new mongoose.Schema(
  {
    memberName: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    id: String
  },
  { timestamps: true }
)

module.exports = mongoose.model('balance', balanceSchema)
