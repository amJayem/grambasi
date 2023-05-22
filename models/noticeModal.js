// add-balance
const mongoose = require('mongoose')

// Mongoose Schema
const noticeSchema = new mongoose.Schema(
  {
    notice: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('notice', noticeSchema)
