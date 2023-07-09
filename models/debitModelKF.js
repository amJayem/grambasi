// add-balance
const mongoose = require('mongoose')

// Mongoose Schema
const debitKFSchema = new mongoose.Schema(
  {
    debitNote: {
      type: String,
      required: true
    },
    debit: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('debitKF', debitKFSchema)
