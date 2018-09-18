const { Patch } = require("../models/patch");
const mongoose = require("mongoose");
const { hashFromText } = require("../utils");
const database = require("../database");

const getPatchById = async id => {
  await mongoose.connect(database.connectionString);
  const patch = await Patch.findById(id);
  return patch;
};

const savePatch = async markup => {
  await mongoose.connect(database.connectionString);

  const markupHash = hashFromText(markup);

  // does a duplicate patch already exist?
  const existingPatch = await Patch.findOne({ hash: markupHash });
  if (existingPatch) {
    console.log("existingPatch", existingPatch);
    return existingPatch;
  }

  // Create a new one if not
  const newPatch = new Patch({ markup: markup, hash: markupHash });
  const createdPatch = await newPatch.save();
  console.log("createdPatch", createdPatch);
  return createdPatch;
};

module.exports = { getPatchById, savePatch };
