/**
 * const t = "bonjour jeremy , tu vas bien ? "
 * const s = "jeremy";
 * console.time("moore");
 * console.log(BoyerMooreHorspool(s,t));
 * console.timeEnd('moore');
 * @param {string } needle
 * @param {string } haystack
 * @returns { number } position
 * The BoyerMooreHorspool it's a algorithm
 * for searching with a time of complexity of O(n)2
 */
const BoyerMooreHorspool = function(needle, haystack) {
  let skip = 0; // init position
  const preprocess = function preprocess(word) {
    const table = {};
    for(let i = 0 ; i < word.length - 1;i++ ) {
      table[word[i]] = word.length - i - 1;
    }
    return table;
  }
  const baseTable = preprocess(needle);

  while(haystack.length - skip >= needle.length) {
    let i = needle.length - 1;
    while (haystack[skip + i] === needle[i]) {
      if(i === 0) {
        return skip;
      }
      i--;
    }
    skip += (baseTable[haystack[skip + needle.length - 1]] || needle.length);
  }
  return -1;
}

/**
 * @param {number} length
 */
const getFibonacciSequence = function(length) {
  var n, ref, results;
  results = [1];

  fibonacci = function*() {
    var current, previous;
    [previous, current] = [1, 1];
    while (true) {
      [previous, current] = [current, previous + current];
      yield current;
    }
  };

  ref = fibonacci();
  for (n of ref) {
    results.push(n);
    if (results.length === length) {
      break;
    }
  }
  return results;
};

export default {
  BoyerMooreHorspool,
  getFibonacciSequence
}
