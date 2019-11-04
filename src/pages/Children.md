---
title: "Children"
date: "2019-10-23"
---

There are two ways how we can declare innerHTML

a) Passing word props as arguments and then accessing props like so: props.name

```
<Button name="ABC" color="green">I AM CHILD</Button>
``` 

or

``` 
<Button children="I AM A CHILD" name="ABC" color="green"></Button>
```

When we then define the button component, we can retrieve the children props like this

Alternative A:

```
const Button = ({children}) => {
  return (
      <button>{children}</button>
  )
}

```
Alternative B:

``` 
const Button = (props) => {
  return (
      <button>{props.children}</button>
  )
}
```

