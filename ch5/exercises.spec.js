import HigherOrder from './exercises.js';
// require './ancestry.js';

let hOrder = new HigherOrder;

describe('flatten function', () => {
  it('should take a multidimensional array and return a flattened array with the elements', () => {
    expect(hOrder.flatten([1, 2, [3, 4, [5]]])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('', () => {

});