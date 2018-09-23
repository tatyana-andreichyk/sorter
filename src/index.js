class Sorter {  
    
  constructor() {
    this.array = [];
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let sortedArray = [];
    indices = indices.sort(function compareFunction(a, b) {
        return a - b;
    });
    for (let i = 0; i < indices.length; i++) {
       sortedArray.push(this.array[indices[i]]); 
    }
  
    sortedArray.sort(this.comparator);
    
    for (let i = 0; i < indices.length; i++) {
       this.array[indices[i]] = sortedArray.shift(); 
    }
    
  }

  setComparator(compareFunction) {
    
    this.comparator = compareFunction;
    
  }
  
}

module.exports = Sorter;