const express = require("express");
const eventModel = require("../../models/eventModel");
const router = express.Router();

const allEvents = router.get("/all-events", async (req, res) => {
  try {
    const result = await eventModel.find();
    // console.log(result)
    res.status(201).send(result);
  } catch (error) {
    // console.error(error)
    res.status(500).send({ message: error.message });
  }
});

module.exports = allEvents;
