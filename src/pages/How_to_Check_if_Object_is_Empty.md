---
title: "How to check if object is empty"
date: "2019-12-10"
---

![Empty](https://i.imgur.com/6uOGygm.jpg "Photo by Pixabay from Pexels")

If you want to put a condition which verifies if the object is empty, you can use following:

ECMA 7+:
```
// because Object.entries(new Date()).length === 0;
// we have to do some additional check
Object.entries(obj).length === 0 && obj.constructor === Object
```

ECMA 5+:
```
// because Object.keys(new Date()).length === 0;
// we have to do some additional check
Object.keys(obj).length === 0 && obj.constructor === Object
```

Pre-ECMA 5:
```
function isEmpty(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
}
```

Lodash
```
_.isEmpty({}); // true
```

Reference:

https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object

![Empty](https://i.imgur.com/v8eHezH.jpg "Photo by Sebastian Palomino from Pexels")

