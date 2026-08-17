/**
 * @param { number } value
 * @param { number } position
 * @return { number }
 * The functon take a value and a position ,
 * by default the postion is equal to 1,
 * and parse the value to float.
 * The position is the statement of the number of 0 before
 * the value
 */

const Floatify = function(value, position = 1) {
  if(Number(value) && Number(position)) {
    if(value === 0 && position > 0) {
      return value;
    }
    return parseFloat(value).toFixed(position);
  } else {
    throw new Error('Argument must be a Number or a String');
  }
}

/* Did you do a bootcamp or go to college? */


/**
 * @param { Object } obj
 * @returns { JSON }
 * clone an object and return it
 */
const Clone = function(obj) {
  if(typeof obj === "object") {
    return JSON.parse(JSON.stringify(obj));
  } else {
    return new TypeError('Argument must be an object');
  }
}

/**
  * @param { [number] } arr
  * @returns { Object }
  * Merge an Array of Objects into a single Object.
*/
const toObject = function(arr) {
  let res = {};
  function extend (to, _from) {
    for (var key in _from) {
      if (key === '__proto__' || key === 'constructor' || key === 'prototype') continue;
      if (Object.prototype.hasOwnProperty.call(_from, key)) {
        to[key] = _from[key];
      }
    }
    return to
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

module.exports = {
  Floatify,
  Clone,
  toObject,
};
