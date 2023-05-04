const express = require('express')
const router = express.Router()
const creditModel = require('../../models/creditModel.js')

const getCredit = router.get('/get-credit', async (req, res) => {
  try {
    // const data = req.body
    const result = await creditModel.find().sort({ createdAt: -1 })
    res.status(201).send({ success: true, result })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = getCredit
