const tips = require('./bundle');

// Using each method
tips.each(['Bianca', 'Pamela', 'Jessica'], function(name,i, list) { // BIANCA 0
    if(list[i + 1]) { // true
      console.log(name, 'is younger than', list[i + 1 ] )
    } else {
      console.log(name,'is the oldest');
    }
});
// Using reduce method
console.log(tips.reduce([1,2,3,4], (a, b) => a + b, 0)) // Start at 0, sum 10

// Applying easy reduce methods
console.log(tips.easyReduce([1,2,3,4], function(v, sum) { return  v + sum}, 1)); // Start at 1 ,sum = 11

// Using map method

console.log(tips.map([1,2,3,4], (val) => val + 3 )); // [ 4, 5, 6, 7 ]

// Using filter from tips
let users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false },
   { 'user': 'nelson',   'age': 23, 'active': false }
];
// Print users not actived
console.log(tips.filter(users,(u) => u.active ));

// linear search
tips.linearSearch([1,2,3,4,5,6,7,8], 5); // return true


// Using find method from tips
tips.find(4, [1,2,3,4]); // return true
tips.find('Apple', { 1 : 'Mango', 2: 'Banana', 3: 'Orange'}); // false
tips.find('eat'," Today we gonna eat spagetti "); // true

// reversing en element
console.log(String(tips.reverse("Hello")));

console.log(reversing = tips.reverse([1, 3, 4, 6]));

// sorting an array
console.log(tips.sort([2,1,3,5,3])) // [ 1, 2, 3, 3, 5 ]
console.log(tips.sort(reversing)) // [ 1, 3, 4, 6 ] , sort the reversing array at line

var s = [
  { firstName: 'Joe', lastName: 'Doe' },
  { firstName: 'Manue', lastName: 'Henrie' },
  { firstName: 'Gando', lastName: 'Bianca' }
];
console.log(s.sort(tips.by('lastName'))); // return the array of object sorted by lastname

var obj = {
  name: 'Marcus'
}
tips.convert(obj)

// Sets
let a = new Set([1,2,3]);
let b = new Set([4,3,2]);

console.log(tips.intersetSet(a,b))

// Max value
// console.log(tips.maxValue([1, 2, 4]))
