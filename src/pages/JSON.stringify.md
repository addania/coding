---
title: "JSON.stringify"
date: "2019-10-17"
---
Have you wondered how you can actually output an array in exactly the same form as you declare it?

> Say we have array:
```
const myArray = [1, 2, 4];
```
> If you display it just as myArray, you will get: My array is 124
```
<p>My array is {myArray}</p>
```

> If you want to diplay however: My array is [1,2,4] you need to use JSON.stringify
```
<p>My array is {JSON.stringify(myArray)}</p>
```