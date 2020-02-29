---
title: "Tabula Rasa"
date: "2020-02-29"
---

![](https://i.imgur.com/ZnEqVOf.jpg "Photo by Pixabay from Pexels")

**Template literal**

In JSX land, we dont need to use any special character to write a string, all variables in between curly brackets will be interpreted as a string

```
<p>You clicked {this.state.count} times</p>
```

When we are in JS land, we need to explicitly say that a variable should be interpreted as a string by adding $ in front of the curly bracket

```
componentDidMount() { document.title = `You clicked ${this.state.count} times`; }
```