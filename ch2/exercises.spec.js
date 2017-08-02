import Structure from './exercises.js';

let structure = new Structure();

describe('drawTriangle', () => {
    it('should say draw a triangle', () => {
        expect(structure.drawTriangle()).toEqual(['#','##', '###', '####', '#####','######','#######'].join('\n'));
    });
});

describe('fizzBuzzer', () => {
  xit('should print numbers', () => {
    expect(structure.fizzBuzzer()).toEqual('');
  });
});

describe('generateBoard', () => {
  it('should print a board off odd length', () => {
    expect(structure.generateBoard(3)).toEqual('');
    expect(structure.generateBoard(8)).toEqual('');
  });
});
