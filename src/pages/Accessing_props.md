---
title: "Accessing Props"
date: "2019-10-19"
---

There are two ways to access props. 

a) Using props as argument of the functional component and accessing them like: props.onClick

```
const Button = (props) => {
}
```

b) or alternatively passing name of prop inside curly brackets of the functional component and then accessing props like: onClick
```
const Button = ({onClick}) => {
}
```

Alternative b) allows only passing specific props to the component.

```
<button onClick={handleClick} name={"pete"} id={"schw"}>
        Add Pete to array
      </button>
```
or 
```
<button onClick={handleClick} name={"lubo"} id={"kost"} children="Add Lubo to array" />
```
But then I need to have self closing tag, because if I have </button> empty stace before closing and opening tag will overwrite my children property
        