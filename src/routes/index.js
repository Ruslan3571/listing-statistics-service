const koaBody = require('koa-body');
const Router = require('koa-router');
const controller = require('../controllers');

const router = new Router();
router
   .get('/:autoId', controller.get)
   .post('/:autoId', koaBody(), controller.save)

module.exports = {
   routes() {
      return router.routes();
   },
};
