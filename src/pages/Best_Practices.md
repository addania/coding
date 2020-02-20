---
title: "Best Practices"
date: "2020-02-21"
---

![](https://i.imgur.com/gyWBniE.jpg "Photo by Pixabay from Pexels")

I would like to compile here couple of tips for the best practices I stumbled upon during my intro to programming universe :) Will be funny to review those in couple of years from now :)

> **Use Prettier**

Code should always be ... pretty :) and of course neatly formatted - really be picky here, have your code simply <code>AWESOME</code>
```
https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically
```

> **Fix ESLint warnings**

Always make sure you have fixed all the ESLint warnings!

> **Delete console.logs**

It certainly does not look professional to leave unintended console.logs which were part of your development or testing

> **Delete all comments**

Of course only those which are remnants of tests or unused code. Relevant comments should still be kept.

> **Never use let or var**

In React especially we want to avoid mutating variables. Therefore we use <code>const</code> instead which cannot be re-assigned. We should always keep in mind not the re-assign values.

> **Don't use mutating functions**

As above, in React we want to avoid any mutation. All functions which mutate should be avoided. Such are:
```
.push
.delete
```
Use non-mutating functions such as:
```
.map
.filter
```

> **Favour native ES6 functions**

If there is a ES6 native function available, use that one before you reach out for other libraries like <code>lodash</code> or <code>moment</code>.

> **Use pure functions**

All functions should be pure - same inputs always yields same output, no side-effects and no mutations.

> **Use arrow functions**

Do not declare functions with word <code>function</code>
```
function sum(a, b) {
 return a+b
}
```

Use latest ES6 syntax:
```
const sum = (a, b) => {
 return a+b
}
```

> **Use explicit return**

Avoid using word <code>return</code> if possible

Instead of:
```
const getDimensions = (inputData, inputColumns) => {
  return inputColumns.filter(column => typeof inputData[column] === "string");
}
```

it is better to write:
```
const getDimensions = (inputData, inputColumns) =>
  inputColumns.filter(column => typeof inputData[column] === "string");
```

> **Avoid creating unnecessary variables**

Instead of:
```
const parseData = csvData => {
  const jsonData = csvJSON(csvData);
  const formattedImpressions = formatImpressions(jsonData);
  const formattedDates = extractDate(formattedImpressions);
  const sortedData = sortArray(formattedDates);
  const tableColumns = getColumns(sortedData[0]);
  const metricColumns = getMetrics(sortedData[0], tableColumns);
  const dimensionColumns = getDimensions(sortedData[0], tableColumns);
  const finalData = formatDate(sortedData);
  return [finalData, metricColumns, dimensionColumns];
}

```
it is preferred to use:
```
const parseData = csvData => {
  const sortedData = sortArray(extractDate(formatMetrics(parseCsv(csvData))));
  return {
    sortedData: sortedData,
    metrics: getMetrics(sortedData[0], getColumns(sortedData[0])),
    dimensions: getDimensions(sortedData[0], getColumns(sortedData[0]))
  };
};
```

> **Separate concern**

This is really <code>THE topic</code>! Each element should only do one thing. Elements which logically go together should be kept close together. An element should not be concerned with anything that is not necessarily their business. Separate business logic from the presentation layer.

> **Add tests for all functions**

Each function should be tested properly. Thorough test suit will improve software quality, make your life easier in long run and enable you to catch errors early. Especially before they go to production.

> **Return objects rather then arrays**

If you need to output multiple values, do not use an array, use preferably an object where you specify what you are returning

Instead of:
```
const parseData = csvData => {
  ...
  return [finalData, metricColumns, dimensionColumns];
}
```
better practice is:
```
const parseData = csvData => {
  ...
  return {
    sortedData: sortedData,
    metrics: metrics,
    dimensions: dimensions
  };
}
```

> **Reduce lines of code**

Always strive for efficiency - less lines of code, less reading, less maintenance

> **Do not define a function within a function**

No function inception :) If you need to define sub-function, define it outside of an existing function (can still be in the same file)

> **Avoid repeating code**

Abstract anything into a function or a const, that would need to be repeated multiple times in code. It will allow you then to adapt changes in one place, instead of say...30

> **Remove legacy**

Check if all your functions, components, tests or dependencies are actually being used. It is often the case that we forget to remove a test after we have removed a function.



![](https://i.imgur.com/XREQjDp.jpg "Photo by Jeswin Thomas from Pexels")


