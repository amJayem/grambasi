const express = require('express')
const creditModelKF = require('../../models/creditModelKF')
const router = express.Router()
// const creditModel = require('../../models/creditModel.js')

const addCreditKF = router.post('/add-creditKF', async (req, res) => {
  try {
    const data = req.body
    console.log(data)
    const result = await creditModelKF(data).save()
    res.status(201).send({ success: true, result })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = addCreditKF
