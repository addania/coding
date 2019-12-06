---
title: "Exports"
date: "2019-12-01"
---

Let's talk about exporting / importing / ... and ... smugglingg :)


There are 2 types of exports: **default** and **named** exports. And so are the imports.


**Named exports** are exported with a given name of the component. We cant change the name of the exported component.

**Default exports** means we can change name of the exported component.

Example of default export:
```
export default App
```

Then import looks like this:
```
import App from "./app.js";
```

But we can also write
```
import Unicorn from "./app.js";
```

Notice the lack of curly braces around the name.

Example of named export:
```
export class App extends React.Componenet(){
}
```

Importing named export:
```
import { App } from "./app.js"
```
Notice how we neeed to wrap the name of component into curly braces.

In the above example we cannot change the name, unless I write as:
```
import { App as Unicorn } from "./app.js"
```

Alternative to named export is:
```
class App extends React.Componenet(){
...}
export {
  App,
  ..
}
```

In above example I can export more component at the same time:
```
export {
  App, 
  Something,
  AnotherThing
}
```
