const mongoose = require("mongoose");

// Mongoose Schema
const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Mongoose Model
module.exports = mongoose.model("event", eventSchema);
