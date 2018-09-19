let localConnectionStrings = { patchwork: "" };
try {
  localConnectionStrings = require("./localConnectionStrings");
} catch (error) {}

const connectionString = process.env.DB_CONNECTION_STRING || localConnectionStrings.patchwork;

module.exports = { connectionString };
