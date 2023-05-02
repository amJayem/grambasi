const express = require('express')
const router = express.Router()
const addUser = require('./Users/addUser')
const allUsers = require('./Users/allUsers')
const deleteUser = require('./Users/deleteUser')
const addEvent = require('./Event/addEvent')
const addBalance = require('./balance/addBalance')
const getBalance = require('./balance/getBalance')
const allEvents = require('./Event/allEvents')
const deleteEvent = require('./Event/deleteEvent')
const addCredit = require('./debitCredit/addCredit')
const addDebit = require('./debitCredit/addDebit')

router.route('/add-user').post(addUser)
router.route('/all-users').get(allUsers)
router.route('/delete-user').delete(deleteUser)

router.route('/add-event').post(addEvent)
router.route('/all-events').get(allEvents)
router.route('/delete-event').delete(deleteEvent)

router.route('/add-balance').post(addBalance)
router.route('/total-balance').get(getBalance)

router.route('/add-credit').post(addCredit)
router.route('/add-debit').post(addDebit)

module.exports = router
