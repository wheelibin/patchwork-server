const patchService = require("../services/patchService");

const getPatch = async (ctx, next) => {
  const id = ctx.route.params.patch;
  ctx.body = await patchService.getPatchById(id);
};

const savePatch = async (ctx, next) => {
  ctx.body = await patchService.savePatch(ctx.request.body.markup);
};

module.exports = { getPatch, savePatch };
