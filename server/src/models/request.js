const mongoose = require("mongoose");

const request = new mongoose.Schema({
  path: {
    type: String,
    default: "",
  },
  method: {
    type: String,
    default: "",
  },
  bytes: {
    type: Number,
  },
  apiKey: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "ApiKey",
  },
  createdAt: {
    type: mongoose.Schema.Types.Date,
  },
});

const Request = mongoose.model("Request", request);

module.exports = { Request };
