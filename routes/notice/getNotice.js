const express = require('express')
const router = express.Router()
const noticeSchema = require('../../models/noticeModal')

const getNotice = router.get('/get-notice', async (req, res) => {
  try {
    const notice = await noticeSchema.find()
    // console.log(result)
    res.status(201).send(notice)
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = getNotice
