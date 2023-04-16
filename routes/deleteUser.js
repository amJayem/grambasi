const express = require('express')
const router = express.Router()
const userSchema = require('../models/addUserModel')

const deleteUser = router.delete('/delete-user', async (req, res) => {
  try {
    const { id } = req.query
    console.log(id)
    const result = await userSchema.findByIdAndDelete(id)
    res.status(201).send(result)
    // console.log(result)
    // res.status(201).send(id)
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = deleteUser
