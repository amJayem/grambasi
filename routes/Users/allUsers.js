const express = require("express");
const router = express.Router();
const userSchema = require("../../models/addUserModel");

const allUsers = router.get("/all-users", async (req, res) => {
  try {
    const result = await userSchema.find();
    // console.log(result)
    res.status(201).send(result);
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message });
  }
});

module.exports = allUsers;
