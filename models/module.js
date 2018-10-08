const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  inputs: Object,
  outputs: Object
});

const Module = mongoose.model("Module", moduleSchema);

module.exports = { Module };
