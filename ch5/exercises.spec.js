import HigherOrder from './exercises.js';
import ANCESTRY_FILE from './ancestry.js';
const ancestors = ANCESTRY_FILE;

let hOrder = new HigherOrder;

describe('flatten function', () => {
  it('should take a multidimensional array and return a flattened array with the elements', () => {
    expect(hOrder.flatten([1, 2, [3, 4, [5]]])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should take a 1 dimensional array and return it unchanged', () => {
    expect(hOrder.flatten([1, 2, 3])).toEqual([1, 2, 3]);
  });
});

describe('ageDiff function', () => {
  it('should return the avg age of a mother when they had their child', () => {
    expect(hOrder.ageDiff(ANCESTRY_FILE)).toEqual(31.2);
  });
});