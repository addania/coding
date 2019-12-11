---
title: "Accessing Props"
date: "2019-10-26"
---

![Access](https://i.imgur.com/fEZTMxH.jpg "Photo by Gnist Design from Pexels")

There are two ways how to access props passed to a component.

**a)** Using props as argument of the functional component and accessing them with <code>props.name</code>

```
const Button = (props) => {
  return (
      <p>{props.name}</p>
  )
}
```

**b)** Passing name of prop inside curly brackets of the functional component and then accessing props with <code>name</code>
```
const Button = ({name}) => {
  return (
      <p>{name}</p>
  )
}
```
Alternative b allows only passing specific props to the component, instead of passing ALL of them.




