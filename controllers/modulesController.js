const moduleService = require("../services/moduleService");

const getModuleByName = async (ctx, next) => {
  const name = ctx.route.params.module;
  ctx.body = await moduleService.getModuleByName(name);
};

const saveModule = async (ctx, next) => {
  ctx.body = await moduleService.saveModule(ctx.request.body.module);
};

module.exports = { saveModule, getModuleByName };
