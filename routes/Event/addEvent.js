const express = require("express");
const eventModel = require("../../models/eventModel");
const router = express.Router();

const addEvent = router.post("/add-event", async (req, res) => {
  try {
    const data = req.body;
    const newEvent = new eventModel(data);
    const result = await newEvent.save();
    console.log(result);
    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
});

module.exports = addEvent;
