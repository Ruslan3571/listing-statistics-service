const validSaveTypes = {
   1: 'listing',
   2: 'phone',
}

module.exports = {
   /**
    * @desc перевіряє, чи є переданий ідентифікатор коректним autoId
    * @param {String|Number} id - переданий ідентифікатор
    * @return {Boolean} - повертає true, якщо ідентифікатор коректний, в іншому випадку false.
    */
   autoId(id) {
      const listingId = Number(id);
      return Number(listingId) && listingId > 0;
   },

   /**
    * @desc перетворює ідентифікатор типу дії в зрозуміле значення
    * @param {String|Number} id - тип дії
    * @return {String} - значення типу дії або 'all', якщо id не передано
    */
   getTypeId(id) {
      return {
         ...validSaveTypes,
         undefined: 'all'
      }[id];
   },

   /**
    * @desc перевіряє, чи є переданий ідентифікатор типу дії коректним для збереження
    * @param {String|Number} id - тип дії
    * @return {String|Undefined} - повертає значення типу дії або undefined, якщо id не відповідає жодному допустимому значенню
    */
   saveTypeId(id) {
      return validSaveTypes[id];
   }
}
