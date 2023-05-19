// add-balance
const mongoose = require('mongoose')

// Mongoose Schema
const debitSchema = new mongoose.Schema(
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

module.exports = mongoose.model('debit', debitSchema)
