---
title: "Best Practices"
date: "2020-02-21"
category: "knowledge-base"
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

Use latest ES6 arrow function syntax:
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

> **Do not use abbreviations**

All names of variables, functions, components, etc. should be always full names, even if it is a common abbreviation

- n => number
- i => index
- e => event
- acc => accumulator
- min => minumum or minus

> **Use positive names**

Avoid using negative names, because if you need to use them in negative conditions, we would have double negations. Which is unnecessary complication.

Example:
- notAvailable
- nonUser

Instead of:
```
if ( !notAvailable ) {}
```

we can use:
```
if ( available ) {}
```

> **Do not use types in names**

Since Typescript is used, it is not necessary to name variables with types:

- nameString
- ListComponent
- computeFunction

Words like <code>string</code>, <code>component</code>, <code>function</code> are redundant

> **Use named exports**

Avoid default exports: 
```
export default App
```

Instead use named exports:
```
export const App = () => (...)

```

An interesting article about this topic is here:

https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/

> **Keep relevant context**

Sometimes modules which are imported from some other place are too general, like <code>refresh</code>. We still want to keep its context, that it is coming from api.

Instead of:
```
import { refresh } from 'api'
...
refresh()
```

it is better to use:
```
import * as api from 'api'
...
api.refresh()
}

```

Same goes for React. We want to know which elements are imported from React directly:
```
import * as React from 'react'
```

> **Use atomic commits**

Each commit should only consist of one change. Therefore avoid needing word <code>and</code> in the commit message. Always think about what is the minimum viable commit - smallest useful change.

> **Use commits to tell stories about the code**

Good commit messages are very helpful to future you or to other developers to understand code changes and reason behind those changes. Good commit messages should always convey <code>INTENT</code>.

Good commit message consists of:

1// Commit title - a short one-liner

2// At least one line break - this line break then allows to neatly list all commit titles with:
```
git log --pretty=oneline
```

3// Commit body - longer description of what the change does and an explanation why the change was done

4// Contex - outline context or alternatives you considered

Commit messages can contain link to bug tracking system or link to blog posts which explain the problem

> **Rename or move, then commit**

Good practice is to first rename or move file, then commit (without any further changes to the file)! Only after the commit you should do more changes to the file. Reason is, that if you rename or move file AND make changes to it, in the change history it will be shown as if entire file was removed and new one was added. You will not be able to track and compare changes within the file.

```
git mv oldfile newfile
git commit -m "moved oldfile to newfile"
```
> **Review your commit history** 

You should review the development history so that you can tell meaningful stories from it, rather than having a scatterplot of all commits. To remove, reorder, edit, merge and split commits use:
```
git rebase --interactive
```

> **Deconstruct all props**

Do not simply use <code>(props)</code>

Instead of:
```
export const Subheader = (props) => {}
```

deconstruct all props:
```
export const Subheader = ({ text, color, dimensions }) => {}
```

> **Object keys should be camelCased**

Instead of:
```
const data={
  Date: "2020-02-20",
  Impressions: 152369
}
```

we should implement camelCase:
```
const data={
  date: "2020-02-20",
  impressions: 152369
}
```

> **Functions should not have React dependency**

Basically use a component when we need to display HTML. Use functions without React dependency

> **Use plural name if you generate more items**

If you have a component within which you map through a list and then generate multiple items, then name of the component should be plural.

Example: Filter => Filters

> **Avoid using meaningless text in links**

For example <code>in this article</code> or <code>here</code>

![](https://i.imgur.com/XREQjDp.jpg "Photo by Jeswin Thomas from Pexels")


