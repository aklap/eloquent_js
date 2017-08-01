export default class DataStructures {
  // Sum of a Range: Create a function to generate an array from a range
  range(start, end, step = 1) {
    let res = [];

    if(step > 0) {
      for(let i=start; i <= end; i+=step) {
        res.push(i);
      }
    } else {
      for(let i=start; i >= end; i+=step) {
        res.push(i);
      }
    }

    return res;
  }

  // Create a function that sums the elements of an array.
  sum(arr) {
    return arr.reduce( (sum, val) => sum + val, 0);
  }

  // Reversing an Array

  // Don't mutate the input
  reverseArray(arr) {
    let reversed = [];

    for(let i=arr.length-1; i >= 0; i--) {
      reversed.push(arr[i]);
    }

    return reversed;
  }

  /* Mutate the input: My solution is very similar to treating the array like a linked list, creating a variable to store the value of the 'head' node where we reference a val and then swap indices.
  
  The diffculty was delimiting my loop with a condition. 
  */

  reverseArrayInPlace(arr) {
    for(let i=0; i < Math.floor(arr.length/2); i++) {
      let currEl = arr[i],
          newPos = (arr.length-1) - i;
      
      // Set the value of the index position we're currently on with whatever the value is at the index we want to swap with.
      arr[i] = arr[newPos];

      // Set the value of the corresponding index position we swap with to the value we stored in current element, currEl.
      arr[newPos] = currEl;
    }

    return arr;
  }

  /* 
  A List: Here, a 'list' is understood to be a nested JS object with 2 properties: 'value' and 'rest' per the instructions. 

  We take an array as input, transform into list and return a list as output
  */

  arrayToList(arr, list=null) {
    if(arr.length > 0) {
      const node = { 
        value: arr[arr.length-1],
        rest: list
      }

      // Instead of a for loop going backwards we can just keep slicing off the arr from 2nd to last element to first
      return this.arrayToList(arr.slice(0, arr.length-1), node);
    }

    return list;
  }

  // Take a list, transform into and return array
  listToArray(list) {
    let arr = [];

    // Walk a list using while
    while(list) {
      arr.push(list.value);
      list = list.rest;
    }

    return arr;
  }

  // Prepend a head node to an existing list
  prepend(el, list) {
    return {
      value: el, 
      rest: list 
    }
  }

  // Returns element at that position in a list recursively
  nth(n, list) {
    return n !== 0 ? this.nth(n-1, list.rest) : list.value;
  }
  
  /* 
  deepEqual: We can check if two things are the same by passing their properties into deepEqual as args and seeing if both objects have that property
  */
  deepEqual(a, b) {
    // If two 
    if(a === b) {
      return true
    }; 

    // Check for any condition that would cause args not to be equal
    if(a === null || b === null || typeof a != 'object' || typeof b != 'object') {
      return false
    };

    // Check for equality in number of properties and properties themselves
    var propsA = 0, 
        propsB = 0;

    for(var prop in a) {
      propsA += 1;

      for (var prop in b) {
        propsB += 1;
        if (!(prop in a) || !this.deepEqual(a[prop], b[prop])) {
          return false;
        }
      }
    }

    return propsInA == propsInB;
  }
}
