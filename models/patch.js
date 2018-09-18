const mongoose = require("mongoose");
const shortId = require("shortid");

const patchSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortId.generate
  },
  markup: String,
  hash: Number
});

const Patch = mongoose.model("Patch", patchSchema);

module.exports = { Patch };
