const express = require('express')
const router = express.Router()
const userSchema = require('../../models/addUserModel')
const balanceSchema = require('../../models/balanceModel')

const deleteUser = router.delete('/delete-user', async (req, res) => {
  try {
    const { id } = req.query
    const deletedUser = await userSchema.findByIdAndDelete(id)
    const filter = { id: id }
    const deletedBalance = await balanceSchema.findOneAndDelete(filter)
    res.status(201).send({ deletedUser, deletedBalance })
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = deleteUser
