const mongoose = require("mongoose");

const apiKey = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  requests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Request'
    }
  ]
});

const ApiKey = mongoose.model(
  "ApiKey",
  apiKey
);

module.exports = { ApiKey };