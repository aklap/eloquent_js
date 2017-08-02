// Ch2 was about program structure

export default class Structure {
  /* Looping a triangle

  7 calls to console.log
  #
  ##
  ###
  ####
  #####
  ######
  #######
  */

  drawTriangle() {
    let tri = '',
        count = 1; 

    while(count <= 7) {
      for(let i = 0; i < count; i++) {
        tri += '#';
      }

      //Add newline char, but not on last line
      count < 7 ? tri += "\n" : tri;

      count++;
    }

    return tri;
  }

  /* FizzBuzz
  For nums 1-100:

  if % 3 => 'Fizz'
  if % 5 => 'Buzz'
  if %3 && % 5 => 'FizzBuzz' 
  else print n

  */

  fizzBuzzer() {
    let n = 1,
        checked = '';

    while(n <= 100) {

      if(n % 15 === 0 ) {
        checked += `${n}: FizzBuzz\n`;
      } else if(n % 3 === 0) {
        checked += `${n}: Fizz\n`;
      } else if (n % 5 === 0 ) {
        checked += `${n}: Buzz\n`;
      } else {
        checked += `${n}\n`;
      }

      n++;
    }

    // To remove the newline on last pass
    return checked.trim(); 
  }
  
  /* 
  Chessboard: 

    A string that is an 8 x 8 grid
    Newline at end of every 8 chars
    Alternating starting char for each row is either a space or '#'
  */

  generateBoard(size) {
    let board = '';
    // for n size rows
    for(let i = 0; i < size; i++) {
      // for each element in a row
      for(let j = 0; j < size; j++) {
        board += ((i + j) % 2 === 0 ? 's' : '#');
      }

      board += '\n';
    }

    return board;
  }
}