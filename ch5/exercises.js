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

// Mother-Child Age Difference: What is the average age difference between mothers and children when the child is born?

  ageDiff(family) {
    family = JSON.parse(family);

    // Helper functions:
   
    // average() is given to us per instructions, (I refactored a bit).
    function average(array) {
      return array.reduce((a, b) => a + b) / array.length;
    }

    function diff(f, b) { 
        return b.born - f[b.mother].born;
    }

    // End Helper Functions

    let famHash = family.reduce((acc, p) => {
      acc[p.name] = p; 
      return acc;
    }, {});

    // Sanitize: Only return set of people that have a mother and whose mother is in the ancestry data set, (i.e., the mothers must have their own record/object in the set and not just be a property on a child)
    let children = family.filter(p => p.mother && famHash[p.mother]);

    // TODO: Refactor. Probably a better way to bind/pass in second argument in a more ES2015 way...
    let differences = children.map(diff.bind(this, famHash));

    /* JS rounding headache here. To round to specific place:

      Math.round(decimal * base^power_as_place) / base^power_as_place
    */
    return Math.round(average(differences) * 10**1) / 10**1;
  }
}

