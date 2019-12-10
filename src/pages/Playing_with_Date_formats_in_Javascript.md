---
title: "Playing with Date formats in Javascript"
date: "2019-12-07"
---

![Dates](https://i.imgur.com/ooqUgWd.jpg "Photo by Bich Tran from Pexels")

To create a date of TODAY in this exact second, we use <code>new Date()</code> with empty brackets:
```
var myDate=new Date();

```

Now our <code>myDate</code> is of a date type. We can extract different information from it like:

- day of month, 

- day of week, 

- month, 

- year, etc.

```
var myDate=new Date(), 
    date=myDate.getDate(), // shows number of day in MONTH (for example 24)
    day=myDate.getDay(), // shows number of day in WEEK (for example 6)
    month=myDate.getMonth()+1, // gives number of MONTH - starts from 0 for January - if you want 1 for January add +1
    year=myDate.getYear(); // give YEAR

```

Reference:

https://www.youtube.com/watch?v=CnozSz4wbBQ

**Moment JS**

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