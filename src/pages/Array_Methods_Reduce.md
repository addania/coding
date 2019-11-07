---
title: "Array Methods .reduce"
date: "2019-10-22"
---

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
**reducer** is a function, which means that .reduce calls upon another function which we need to define. 

**initialValue** is optional, we can kick it off with some starting value, but for the first simple example we will skip it.

Example reducer function:
```
  const reducer = (accumulator, currentValue) => {
        accumulator = (accumulator + currentValue)        
        return (accumulator);
    } 
```
reducer takes in 2 arguments:

**accumulator** - value where we can store results of our calculations. Initial accumulator will equal the first element in array which will be 1 (unless we set initial value for it)

**current value** - value at which we are currently iterating, initially this will be value of second element in array which is number 4 (unless we set initial value, then the initial currentValue will be the first element)

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

Example to usee it for average number:
``` 
const reducer = (accumulator, currentValue) => {
        if (currentValue >= accumulator){
            accumulator = currentValue;
       }
        return (accumulator);
    } 
 <p>Im a reducer and highest number is: {myArray.reduce(reducer)}</p>
```