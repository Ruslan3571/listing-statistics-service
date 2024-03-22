const clients = require('../clients/index');
const valid = require('../helpers/validParams')

module.exports = {
   async get(ctx, next) {
      const { autoId } = ctx.params;
      ctx.assert(valid.autoId(autoId), 400, `bad autoId: ${autoId}`);

      const { typeId } = ctx.query;
      ctx.assert(valid.getTypeId(typeId), 400, `bad typeId: ${typeId}`);

      try {
         ctx.body = await clients
            .get(autoId, typeId)
            .then((res = []) => res
               .reduce((acc, stat) => ({
                  ...acc,
                  [stat.type]: stat?.count
               }), {}));
      } catch (error) {
         ctx.status = 500;
         console.error(error);
      }
      await next();
   },

   async save(ctx, next) {
      const { autoId } = ctx.params;
      ctx.assert(valid.autoId(autoId), 400, `bad autoId: ${autoId}`);

      const data = ctx.request.body;
      ctx.assert(valid.saveTypeId(data?.typeId), 400, `bad typeId: ${data?.typeId}`);

      try {
         const saving = await clients.save({
            autoId,
            typeId: data.typeId
         });
 
         ctx.status = saving?.affectedRows ? 201 : 202;
         ctx.body = { recordId: saving?.insertId };
      } catch (error) {
         ctx.status = 500;
         console.error(error);
      }
      await next();
   }
}
