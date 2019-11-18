---
title: "Arrays"
date: "2019-11-18"
---

Summary of useful array methods

Creating new array (when we dont want to reference) of a given length of empty elements:
```
let newArray = new Array(7);
//creates array of 7 elements, each element is emtpy
```


Creating new array with one specific item in it:
```
let newArray = new Array("7");
//creates array of 1 element, this element is string 7
```

Creating new array from another array using spread operator. Spread operator creates new object + copies other array:
```
var array = [1,2,3]
var newArray = [...array]

// newArray will be: [1,2,3]

```

Creating new array from another array using spread operator + adding more elements. Spread operator creates new object + copies other array:
```
var array = [1,2,3]
var newArray = [...array, 4]

// newArray will be: [1,2,3,4]

```


Creating new array filled with 0s using loop:
```
var data = [];
var length = 5;

for(var i = 0; i < length; i++) {
    data.push(0);
}
```

<code>array.map()</code> is going through each element of the array and allows to perform function on it and output NEW array
```
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

<code>array.concat</code> createes A NEW array which concatenates original array with another array. concat does NOT mutate origina array
```
let array = ["cat","tiger"]
let newArray = array.concat("monster")

// array is still ["cat","tiger"]
// newArray is ["cat","tiger", "monster"]
```

<code>array.push</code> MUTATES the existing array and adds new element!
```
let array = ["cat","tiger" ]
let length = array.push("monster")
// array is mutated ["cat","tiger", "monster"]
// length is 3
```

<code>array.indexOf()</code> finds element in the array, optional index means starting searching from position X

```
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4
```

<code>array.slice()</code> slices array from one index to another but it creates NEW array, it dos NOT mutate the original one
```
```

<code>array.splice()</code> slices array from one index to another but it MUTATES existing array!
```
```

