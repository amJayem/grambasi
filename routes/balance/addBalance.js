const express = require('express')
const balanceModel = require('../../models/balanceModel')
const router = express.Router()

const addBalance = router.post('/add-balance', async (req, res) => {
  try {
    const data = req.body
    // const result = await balanceModel.findOneAndUpdate({ _id: id }, data, {
    //   upsert: true,
    //   new: true
    // })
    const result = await balanceModel(data).save()
    res.status(200).send({ success: true, result })
  } catch (error) {
    console.error(error)
    res.status(500).send({ success: false, message: error.message })
  }
})

module.exports = addBalance
