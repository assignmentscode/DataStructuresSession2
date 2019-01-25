const modifiedInsertionSort = require('./modifiedInsertionSort');
describe('modifiedInsertionSort ()', () => {
    it('should sort array which is already sorted [13, 16, 24, 39, 51, 80]', () => {
      expect(modifiedInsertionSort([6, 13, 16, 24, 39, 51, 80])).toEqual([13, 16, 24, 39, 51, 80]);
    });
    it('final output should be [80, 13, 16, 24, 39, 51]', () => {
      expect(modifiedInsertionSort([6, 80, 51, 39, 24, 16, 13])).toEqual([80, 13, 16, 24, 39, 51]);
    });
    it('The final output should be [33, 37, 48, 57, 86, 92, 12, 25]', () => {
        expect(modifiedInsertionSort([8, 25, 57, 37, 48, 12, 92, 86, 33])).toEqual([33, 37, 48, 57, 86, 92, 12, 25]);
      });
      it('The final output should be [66, 68, 75, 89, 19, 23, 28, 47]', () => {
        expect(modifiedInsertionSort([8, 47, 68, 23, 89, 75, 66, 19, 28])).toEqual([66, 68, 75, 89, 19, 23, 28, 47]);
      });
      it('The final output should be [50, 52, 55, 66, 88, 40, 44, 48, 49]', () => {
        expect(modifiedInsertionSort([9, 48, 55, 40, 66, 52, 50, 49, 88, 44])).toEqual([50, 52, 55, 66, 88, 40, 44, 48, 49]);
      });
      it('The final output should be [47, 50, 60, 80, 100, 2, 10, 45, 46]', () => {
        expect(modifiedInsertionSort([9, 50, 45, 47, 46, 100, 10, 2, 80, 60])).toEqual([47, 50, 60, 80, 100, 2, 10, 45, 46]);
      });
   });