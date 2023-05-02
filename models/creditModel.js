// add-balance
const mongoose = require('mongoose')

// Mongoose Schema
const creditSchema = new mongoose.Schema(
  {
    creditNote: {
      type: String,
      required: true
    },
    credit: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('credit', creditSchema)
