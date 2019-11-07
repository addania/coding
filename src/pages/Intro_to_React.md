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