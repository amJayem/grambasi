const express = require("express");
const router = express.Router();
const userSchema = require("../../models/addUserModel");
const balanceSchema = require("../../models/balanceModel");
const eventModel = require("../../models/eventModel");

const deleteEvent = router.delete("/delete-event", async (req, res) => {
  try {
    const { id } = req.query;
    const deleteEvent = await eventModel.findByIdAndDelete(id);
    // const filter = { id: id }
    // const deletedBalance = await balanceSchema.findOneAndDelete(filter)
    res.status(201).send({ deleteEvent });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
});

module.exports = deleteEvent;
