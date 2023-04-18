const express = require('express')
const balanceModel = require('../../models/balanceModel')
const router = express.Router()

const getBalance = router.get('/total-balance', async (req, res) => {
  try {
    const result = await balanceModel.find()
    // console.log(result)
    res.status(201).send(result)
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = getBalance
