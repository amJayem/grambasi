// monthly-summary-model.js
const mongoose = require('mongoose')

const monthlySummarySchema = new mongoose.Schema(
  {
    memberId: {
      type: Number,
      required: true
    },
    month: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('MonthlySummary', monthlySummarySchema)
