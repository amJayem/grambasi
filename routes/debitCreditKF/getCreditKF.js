const express = require('express')
const router = express.Router()
const creditModelKF = require('../../models/creditModelKF.js')

const getCreditKF = router.get('/get-creditKF', async (req, res) => {
  try {
    // const data = req.body
    const result = await creditModelKF.find().sort({ createdAt: -1 })
    res.status(201).send({ success: true, result })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = getCreditKF
