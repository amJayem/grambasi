const express = require('express')
const balanceModel = require('../../models/balanceModel')
const router = express.Router()

const getBalance = router.get('/total-balance', async (req, res) => {
  try {
    const result = await balanceModel.find().sort({ createdAt: -1 })
    res.status(200).send({ success: true, result })
  } catch (error) {
    res.status(500).send({ success: false, message: error.message })
  }
})

module.exports = getBalance
