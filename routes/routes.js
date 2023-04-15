const express = require('express')
const router = express.Router()
const addUser = require('./addUser')
const allUsers = require('./allUsers')
const deleteUser = require('./deleteUser')

router.route('/add-user').post(addUser)
router.route('/all-users').get(allUsers)
router.route('/delete-user').delete(deleteUser)

module.exports = router
// export default router
