const express = require('express')
const router = express.Router()
const debitModelKF = require('../../models/debitModelKF.js')

const addDebitKF = router.post('/add-debitKF', async (req, res) => {
  try {
    const data = req.body
    const result = await debitModelKF(data).save()
    res.status(201).send({ success: true, result })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = addDebitKF
