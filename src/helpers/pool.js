const config = require('config');
const mysql = require('mysql2/promise');

module.exports = {
   pool: mysql.createPool(config.database.mariadb),
};
