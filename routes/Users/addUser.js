const express = require('express')
const router = express.Router()
const addUserSchema = require('../../models/addUserModel')

const addUser = router.post('/add-user', async (req, res) => {
  try {
    const data = req.body
    const newUser = new addUserSchema(data)
    const result = await newUser.save()
    res.status(201).send(result)
    console.log(result)
    // res.send(result)
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = addUser
