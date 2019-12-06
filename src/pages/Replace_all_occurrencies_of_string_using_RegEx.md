---
title: "Replace all occurrencies of a string with RegEx"
date: "2019-12-05"
---

Regular expressions allow to match certain patters.

If we want to find char <code>"a"</code> in a string <code>"Today is a nice day"</code> and replace is with <code>"ha"</code>:

```
let sentence="Today is a nice day".replace("a", "ha");
console.log(sentence);
// output is: "Todhay is a nice day"
```

What happened here? Only the first occurance of the <code>"a"</code> was found. How can we replace all? We can use regular expressions with <code>g</code> flag.

```
let sentence="Today is a nice day".replace(/a/g, "ha");
console.log(sentence);
// output is: "Todhay is ha nice dhay"
```

How can we use a variable? For example we want to replace first <code>"a"</code>, then <code>"i"</code>, etc.

```
var replacedChar = "a";
var re = new RegExp(replacedChar,"g");
let sentence="Today is a nice day".replace(re, "ha");
console.log(sentence);
// output is: "Todhay is ha nice dhay"

var replacedChar = "i";
var re = new RegExp(replacedChar,"g");
let sentence="Today is a nice day".replace(re, "I");
console.log(sentence);
// output is: "Today Is  nIce day"
```

How can we do it using variable?
```
var char="d";
var replacedChar = char;
var re = new RegExp(replacedChar,"g");
let sentence="Today is a nice day".replace(re, "D");
console.log(sentence);
// output is: "ToDay is a nice Day"
```

How can we make sure we replace one or another character?

```
var char="d";
var char2="a";
var replacedChar = char+"|"+char2;
var re = new RegExp(replacedChar,"g");
let sentence="Today is a nice day".replace(re, "");
console.log(sentence);
// output is: "Toy is  nice y"
```
