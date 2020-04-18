---
title: "How to check data types"
date: "2019-12-22"
category: "knowledge-base"
---

![](https://i.imgur.com/STxfgmb.jpg "Photo by João Jesus from Pexels")

We can use 2 ways to check data types:

ES6 native:
```
const check = typeof "hello" === "string";
console.log(check);
//result: true
```

Lodash:
```
import _ from "lodash";

const check = _.isString("hello");
console.log(check);
//result: true
```