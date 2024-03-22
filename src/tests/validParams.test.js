const valid = require('../helpers/validParams');

describe('ValidParams Tests', () => {
   it('should return true for valid autoId', () => {
      const result = valid.autoId(123);
      expect(result).toBe(true);
   });

   it('should return false for invalid autoId', () => {
      const result = valid.autoId('abc');
      expect(result).toBe(NaN);
   });

   it('should return correct type for valid typeId', () => {
      const result = valid.getTypeId(1);
      expect(result).toBe('listing');
   });

   it('should return "all" for undefined typeId', () => {
      const result = valid.getTypeId(undefined);
      expect(result).toBe('all');
   });

   it('should return correct save type for valid typeId', () => {
      const result = valid.saveTypeId(2);
      expect(result).toBe('phone');
   });

   it('should return undefined for invalid typeId', () => {
      const result = valid.saveTypeId(3);
      expect(result).toBeUndefined();
   });
});
