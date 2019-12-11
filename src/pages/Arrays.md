---
title: "Arrays"
date: "2019-11-18"
---

![Array](https://i.imgur.com/qmUjmQg.jpg "Photo by Pixabay from Pexels")

Here you can find a small summary of the most useful array methods.d

**Creating an Array**

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

**Array.map()**

![Map](https://i.imgur.com/XM3VmyA.jpg "Photo by Aaditya Arora from Pexels")

<code>array.map()</code> is going through each element of the array and allows to perform function on it and output NEW array

It requires a function after the brackets. Function takes argument for example called <code>string</code> (but name of argument can be called anything, for example: item, string, number, etc.) which means each item from the array through which we will iterate. 

It returns the **NEW** array. New array will consist of items and each item will contain whatever is a return from the function, for example: ```<li>{string}</li>```
```
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

Creating list of items using <code>array.map()</code>
```
const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map(string => <li>{string}</li>);
<ul>{listItems}</ul>
```

**Adding items to Array using .concat or .push**

![Add](https://i.imgur.com/PVgFfnd.jpg "Photo by Geeorge Becker from Pexels")

**Array.concat()**

<code>array.concat</code> creates A NEW array which concatenates original array with another array. Concat does **NOT** mutate origina array
```
let array = ["cat","tiger"]
let newArray = array.concat("monster")

// array is still ["cat","tiger"]
// newArray is ["cat","tiger", "monster"]
```

**Array.push()**

<code>array.push</code> **MUTATES** the existing array and adds new element!
```
let array = ["cat","tiger" ]
let length = array.push("monster")
// array is mutated ["cat","tiger", "monster"]
// length is 3
```

**Array.indexOf()**

![Index](https://i.imgur.com/ue3MXf2.jpg "Photo by Engin Akyurt from Pexels")

<code>array.indexOf()</code> finds element in the array, optional index means starting searching from position X

```
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4
```

**Cutting arrays using .slice or .splice**

![Cut](https://i.imgur.com/s23i0Yr.jpg "Photo by Photo Collections from Pexels")

**Array.slice()**

<code>array.slice()</code> slices array from one index to another but it creates NEW array, it dos NOT mutate the original one
```
```

**Array.splice()**
<code>array.splice()</code> slices array from one index to another but it MUTATES existing array!
```
```

**Array.reduce()**

![Reduce](https://i.imgur.com/UOPhFMg.jpg "Photo by Arun Thomas from Pexels")

Reduce method is very powerful one which allows you to iterate through all elements in an array, perform certain calculations on it and then returns something: a single value, array, etc.

Let's start with an array:
```
const myArray = [1,4,2]
```
We want to sum this up and return one value of the total sum which would be 7

We can call:
```
myArray.reduce(reducer, initialValue);
```
**Reducer** is a function, which means that <code>.reduce</code> calls upon another function which we need to define. 

**InitialValue** is optional, we can kick it off with some starting value, but for the first simple example we will skip it.

Example reducer function:
```
  const reducer = (accumulator, currentValue) => {
        accumulator = (accumulator + currentValue)        
        return (accumulator);
    } 
```
Reducer takes in 2 arguments:

**Accumulator** - value where we can store results of our calculations. Initial accumulator will equal the first element in array which will be 1 (unless we set initial value for it)

**Current value** - value at which we are currently iterating, initially this will be value of second element in array which is number 4 (unless we set initial value, then the initial currentValue will be the first element)

There can be other arguments like currentIndex (index of currentValue where the iteration currently happens) but the most basic example is with above-mentioned two.

Each iteration ( or function call ) will deliver a returning value! It means on each step return will be executed. This returning value is going to get passed into next step!

Example to use it for the highest number:

``` 
const reducer = (accumulator, currentValue) => {
        if (currentValue >= accumulator){
            accumulator = currentValue;
        }
        return (accumulator);
    } 
```

Example to use it for average number:
``` 
const reducer = (accumulator, currentValue) => {
        if (currentValue >= accumulator){
            accumulator = currentValue;
       }
        return (accumulator);
    } 
 <p>Im a reducer and highest number is: {myArray.reduce(reducer)}</p>
```

~~ And that's it for the intro to most basic array methods. I hope you enjoyed it.~~

![Array](https://i.imgur.com/ui07Dbb.jpg "Photo by Genaro Servín from Pexels")