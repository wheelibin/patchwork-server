const { Patch } = require("../models/patch");
const { hashFromText } = require("../utils");

const getPatchById = async id => {
  const patch = await Patch.findById(id);
  return patch || {};
};

const savePatch = async markup => {
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
