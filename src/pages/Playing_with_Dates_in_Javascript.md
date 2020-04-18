---
title: "Playing with Dates in Javascript"
date: "2019-11-16"
category: "knowledge-base"
---

![](https://i.imgur.com/ooqUgWd.jpg "Photo by Wolfgang from Pexels")


To create a new variable with the CURRENT date, we use <code>new Date()</code> with empty brackets:
```
var myDate = new Date();
```

Now our <code>myDate</code> is of a date type. We can extract different information from it like:

- day of month, 

- day of week, 

- month, 

- year, etc.

Retrieving info from the date:

Year
```
var year = myDate.getFullYear();
//or
var year = myDate.getUTCFullYear();
```

Month
```
 ar monthIndex = myDate.getMonth();
 //or
var monthIndex = myDate.getUTCMonth();
```
Month starts from 0 for January to 11 for December - if you want 1 for January add +1
```
var myDate=new Date(); 
var month=myDate.getMonth()+1
```

Day of month- which provides day of the month, such as 1, 24, 31, etc.
```
var day = myDate.getDate();
//or
var day = myDate.getUTCDate();
```

Day of week - which provides day of the week, such as 1, 6, etc.
```
var day = myDate.getDate();
//or
var day = myDate.getUTCDate();
```

Hours
```
var hours = myDate.getHours();
//or
var hours = myDate.getUTCHours();
```
Minutes
```
var minutes = myDate.getMinutes();
//or
var minutes = myDate.getUTCMinutes();
```

Seconds
```
var seconds = myDate.getSeconds();
//or
var seconds = myDate.getITCSeconds();
```

Incrementing one day to a date
```
var myDate = new Date();
//add a day to the date
myDate.setDate(myDate.getDate() + 1);
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

Reference:

https://www.youtube.com/watch?v=CnozSz4wbBQ


**Moment JS**

![Moment](https://i.imgur.com/o7K483F.jpg "Photo by Matej from Pexels")

Another cool package which allows us to get variety of formatting options with dates is called <code>MomentJS</code>. Plain Javascript does not have as many options as Moment JS.

In order to install it:
```
npm install moment --save
```

In order to add it to your React JS file, paste this **AFTER** all imports:
```
var moment = require('moment');
```

Then you can use it and create a new date variable with the date of TODAY (now):
```
var myDate=moment();
```

> An object will be returned with many properties.

> We can also create a date variable from existing value if we know its formatting:
```
var itIsADate="01.01.2020"
var myDate=moment(itIsADate, "DD.MM.YYYY");

```

> We can then transform our date to any format:
```
var newDate=moment(myDate).format("YYYY-MMM-DD")
//Result: 2016-Jan-01
```

Reference:

https://momentjs.com/docs

![Dates](https://i.imgur.com/bNckChk.jpg "Photo by Bich Tran from Pexels")