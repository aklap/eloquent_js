export default class Functions {
  // Compare 2 args and return the minimum val arg
  minimum(a, b) {
    if(a === b) {
      return 'Same';
    } 
    
    return a > b ? b : a;
  }

  // Recursion: Use recursion to check if a number is even or not
  isEven(number) {
    number = Math.abs(number);
    
    if(number === 0) {
      return true;
    }

    if(number <= 1) {
      return false;
    }

    return this.isEven(number-2);
  }

  // Bean Counting
  countChar(str, target) {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
      str[i] === target ? count++ : count;
    }

    return count;
  }

  countBs(str) {
    return this.countChar(str, 'B');

    /*
    First pass of solution: 

    let count = 0;

    for(let i=0; i<str.length; i++) {
      str[i] === 'B' ? count++ : count;
    }

    return count;
    */
  }
}