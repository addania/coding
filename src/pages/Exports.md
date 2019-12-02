---
title: "Exports"
date: "2019-12-01"
---

Exports/Imports


There are 2 types of exports: default and named exports.


**Deufalt exports** means we can change name of the exported component,

**Named exports** we cant change the name of the exported component, 

Example of default export:
```
export default App
```

Then Import looks like this:
```
import App from "./app.js";
```

But we can also write
```
import Unicorn from "./app.js";
```

Named export example:
```
export class App extends React.Componenet(){
...
}
```

Importing named export:
```
import { App } from "./app.js"
```

Above I cant change the name, unless I write as:
```
import { App as Unicorn } from "./app.js"
```

Alternative to named export is:
```
class App extends React.Componenet(){
...
}

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
