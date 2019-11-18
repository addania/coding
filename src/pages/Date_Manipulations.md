---
title: "Date Manipulations"
date: "2019-11-16"
---

Creating new variable with CURRENT date:
```
var myDate = new Date();
```

Creating new variable event which will contain a given date:
```
var event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
```

Fortmatting Date to nice string using <code>.toLocaleSting</code>
```
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
// expected output: 20/12/2012, 03:00:00
```

Retrieving info from the date:

Year
```
var year = date.getFullYear();
//or
var year = date.getUTCFullYear();
```

Month
```
 var monthIndex = date.getMonth();
 //or
var monthIndex = date.getUTCMonth();
```

Day
```
var day = date.getDate();
//or
var day = date.getUTCDate();
```

Hours
```
var hours = date.getHours();
//or
var hours = date.getUTCHours();
```
Minutes
```
var minutes = date.getMinutes();
//or
var minutes = date.getUTCMinutes();
```

Seconds
```
var seconds = date.getSeconds();
//or
var seconds = date.getITCSeconds();
```

Incrementing one day to a date
```
var myDate = new Date();

//add a day to the date
myDate.setDate(myDate.getDate() + 1);
```
