const express = require('express')
const router = express.Router()
const noticeSchema = require('../../models/noticeModal')

const addNotice = router.post('/add-notice', async (req, res) => {
  try {
    const data = req.body
    const newNotice = new noticeSchema(data)
    const noticeAdded = await newNotice.save()
    res.status(201).send(noticeAdded)
    console.log(noticeAdded)
    // res.send(result)
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = addNotice
