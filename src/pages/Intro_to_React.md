---
title: "Intro to React"
date: "2019-09-28"
---

React is a library/framework of Javascript developed by Facebook. Reach allows to build interactive websites using components and allowing having html css and Javascript in one file. 
React is a closed environmnet and can be run in browser, on your local machine (my pc) or on phones (such as Android, etc).

When I am developing a website in React I need to be able to see what I am building. I can do these:

A/ doubleclick on my html file (index.html) and open it in browser. However, it won't really work. Other pages will not load, because I am only openineg filepath in browser.

B/ run a web server locally on my machine (pc)

In order to run a web server on my machine, I need to install node.js

In order to be able to use React in a BROWSER I need package called reactDOM package if I want to display it in browser. If I dont want to install reactDOM package, I can still use script tags in my html file, like so:
```
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
```
> More on this in official documentation here:

https://reactjs.org/docs/add-react-to-a-website.html

These script tags in html are equivalent to a file in my project called package.json which is automatically provided by Gatsby:
```
"dependencies": {
    "gatsby": "^2.15.28",
    "react": "^16.10.0",
    "react-dom": "^16.10.0"
},
```



> There are 2 ways how I can import react. A) I need to 
```
import React from "react";
```
>Then Im using:
```
class MyClass extends React.Component(){

}
```

> B) I can only import { Component } from "react"
```
import { Component } from "react";
```

>Then Im using:
```
class MyClass extends Component(){

}
```

> I can import ReactDOM in ways. Way number A is below. This way we import everything that is in ReactDOM, all their methods. On of their methods is called render:
``` 
import ReactDOM from "react-dom";
```

> Then I am using this rendeer method:
```
ReactDOM.render(<p>Hi</p>, document.getElementById("app"));
```
> Another way to import render: si the way B. In this way we are eonly cherr/picking to import one spcifi method from reactDOM and this method is calld render:
```
import { render } from"react-dom";
``` 
> Then I am using this rendeer method:
```
render(<p>Hi</p>, document.getElementById("app"));
```

> In render method we have 2 possibilities to generate our component in a specific DOM element:

> One way is to use document.getElementById
```
render(<p>Hi</p>, document.getElementById("app"));
```

> Another way is to usee document.querySelector:
```
render(<p>Hi</p>, document.querySelctor("#app"));
```

> Within react return statement I can only add  parent component:
```
class MyClass extends React.Component(){
render (){
    return (
        <p>Hello</p>
    )
  }
}
```
> I cannot write this:
```
class MyClass extends React.Component(){
render (){
    return (
        <p>Hello</p>
        <p>World</p>
    )
  }
}
```
> To solve to have paralell tags, we can wrap them in div:
```
class MyClass extends React.Component(){
render (){
    return (
        <div>
          <p>Hello</p>
          <p>World</p>
        </div>  
    )
  }
}
```

> Alternatively if we dont want to wrapt them in divs, we can wrap them in React.Fragment:
```
class MyClass extends React.Component(){
render (){
    return (
        <React.Fragment>
          <p>Hello</p>
          <p>World</p>
        </React.Fragment>  
    )
  }
}
```
