---
title: "Loops"
date: "2019-11-28"
---

There are many loops in JS which we can use:

**for** - looping through a block of code for a given number of times

**for/in** - looping through properties(values) of an <code>object</code>

**for/of** - looping through values of an <code>array</code>

**while** - looping through a block of code as long as a specified condition is true

**do/while** - looping through a block of code once, and then repeating the loop as long as a specified condition is true

**for**
```
let array=["hello", "universe"]
for (let item =0; item < array.length; item++){
  console.log (item);
}
// Output:
//Hello
//universe
```

**for/in**
```
function loop() {
  var person = {firstName:"Mia", lastName:"Schw", age:32};
  var text = "";
  var item;
  for (item in person) {
    text += person[item] + " ";
  }
}
let identity=loop();
// result: Mia Schw 32
```

**for/of**
```
var sports = ['skiing', 'surfing', 'dancing'];
var x;
for (x of cars) {
  console.log(x + "<br >");
}
```

**while**
```
let check=true;
while(check){
console.log("Hi");
  check=false;
}
//Output: Hi
```

**do/while**
```
function worker() {
  var text = ""
  var i = 0;
  do {
    text += "<br>The number is " + i;
    i++;
  }
  while (i < 2);
  console.log(text);
}
worker();
// The number is 0
// The number is 1
// The number is 2

```