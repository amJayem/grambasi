const mongoose = require('mongoose')

const lastInsertedAmount = new mongoose.Schema(
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

module.exports = mongoose.model('lastInsertedAmount', lastInsertedAmount)
