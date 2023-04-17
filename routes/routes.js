const express = require("express");
const router = express.Router();
const addUser = require("./addUser");
const allUsers = require("./allUsers");
const deleteUser = require("./deleteUser");
const addEvent = require("./Event/addEvent");

router.route("/add-user").post(addUser);
router.route("/all-users").get(allUsers);
router.route("/delete-user").delete(deleteUser);

router.route("/add-event").post(addEvent);

module.exports = router;
// export default router
