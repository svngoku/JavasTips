const ArrayTools = {};

/**
 * @param { number } dimension
 * @param { number } initial
 */
const dim = function(dimension, initial) {
    if(typeof dimension === "number" && typeof initial === "number") {
      let a = new Array();
      for(let i = 0; i < dimension; i++) {
        a[i] = initial;
      }
      return a;
    } else {
      return TypeError("Invalid arguments");
    }
}

/**
 * @param { array } element
 * @returns return the length of an element an params
 */
const LengthOf = function(element) {
  if(Array.isArray(element)) {
    if(typeof element === "object")  return element.length;
    if(element <= 0) return 0;
  } else {
    return new Error('Argument must be an array');
  }
};

/**
 * @param { [number] } array
 */
const withoutDuplicate = function(array) {
    let newArray = new Set();
    if(Array.isArray(array)){
      array.forEach((element) => newArray.add(element))
      return newArray;
    } else {
      return new Error(`Argument ${array} must be an array`);
    }
}

/**
 * @param { number } arr
 * @param { number } weight
 */

const findSum = function(arr, weight) {
    let hastable = {};
    let len = LengthOf(arr); // lenght of the array
    // console.log( `length of the array: ${len}`); // check state
    for (let i = 0; i < len; i++) {
        let currentEl = arr[i], // looping of all elements
            difference = weight - currentEl;
            // console.log(currentEl); // range
            // console.log(difference); // values not inside of the range between the weigth and the array
        if (hastable[currentEl] !== undefined)  {
          return [i, hastable[weight - currentEl]];
        } else {
          hastable[difference] = i;
        }
    }
    return -1;
}

/**
 * @param
 * @returns
 */
const beginAndEndOf = function(array, begin , end) {
    while (array) {
        let partArray = [];
        if(!begin && !end) {
            return array;
        }
        for(var i = begin; i < end; i++ ) {
            partArray.push(array[i]);
        }
        return partArray;
    }
}

 const zip = function(arr1, arr2, callback) {
 if(typeof callback === 'function') {
  if(arr1 && arr2 !== undefined ) {
    let index, result = [];
    for(index = 0 ; index < Math.min(arr1.length , arr2.length); index++) {
      result.push(callback(arr1[index] , arr2[index]));
    }
    return result;
  } else {
    throw new Error('Arguments must be an array');
  }
 } else {
   throw new Error('last argument must be an function expression');
 }
}

/**
 * @param { [number] } array
 * @returns { number }
 * Retuern the value max inside an array
 */
const maxValue = function(array) {
  if(Array.isArray(array)) {
    if(LengthOf(array) < 0) {
      return array.sort();
    } else {
      return Math.max(...array);
    }
  } else {
     throw new Error('Argument must be an Array');
  }
}


/**
 * @param { [number] } array
 */
ArrayTools.minValue = function(array) {
  if(Array.isArray(array)) {
    if(LengthOf(array) < 0) {
      return array.sort();
    } else {
      return Math.min(...array);
    }
  } else {
    return new Error('Argument must be an Array');
  }
}

/**
 * @param { string | number } value
 * @param { [number] } array
 * @returns {[number] | [string]}
 * Returns a new list containing the contents of the given list,
 * followed by the given element.
 */
ArrayTools.append = function(value, array) {
  let newArray = array;
  if(value !== undefined && value !== null) {
    if(Array.isArray(array)) {
      newArray.push(value);
      return newArray;
    } else {
      return new TypeError(`Argument must be an array`);
    }
  } else {
    return new Error('Wrong type for your value');
  }
}
/**
 * @param {[number]} array
 */
ArrayTools.allEqual = function(array) {
  if(Array.isArray(array)) {
    if(LengthOf(array) <= 0) {
      return array;
    } else {
      return array.every(value => value === array[0]);
    }
  } else {
    return TypeError('Argument must be an array');
  }
}

/**
 * @param { number } a
 * @param { number } b
 * @return return the difference between two arrays.
 */
ArrayTools.difference = function(a, b){
  if(Array.isArray(a) && Array.isArray(b)) {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
  } else {
    return new TypeError('Arguments must be an array');
  }
};


/**
 * @param { [number] } arr
 * @param { function } func
 * @returns removes elements from an array until
 *  the passed function returns true
 */
ArrayTools.dropIf = function(arr, func) {
  if(Array.isArray(arr) && typeof func === "function") {
    while(LengthOf(arr) > 0 && !func(arr[0])) arr = arr.slice(1);
    return arr;
  }
  return new Error('Invalid arguments');
};

/**
 * @param { [number] } arr
 * @returns { number }
 * Return the last element of an array
 */
ArrayTools.lastElement = function (array) {
  let last = 0;
  if(Array.isArray(array)) {
    array.sort;
    last = maxValue(array)
  }
  return last;
}

module.exports = {
  dim,
  LengthOf,
  withoutDuplicate,
  beginAndEndOf,
  zip,
  minValue: ArrayTools.minValue,
  maxValue,
  append: ArrayTools.append,
  dropIf: ArrayTools.dropIf,
  allEqual: ArrayTools.allEqual
};
