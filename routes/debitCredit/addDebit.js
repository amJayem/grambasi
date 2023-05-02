const express = require('express')
const router = express.Router()
const debitModel = require('../../models/debitModel.js')

const addDebit = router.post('/add-debit', async (req, res) => {
  try {
    const data = req.body
    const result = await debitModel(data).save()
    res.status(201).send({ success: true, result })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = addDebit
