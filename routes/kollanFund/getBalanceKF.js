const express = require('express')
// const balanceModel = require('../../models/balanceModel')
const monthlyBalance = require('../../models/monthlyBalanceModel.js')
const kollanFundModel = require('../../models/kollanFundModel')
const router = express.Router()

const getBalanceKF = router.get('/total-balanceKF', async (req, res) => {
  try {
    const result = await kollanFundModel.find().sort({ createdAt: -1 })
    res.status(200).send({ success: true, result })
  } catch (error) {
    res.status(500).send({ success: false, message: error.message })
  }
})
// const getMonthlyBalance = router.get('/monthly-balance', async (req, res) => {
//   try {
//     const result = await monthlyBalance.find().sort({ createdAt: -1 })
//     res.status(200).send({ success: true, result })
//   } catch (error) {
//     res.status(500).send({ success: false, message: error.message })
//   }
// })

module.exports = getBalanceKF
// module.exports = getMonthlyBalance
