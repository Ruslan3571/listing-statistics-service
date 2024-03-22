const Koa = require('koa');
const config = require('config');
const { routes } = require('./routes');

const app = new Koa();
const PORT = config.server.port;

app.use(routes());
app.listen(PORT, () => console.log(`Server listen port: ${PORT}`));

module.exports = app