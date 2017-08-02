export default class HigherOrder {
  
// Use reduce and concat
  flatten(arr) {
    return arr.reduce((flat, el) => {
      if(typeof el !== 'object') {
        return flat.concat(el);
      } else {
        return flat.concat(this.flatten(el));
      }
    }, []); 
  }
}