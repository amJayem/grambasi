const express = require('express')
const router = express.Router()
const userSchema = require('../../models/addUserModel')
const balanceSchema = require('../../models/balanceModel')

const deleteUser = router.delete('/delete-user', async (req, res) => {
  try {
    const { id } = req.query
    const filter = { memberId: Number(id) }
    console.log(
      'id: ',
      typeof id,
      id,
      'memberId: ',
      typeof filter.memberId,
      filter
    )
    const deletedUser = await userSchema.findOneAndDelete(filter)
    const deletedBalance = await balanceSchema.deleteMany(filter)
    res.status(201).send({ deletedBalance, deletedUser })
  } catch (error) {
    console.log(error)
    res.status(500).send({ message: error.message })
  }
})

module.exports = deleteUser
