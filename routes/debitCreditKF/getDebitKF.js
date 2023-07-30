const express = require('express')
const debitModelKF = require('../../models/debitModelKF')
const router = express.Router()
// const debitModel = require('../../models/debitModel.js')

const getDebitKF = router.get('/get-debitKF', async (req, res) => {
  try {
    // const data = req.body
    const result = await debitModelKF.find().sort({ createdAt: 1 })
    res.status(201).send({ success: true, result })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = getDebitKF
