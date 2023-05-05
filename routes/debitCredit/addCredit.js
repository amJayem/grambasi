const express = require('express')
const router = express.Router()
const creditModel = require('../../models/creditModel.js')

const addCredit = router.post('/get-credit', async (req, res) => {
  try {
    const data = req.body
    const result = await creditModel(data).save()
    res.status(201).send({ success: true, result })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = addCredit
