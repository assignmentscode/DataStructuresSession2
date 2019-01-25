const modifiedInsertionSort = require('./modifiedInsertionSort');
describe('modifiedInsertionSort ()', () => {
    it('should sort array which is already sorted', () => {
      expect(modifiedInsertionSort([6, 13, 16, 24, 39, 51, 80])).toEqual([13, 16, 24, 39, 51, 80]);
    });
    it('should sort reverse sorted array', () => {
      expect(modifiedInsertionSort([6, 80, 51, 39, 24, 16, 13])).toEqual([80, 13, 16, 24, 39, 51]);
    });
    it('should sort reverse sorted array', () => {
        expect(modifiedInsertionSort([8, 25, 57, 37, 48, 12, 92, 86, 33])).toEqual([33, 37, 48, 57, 86, 92, 12, 25]);
      });
   });