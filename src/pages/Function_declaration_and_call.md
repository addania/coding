---
title: "Function declaration and call"
date: "2019-10-20"
---

3 ways to define a function:
```
function bla() {
  return null
}
```
or
```
const blo = () => {
  return null
}
```
or
```
() => onClickZ(name, last) {
  return null
}
```

Above functions would be called like this:
```
bla()
blo()
onClickZ(name, last)
```
Parenthesis mean call function immediately and output whatever is in the return.

Referencing a function needs to be without parenthesis:
```
bla
blo
onClickZ
```
Referencing can be also done in event handlers like this
```
onChange={()=>onClickZ(name,last)}
```

Above example is useful when we need to provide arguments to the function. But if we simply wrote
``` 
onClickZ(name,last)
```
we would actually CALL function, hence we need to use:
```
()=>onClickZ(name,last)
```
in order to reference a function and not to directly CALL it.
