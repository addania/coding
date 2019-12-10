---
title: "Playing with Datee formats in Javascript"
date: "2019-12-07"
---

To create a date of TODAY in this exact second, we use <code>new Date()</code> with empty brackets:
```
var myDate=new Date();

```


Now our myDate is of a date type. We can extract different information from it like:

-  day of month, 

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

