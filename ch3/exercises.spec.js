import Functions from './exercises.js';

let func = new Functions(); 

describe('minimum', () => {
  it('should return the minimum of 2 things', () => {
      expect(func.minimum(1,2)).toEqual(1);
  });
  it('should return a string message if neither if equal', () => {
      expect(func.minimum(1, 1)).toEqual('Same');
  });
});

describe('recursion', () => {
  it('should return true if a number is even', () => {
      expect(func.isEven(50)).toEqual(true);
  });

  it('should return false if a number is even', () => {
      expect(func.isEven(75)).toEqual(false);
  });
  it('should return false if a number is -1', () => {
      expect(func.isEven(-1)).toEqual(false);
  });
  it('should return true if a number is -4', () => {
      expect(func.isEven(-4)).toEqual(true);
  });
});

describe('countBs', () => {
  it('should return the count of the letter B in a str', () => {
      expect(func.countBs('BBa')).toEqual(2);
  });
});

describe('countChar', () => {
  it('should return the count of a given arg in a str', () => {
      expect(func.countChar('BBsdfa', 'a')).toEqual(1);
  });
})