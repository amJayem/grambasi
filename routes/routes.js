const express = require('express')
const router = express.Router()
const addUser = require('./Users/addUser')
const updateUser = require('./Users/updateUser')
const allUsers = require('./Users/allUsers')
const deleteUser = require('./Users/deleteUser')
const addEvent = require('./Event/addEvent')
const addBalance = require('./balance/addBalance')
const getBalance = require('./balance/getBalance')
const allEvents = require('./Event/allEvents')
const deleteEvent = require('./Event/deleteEvent')
const addCredit = require('./debitCredit/addCredit')
const addDebit = require('./debitCredit/addDebit')
const getCredit = require('./debitCredit/getCredit')
const getDebit = require('./debitCredit/getDebit')
const addNotice = require('./notice/addNotice')
const getNotice = require('./notice/getNotice')
const getMonthlyBalance = require('./balance/getBalance')
const getBalanceKF = require('./kollanFund/getBalanceKF')
const addBalanceKF = require('./kollanFund/addBalanceKF')
const addCreditKF = require('./debitCreditKF/addCreditKF')
const getCreditKF = require('./debitCreditKF/getCreditKF')
const addDebitKF = require('./debitCreditKF/addDebitKF')
const getDebitKF = require('./debitCreditKF/getDebitKF')
const allUsersHomePage = require('./Users/allUsers')

router.route('/add-user').post(addUser)
router.route('/update-user').put(updateUser)
router.route('/all-users').get(allUsers)
router.route('/all-users-homepage').get(allUsersHomePage)
router.route('/delete-user').delete(deleteUser)

router.route('/add-event').post(addEvent)
router.route('/all-events').get(allEvents)
router.route('/delete-event').delete(deleteEvent)

router.route('/add-balance').post(addBalance)
router.route('/total-balance').get(getBalance)
router.route('/monthly-balance').get(getMonthlyBalance)

router.route('/add-balanceKF').post(addBalanceKF)
router.route('/total-balanceKF').get(getBalanceKF)

router.route('/add-creditKF').post(addCreditKF)
router.route('/get-creditKF').get(getCreditKF)

router.route('/add-credit').post(addCredit)
router.route('/get-credit').get(getCredit)

router.route('/add-debitKF').post(addDebitKF)
router.route('/get-debitKF').get(getDebitKF)

router.route('/add-debit').post(addDebit)
router.route('/get-debit').get(getDebit)

router.route('/add-notice').post(addNotice)
router.route('/get-notice').get(getNotice)

module.exports = router
