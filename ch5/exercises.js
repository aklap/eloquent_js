export default class HigherOrder {
  
// Use reduce and concat
  flatten(matrix) {
    return matrix.reduce((flat, el) => {
      if(typeof el === 'object') {
        return flat.concat(this.flatten(el));
      }

      return flat.concat(el);
    }, []); 
  }
}

// Mother-Child Age Difference

