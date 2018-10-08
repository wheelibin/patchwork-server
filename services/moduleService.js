const { Module } = require("../models/module");

const getModuleByName = async name => {
  const module = await Module.findOne({ name: name });
  return module || {};
};

const saveModule = async module => {
  // // does a duplicate patch already exist?
  // const existingPatch = await Module.findOne({ hash: markupHash });
  // if (existingPatch) {
  //   console.log("existingPatch", existingPatch);
  //   return existingPatch;
  // }

  // Create a new one if not
  const newModule = new Module({ name: module.name, imageUrl: module.imageUrl, inputs: module.inputs, outputs: module.outputs });
  const createdModule = await newModule.save();
  console.log("createdModule", createdModule);
  return createdModule;
};

module.exports = { saveModule, getModuleByName };
