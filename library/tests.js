"use strict";
function define(func) {
    if(typeof func === "function") {
      func();
    } else {
      return new TypeError('wrong type on your arguments');
    }
}

/**
 * @function
 *
  console.log(isEqualTo(1,2));
 *
 */
function isEqualTo(abstractValue,initValue) {
  return initValue === abstractValue ?  true : new TypeError(`Not equal : ${abstractValue} !== ${initValue}`);
}
