const express = require('express')
// const balanceModel = require('../../models/balanceModel')
// const monthlyBalance = require('../../models/monthlyBalanceModel')
const kollanFundModel = require('../../models/kollanFundModel')
const router = express.Router()

const addBalanceKF = router.post('/add-balanceKF', async (req, res) => {
  try {
    const data = req.body
    // const resultMonthly = await monthlyBalance.findOneAndUpdate(
    //   { memberId: data.memberId },
    //   data,
    //   {
    //     upsert: true,
    //     new: true
    //   }
    // )
    let result
    if (result.memberId) {
      result = await kollanFundModel(data).save()
    }
    res.status(200).send({ success: true, result })
    // res.status(200).send({ success: true, result, resultMonthly })
  } catch (error) {
    console.error(error)
    res.status(500).send({ success: false, message: error.message })
  }
})

module.exports = addBalanceKF
