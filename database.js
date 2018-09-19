const devConnectionString = require("./connectionString");

const connectionString = process.env.DB_CONNECTION_STRING || devConnectionString.patchwork;

module.exports = { connectionString };
