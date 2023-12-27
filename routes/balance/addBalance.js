const express = require('express')
const balanceModel = require('../../models/balanceModel')
const lastInsertedAmount = require('../../models/lastInsertedAmountModel')
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
    res.status(200).send({ success: true, result, resultMonthly })
  } catch (error) {
    console.error(error)
    res.status(500).send({ success: false, message: error.message })
  }
})

module.exports = addBalance
