---
title: "How to create multiple variables"
date: "2019-12-09"
---

![Many](https://i.imgur.com/elDgUVi.jpg "Photo by Süleyman Şahan from Pexels")

It is possible to create multiple variables with a single <code>var</code>, <code>let</code> or <code>const</code> if we separate them with comma:
```
var myDate=new Date(), 
    date=myDate.getDate(), // shows number of day in MONTH (for example 24)
    day=myDate.getDay(), // shows number of day in WEEK (for example 6)
    month=myDate.getMonth()+1, // gives number of MONTH - starts from 0 for January - if you want 1 for January add +1
    year=myDate.getYear(); // give YEAR

```

Reference:

https://www.youtube.com/watch?v=CnozSz4wbBQ