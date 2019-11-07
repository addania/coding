---
title: "Accessing Props"
date: "2019-10-26"
---

There are two ways how to access props passed to a component.

**a)** Using props as argument of the functional component and accessing them with <code>props.name</code>

```
const Button = (props) => {
  return (
      <p>{props.name}</p>
  )
}
```

**b)** or alternatively passing name of prop inside curly brackets of the functional component and then accessing props like: <code>name</code>
```
const Button = ({name}) => {
  return (
      <p>{name}</p>
  )
}
```
Alternative b allows only passing specific props to the component, instead of pass ALL of them.




