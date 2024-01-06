const express = require('express')
const balanceModel = require('../../models/balanceModel')
const monthlyBalanceModel = require('../../models/monthlyBalanceModel.js')
const router = express.Router()

const getBalance = router.get('/total-balance', async (req, res) => {
  try {
    const result = await balanceModel.find().sort({ createdAt: -1 })
    const monthlyBalance = await monthlyBalanceModel
      .find()
      .sort({ createdAt: -1 })
    res.status(200).send({ success: true, result, monthlyBalance })
  } catch (error) {
    res.status(500).send({ success: false, message: error.message })
  }
})

const getMonthlyBalance = router.get('/monthly-balance', async (req, res) => {
  try {
    const month = req.query.month
    const year = req.query.year
    console.log(`${month}-${year}`)
    // Assuming you have a 'date' field in your schema to represent the month and year
    const result = await monthlyBalanceModel.find({
      // Assuming 'date' is a field in your schema representing the month and year
      month: `${month}-${year}`
    })
    res.status(200).send({ success: true, result })
  } catch (error) {
    res.status(500).send({ success: false, message: error.message })
  }
})

module.exports = getBalance
module.exports = getMonthlyBalance
