const express = require('express')
const balanceModel = require('../../models/balanceModel')
const monthlySummaryModel = require('../../models/monthlyBalanceModel')
const router = express.Router()

const addBalance = router.post('/add-balance', async (req, res) => {
  try {
    const data = req.body
    // Calculate the month and year from the current date
    const currentDate = new Date()
    const month = currentDate.toLocaleString('en-US', { month: 'short' })
    const year = currentDate.getFullYear()
    // Save the balanceModel entry
    const result = await balanceModel(data).save()
    // Find or create the MonthlySummary entry for the current month and year
    const monthlySummary = await monthlySummaryModel.findOneAndUpdate(
      {
        memberId: data.memberId,
        month: `${month}-${year}`
      },
      {
        $inc: { amount: data?.amount },
        $set: { memberName: data?.memberName } // Set memberName in monthlySummary
      },
      { upsert: true, new: true }
    )

    // If there's no existing data for the given month and year, create a new entry
    if (!monthlySummary) {
      const newMonthlySummary = new monthlySummaryModel({
        memberName: data.memberName,
        memberId: data.memberId,
        month: `${month}-${year}`,
        amount: data.amount,
        total: data.amount // Set total initially as amount
      })
      await newMonthlySummary.save()
    } else {
      // Update the total amount in monthlySummary
      monthlySummary.total += data.amount
      await monthlySummary.save()
    }

    // Calculate the total amount across all entries
    const totalAmount = await balanceModel.aggregate([
      {
        $match: { memberId: data.memberId }
      },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ])

    // Update the total amount in monthlySummary
    if (totalAmount.length > 0) {
      monthlySummary.total = totalAmount[0]?.total || 0
      await monthlySummary.save()
    }

    res.status(200).send({
      success: true,
      result,
      monthlySummary
    })
  } catch (error) {
    console.error(error)
    res.status(500).send({ success: false, message: error.message })
  }
})

module.exports = addBalance
