---
title: "NaN - Not a Number"
date: "2020-04-03"
category: "knowledge-base"
---
![](https://i.imgur.com/ETtwNWY.jpg "Photo from wallpapersafari.com")<p style="font-size: 12px; text-align: right">_Photo from wallpapersafari.com_</p>


"NaN" means "not a number". Instances that return NaN:
- O/0
- any arithmetic on <code>undefined</code>
- operation on a NaN

Why NaN is difficult? because detecting it is very difficult: NaN does not equal to itself

NaN is never equal to NaN
```
NaN == NaN
false
```

Luckily we have a function to check if it is NaN. FUnction is called: isNaN
```
isNaN(0)
false

isNaN(NaN)
true 

isNaN(0 + undefined)
true
```

Last one is true because any arithmetic operation on undefined is Not a number

But ow about undefined itself? is it NaN it is not but isNaN says it is which is a mistake:

``` 
isNaN(undefined)
true
``` 

To fix this, new JS has a  <code>Number.isNaN</code>
``` 
 
Number.isNaN(NaN)
true 
 
Number.isNaN(0)
false 

Number.isNaN(undefined)
false
```