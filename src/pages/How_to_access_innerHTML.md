---
title: "How to access inner HTML"
date: "2019-10-21"
---

Ever wodered how to access inner html of an element? Lets say we want to work with whatever is between closing and opening brackets of a button:
``` 
<button>Hello</button>
```
This is how we can access it: 
```
props.children
```
In fact we can also rewrite the whole tag:
```
<button children="Hello" />
```
Be careful not to do this:
```
<button children="Hello"></button>
```
Here property children will be overwritten by blank space between opening and closing tag