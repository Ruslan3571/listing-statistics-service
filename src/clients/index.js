const { pool } = require('../helpers/pool');

module.exports = {
   /**
    * @function get
    * @desc повертає статистику згідно переданих параметрів
    * @param {Number} autoId - id оголошення
    * @param {Number <1|2>} typeId - тип дії
    * @return {Promise}
    */
   get(autoId, typeId) {
      const args = [autoId];
      if (typeId) args.push(typeId);

      return pool.query(
         `SELECT IF (typeId = 1, 'listing', 'phone') type, COUNT(*) count
            FROM statistics.openingActions
            WHERE autoId = ?
            ${typeId ? 'AND typeId = ?' : ''}
            GROUP BY typeId; `,
         args
      ).then(([res] = []) => res);
   },

   /**
    * @function save
    * @desc зберігає дані про дію користувача
    * @param {Number} autoId - id оголошення
    * @param {Number <1|2>} typeId - тип дії
    * @return {Promise}
    */
   save(data) {
      return pool.query('INSERT INTO statistics.openingActions (autoId, typeId) VALUES (?, ?)',
         [data.autoId, data.typeId]
      ).then(([res] = []) => res)
   }
}
