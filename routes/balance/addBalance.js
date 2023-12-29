const express = require('express')
const balanceModel = require('../../models/balanceModel')
const lastInsertedAmount = require('../../models/lastInsertedAmountModel')
const MonthlySummaryModel = require('../../models/monthlyBalanceModel')
const router = express.Router()

const addBalance = router.post('/add-balance', async (req, res) => {
  try {
    const data = req.body
    const resultMonthly = await lastInsertedAmount.findOneAndUpdate(
      { memberId: data.memberId },
      data,
      {
        upsert: true,
        new: true
      }
    )
    let result
    if (resultMonthly.memberId) {
      result = await balanceModel(data).save()
    }

    // Calculate the month and year from the current date
    const currentDate = new Date()
    const month = currentDate.toLocaleString('en-US', { month: 'short' })
    const year = currentDate.getFullYear()

    // Find or create the MonthlySummary entry for the current month and year
    const monthlySummary = await MonthlySummaryModel.findOneAndUpdate(
      {
        memberId: data.memberId,
        month: `${month}-${year}`
      },
      {
        $inc: { amount: data.amount }
      },
      { upsert: true, new: true }
    )
    // console.log(monthlySummary)
    res
      .status(200)
      .send({ success: true, result, resultMonthly, monthlySummary })
  } catch (error) {
    console.error(error)
    res.status(500).send({ success: false, message: error.message })
  }
})

module.exports = addBalance
