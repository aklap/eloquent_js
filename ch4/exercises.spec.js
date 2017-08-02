import DataStructures from './exercises.js';

const ds = new DataStructures,
      testList = {
        value: 1, rest: { 
          value: 2, rest: { 
            value: 3, rest: null
          }
        }
      }

describe('range function', () => {
  it('should return an array of integers between the two args start and end, inclusive', () => {
      expect(ds.range(1,5)).toEqual([1,2,3,4,5]);
  });

  it('should accept an interval arg', () => {
      expect(ds.range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });

  it('should accept a negative interval', () => {
      expect(ds.range(5, 2, -1)).toEqual([5, 4, 3, 2]);
  });
});

describe('sum function', () => {
  it('should sum all integers in an array', () => {
      expect(ds.sum([1, 2, 3])).toEqual(6);
  });
});

describe('reverseArray function', () => {
  it('should reverse the elements in an array', () => {
      expect(ds.reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });
});

describe('reverseArrayInPlace', () => {
  it('should reverse an array', () => {
      expect(ds.reverseArrayInPlace([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
  });

  it('should be able to reverse an array of odd length', () => {
      expect(ds.reverseArrayInPlace([1, 2, 3])).toEqual([3,2,1]);
  });
  it('should be able to reverse an array of even length', () => {
      expect(ds.reverseArrayInPlace([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });

  // How to test for mutated object in JS? Potentially use the deepEqual function we create later.
  xit('should mutate the input', () => {
      expect(ds.reverseArrayInPlace()).toEqual();
  });
});

describe('arrayToList function', () => {
  it('should transform an array into a list', () => {
    expect(ds.arrayToList([1, 2, 3])).toEqual(testList);
  });
});

describe('listToArray function', () => {
  it('should transform a list into an array', () => {
    expect(ds.listToArray(testList)).toEqual([1, 2, 3]);
  });
});

describe('prepend helper function', () => {
  it('should prepend a node to the beginning of  a list', () => {
      expect(ds.prepend(0, testList)).toEqual({value: 0, rest: testList});
  });
});


describe('nth helper function', () => {
  it('should search a list and return nth node', () => {
      expect(ds.nth(1, testList)).toEqual(2);
  });
});

describe('deepEqual function', () => {
  it('should return a Boolean when comparing 2 objects or values', () => {
      expect(ds.deepEqual(3, {val: 1, next: 3})).toBe(false);
      expect(ds.deepEqual(3, 3)).toBe(true);
      expect(ds.deepEqual(testList, testList)).toBe(true);
  });
});

