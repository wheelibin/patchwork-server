const Koa = require("koa");
const app = new Koa();
const cors = require("koa-cors");
const Router = require("koa-rest-router");
const apiRouter = Router({ prefix: "/api/v1" });

const patches = require("./patches");

// Request method	Route path	Controller method
// GET	/users	index
// GET	/users/new	new
// POST	/users	create
// GET	/users/:user	show
// GET	/users/:user/edit	edit
// PUT	/users/:user	update
// DELETE	/users/:user	remove

apiRouter.resource("patches", {
  show: function(ctx, next) {
    switch (ctx.route.params.patch) {
      case "1":
        ctx.body = patches.patch1;
        break;
      case "2":
        ctx.body = patches.basicKrell;
        break;
      case "3":
        ctx.body = patches.mathsBouncingBall;
        break;
      default:
        ctx.body = "";
        break;
    }
  }
});

app.use(cors());
app.use(apiRouter.middleware());

const port = process.env.PORT || 3001;
app.listen(port);
