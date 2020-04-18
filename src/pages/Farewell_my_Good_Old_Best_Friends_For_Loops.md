---
title: "Farewell my Good Old Best Buddies For Loops"
date: "2019-12-26"
category: "knowledge-base"
---

![](https://i.imgur.com/hw5qopR.jpg "Photo by Helena Lopes from Pexels")

I will miss you! Trully. All the code adventures we have been through together. Those code advent loop incention craziness we did together :) I shall never forget you and we WILL meet again. But the new era of functional programming came and it is time to explore new possibilities of xmap, filter and reduce. They say it is more elegant, more sexy and more readable with map, filter and reduce. I would argue against it... but I also want to learn new concepts and hone my skills. So here we are, let's explore unknown together.

**MAP**

Map can be used on an array to iterate over EVERY SINGLE element of it. And here we go already, right from the start, drawback of map compared to for loops is that map cannot be broken out of, whereas in loops we can use simple <code>break;</code> to get out of it (just saying ;) )

Nevertheless, map will need an array to loop over and then a function. This function will be performed over every single element of the array and it will return A NEW array where each element will be whatever the function returns

Example:
```
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
```
This code can be re-written to make it more clear:
```
const array1 = [1, 4, 9, 16];
const myFunction = (x) => {
  const double = x*2;
  return double
}
const map1 = array1.map(myFunction);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

Yet another way how to write this code:
```
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(function(x){ return x * 2});
console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

Compare especially **EXPLICIT RETURN**:
```
const map1 = array1.map(function(x){ return x * 2});
```
with this **IMPLICIT RETURN**:
```
const map1 = array1.map(x => x * 2);
```

Here we can see more clearly that map receives a FUNCTION as input. This function can be either declared somewhere else (second example) or it can be anonymous function directly in between of the .map brackets (first example).

It is also more clear that the body of the function can be literally anything, any calculation, but what matters is what is the return of that function. Because the return of the function will define what the new element of the new array will be.

Some code re-factoring from for loops to using map:

old:
```
function formatImpressions(input) {
  // Receives an array of objects as inputs and substitutes empty or null impressions with 0.
  for (let row = 0; row < input.length; row++) {
    if (!input[row].Impressions) {
      input[row].Impressions = 0;
    }
    if (!input[row].Clicks) {
      input[row].Clicks = 0;
    }
  }
  return input;
}
```

new:
```
export const formatImpressions = input => {
  // Receives an array of objects as inputs and substitutes empty or null impressions with 0.

  const formatNumbers = row => {
    if (!row.Impressions) {
      row.Impressions = 0;
    }
    if (!row.Clicks) {
      row.Clicks = 0;
    }
    return row;
  };
  const output = input.map(formatNumbers);
  return output;
};
```

old:
```
function extractDate(input) {
  // Receives an array of objects as input and extracts date entries into a Date format. Outputs data as "dataWithDate".
  const dataWithDate = [];
  for (let row = 0; row < input.length; row++) {
    const entry = { ...input[row] };
    const oldDate = input[row].Date;

    const year = oldDate.slice(6, 10);
    const month = oldDate.slice(3, 5);
    const day = oldDate.slice(0, 2);
    const newDate = year + "-" + month + "-" + day;
    const dateFormatted = new Date(newDate);
    entry.Date = dateFormatted;
    dataWithDate.push(entry);
  }
  return dataWithDate;
}
```

new:
```
export const extractDate = input => {
  // Receives an array of objects as input and extracts date entries into a Date format. Outputs data as "dataWithDate".
  const convertDate = row => {
    const entry = { ...row };
    const oldDate = row.Date;
    const year = oldDate.slice(6, 10);
    const month = oldDate.slice(3, 5);
    const day = oldDate.slice(0, 2);
    const newDate = year + "-" + month + "-" + day;
    const dateFormatted = new Date(newDate);
    entry.Date = dateFormatted;
    return entry;
  };
  const dataWithDate = input.map(convertDate);
  return dataWithDate;
};
```

old:
```
import _ from "lodash";
function getMetrics(inputData, inputColumns) {
  // Receives an array of objects as inputData and array of unique keys as inputColumns.
  // Outputs array of column names which holds numeric values.
  const output = [];
  for (let item = 0; item < inputColumns.length; item++) {
    const col = inputColumns[item];
    if (_.isNumber(inputData[col])) {
      output.push(col);
    }
  }
  return output;
}
```

new:
```
export const getMetrics = (inputData, inputColumns) => {
  // Receives an array of objects as inputData and array of unique keys as inputColumns.
  // Outputs array of column names which holds numeric values.
  const output = inputColumns.filter(col => typeof inputData[col] === "number");
  return output;
};
```

old:
```
import _ from "lodash";
function getDimensions(inputData, inputColumns) {
  // Receives an array of objects as inputData and array of unique keys as inputColumns.
  // Outputs array of column names which holds string values (excluding date formats).
  const output = [];
  for (let item = 0; item < inputColumns.length; item++) {
    const col = inputColumns[item];
    if (_.isString(inputData[col])) {
      output.push(col);
    }
  }
  return output;
}
```

new:
```
export const getDimensions = (inputData, inputColumns) => {
  // Receives an array of objects as inputData and array of unique keys as inputColumns.
  // Outputs array of column names which holds string values (excluding date formats).
  const output = inputColumns.filter(col => typeof inputData[col] === "string");
  return output;
};

```

old:
```
const moment = require("moment");
function formatDate(input) {
  // Receives an array of objects as input and formats date entries into a "DD. MMM" format. Outputs data as "dataWithDate".
  const formattedDateArray = [];
  for (let row = 0; row < input.length; row++) {
    const entry = { ...input[row] };
    const oldDate = input[row].Date;
    const dateFormatted = moment(oldDate, "DD.MM.YYYY").format("DD. MMM");
    entry.Date = dateFormatted;
    formattedDateArray.push(entry);
  }
  return formattedDateArray;
}
```

new
```
const moment = require("moment");
export const formatDate = input => {
  // Receives an array of objects as input and formats date entries into a "DD. MMM" format. Outputs data as "dataWithDate".

  const convertDate = row => {
    const entry = { ...row };
    const oldDate = row.Date;
    const dateFormatted = moment(oldDate, "DD.MM.YYYY").format("DD. MMM");
    entry.Date = dateFormatted;
    return entry;
  };
  const formattedDateArray = input.map(convertDate);
  return formattedDateArray;
};
```

**FOR EACH**
For each is very similar to map. It iterates through each item of and array and performs a function over it. BUT it DOES NOT returns a NEW array. The forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.
```
const books = ["The Expanse", "Lord Of The Rings", "Harry Potter"];
books.forEach(function(book, i){
    console.log(book);
});

//output in console.log:
The Expanse
VM761:2 Lord Of The Rings
VM761:2 Harry Potter
```

Notice how books.forEach is NOT assignd to ANY const.

We can use forEach also to create a new array, but we would need to create it MANUALLY

```
const items = ['item1', 'item2', 'item3'];
const copy = [];
items.forEach(function(item){
  copy.push(item);
});
```

**FILTER**

Filter iterates over each element of an array and ONLY returns those elements, which fulfill a condition which is given within the function.
```
const words = ['react', 'javascript', 'html', 'css'];
const result = words.filter(word => word.length > 5);
// result: ["javascript"]

const result2 = words.filter(word => word.length < 5);
// result2: ['html', 'css'];
```

Filter can be re-factored in a way that we declare a function:
```
const words = ['react', 'javascript', 'html', 'css'];
const isLonger = (word) => {
  return word.length > 5;
}
const result = words.filter(isLonger);
// result: ["javascript"]
```

**REDUCE**

Reduce also iterates over every single element of an array and it also has an accumulator which is calculating for example SUM of all items. Result of reduce can be a single number (it can also be an array,  but for basic use it will return one value).

Reduce receives 2 parameters, one is a function which will be performed over each element and second (optional) parameter is the initial value from which we start calculating.

Reduce returns a new value as a result of calculations

```
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
const result = array1.reduce(reducer));
// result: 10

// 5 + 1 + 2 + 3 + 4
const result = array1.reduce(reducer, 5));
// result: 15
```

old:
```
import _ from "lodash";
function calculateAggregates(array) {
  // Receives an array of data as input and outputs an array of data aggregated per date.
  // First element of the output array is array of aggregated impressions.
  // Second element of the output array is array of aggregated clicks.
  // Third element of the output array is array of unique dates.
  let groupByDate = _.groupBy(array, "Date");
  let uniqueDates = _.keys(groupByDate);
  let impressionsArray = [];
  let clicksArray = [];

  for (let dayEntry = 0; dayEntry < uniqueDates.length; dayEntry++) {
    let totalImpressions = 0;
    let totalClicks = 0;

    for (
      let dataRow = 0;
      dataRow < groupByDate[uniqueDates[dayEntry]].length;
      dataRow++
    ) {
      totalImpressions =
        totalImpressions +
        groupByDate[uniqueDates[dayEntry]][dataRow].Impressions;
      totalClicks =
        totalClicks + groupByDate[uniqueDates[dayEntry]][dataRow].Clicks;
    }
    impressionsArray.push(totalImpressions);
    clicksArray.push(totalClicks);
  }
  return [impressionsArray, clicksArray, uniqueDates];
}

```

new
```
import _ from "lodash";

export const calculateAggregates = array => {
  // Receives an array of data as input and outputs an array of data aggregated per date.
  // First element of the output array is array of aggregated impressions.
  // Second element of the output array is array of aggregated clicks.
  // Third element of the output array is array of unique dates.
  const groupByDate = _.groupBy(array, "Date");
  const uniqueDates = Object.keys(groupByDate);
  const impressionsArray = uniqueDates.map(item => {
    const sumImp = groupByDate[item].reduce((acc, obj) => {
      return acc + obj.Impressions;
    }, 0);
    return sumImp;
  });
  const clicksArray = uniqueDates.map(item => {
    const sumClick = groupByDate[item].reduce((acc, obj) => {
      return acc + obj.Clicks;
    }, 0);
    return sumClick;
  });
  return [impressionsArray, clicksArray, uniqueDates];
};

```

**FILTER AND MAP COMBO **
Powerful way of combining filter and map to get for example a list of guys which are SINGLE :) :) :) very useful (muhahahahaaa)
```
const guys = [
  {name: 'Danny', single: true},
  {name: 'Calvin', single: true},
  {name: 'Mike', single: true},
  {name: 'Jeff', single: false}
];

const isSingle = person => person.single;
const getName = person => person.name;
const preys = guys.filter(isSingle).map(getName);
console.log(preys) // ["Danny", "Calvin", "Mike"]

```

Reference:

https://www.codereadability.com/coding-without-loops/

https://kuanhsuh.github.io/JS-functional-programming.html

![](https://i.imgur.com/fIyDFmN.jpg "Photo by Pixabay from Pexels")