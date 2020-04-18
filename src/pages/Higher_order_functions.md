---
title: "Higher Order Functions"
date: "2019-10-27"
category: "knowledge-base"
---

![](https://i.imgur.com/o8RCUlW.jpg "Photo by Cameron Casey from Pexels")


What are higher order functions? According to Wikipedia:

> In mathematics and computer science, a higher-order function is a function that does at least one of the following:

> **1/** takes one or more functions as arguments (i.e. procedural parameters)

> **2/** returns a function as its result.

For example an array method <code>.reduce</code> is a higher order function because it takes a function called reducer as a parameter:


```javascript
const [myArray, setMyArray] = useState([1, 4, 2]) 
<p>Im a reducer and SUM is: {myArray.reduce(reducer)}</p>
const reducer = (accumulator, currentValue, index) => {
        accumulator = (accumulator + currentValue)        
        return (accumulator);
    } 
```   