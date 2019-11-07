---
title: "Children"
date: "2019-10-23"
---

There are two ways how we can declare innerHTML

**a) Writing text between opening and closing tag**:

```
<Button name="ABC" color="green">I AM CHILD</Button>
``` 

**b) Writing children property**:


``` 
<Button children="I AM A CHILD" name="ABC" color="green"/>
```

> Please note: when using second option I need to have self closing tag, because if I have ```<Button></Button>``` an empty stace between opening and closing tag will overwrite my children property!

>Please note: It is a good practice to write children between opening and closing tags (option A), rather than using it as property (option B)

When we then define the button component, we can retrieve the children props like this

**Alternative A**: Passing word children and then accessing it by word children

```
const Button = ({children}) => {
  return (
      <button>{children}</button>
  )
}

```
**Alternative B**: Passing word props as arguments and then accessing props like so: props.children
``` 
const Button = (props) => {
  return (
      <button>{props.children}</button>
  )
}
```

