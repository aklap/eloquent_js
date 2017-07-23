import hello from './exercises.js';

describe('hello func', () => {
    it('should say hello', () => {
        expect(hello()).toEqual('Hello World');
    });
});