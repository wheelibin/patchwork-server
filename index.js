const Koa = require("koa");
const app = new Koa();
const cors = require("koa-cors");
const Router = require("koa-rest-router");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");

const database = require("./database");
const apiRouter = Router({ prefix: "/api/v1" });
const patchesController = require("./controllers/patchesController");
const modulesController = require("./controllers/modulesController");

mongoose.connect(
  database.connectionString,
  { useNewUrlParser: true }
);

// Request method	Route path	Controller method
// GET	/users	index
// GET	/users/new	new
// POST	/users	create
// GET	/users/:user	show
// GET	/users/:user/edit	edit
// PUT	/users/:user	update
// DELETE	/users/:user	remove

apiRouter.resource("patches", {
  show: patchesController.getPatch,
  create: patchesController.savePatch
});

apiRouter.resource("modules", {
  show: modulesController.getModuleByName,
  create: modulesController.saveModule
});

app.use(cors());
app.use(bodyParser());
app.use(apiRouter.middleware());

const port = process.env.PORT || 3001;
app.listen(port);
