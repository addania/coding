---
title: "Array Methods .map"
date: "2019-11-22"
---

<code>.map</code> method is used to iterate through all the array items. It requires a function after the brackets. Function takes argument for example string (but can be called differently) which means each item from the array through which we will iterate. It returns the NEW array. NEW Array will consist of items and each item will contain whatever is a return from the function (for example: <li>{string}</li>)

```
const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map(string => <li>{string}</li>);
<ul>{listItems}</ul>
```