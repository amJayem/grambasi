const express = require('express')
const router = express.Router()
const addUser = require('./Users/addUser')
const allUsers = require('./Users/allUsers')
const deleteUser = require('./Users/deleteUser')
const addEvent = require('./Event/addEvent')
const addBalance = require('./balance/addBalance')
const getBalance = require('./balance/getBalance')

router.route('/add-user').post(addUser)
router.route('/all-users').get(allUsers)
router.route('/delete-user').delete(deleteUser)

router.route('/add-event').post(addEvent)

router.route('/add-balance').post(addBalance)
router.route('/total-balance').get(getBalance)

module.exports = router
