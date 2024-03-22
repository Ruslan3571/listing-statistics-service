module.exports = {
  server: {
    port: 80,
  },
  database: {
    mariadb: {
      host: 'mariadb',
      user: 'statistics-service',
      password: 'strong@#$pass',
      connectionLimit: 10,
      acquireTimeout: 30000,
    },
  },

};
