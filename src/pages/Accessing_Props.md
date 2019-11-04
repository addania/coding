---
title: "Accessing Props"
date: "2019-10-26"
---

There are two ways how to access props passed to a component

a) Passing word props as arguments and then accessing props like so: props.name
```
const Button = (props) => {
  return (
      <p>{props.name}</p>
  )
}
```

b) alternative is to pass only specific name of a prop
```
const Button = ({name}) => {
  return (
      <p>{name}</p>
  )
}
```
Alternative b allows only passing specific props to the component, instead of pass ALL of them


