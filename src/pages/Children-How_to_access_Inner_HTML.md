---
title: "Children - how to access inner HTML"
date: "2019-10-23"
---

![](https://i.imgur.com/YsPOiRH.jpg "Photo by Pixabay from Pexels")

Ever wodered how to access inner html of an element? Lets say we want to work with whatever is between closing and opening brackets of a button:
```
<Button name="ABC" color="green">I AM CHILD</bButton>
```

There are two ways how we can declare innerHTML

**a) Writing text between opening and closing tag**:

```
<Button name="ABC" color="green">I AM CHILD</Button>
``` 

**b) Writing children property**:


``` 
<Button children="I AM A CHILD" name="ABC" color="green"/>
```

> Please note: when using second option we need to have self closing tag, because if I have:
```
<Button children="Hello"></Button>
``` 

an empty space between opening and closing tag will overwrite my children property!

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

