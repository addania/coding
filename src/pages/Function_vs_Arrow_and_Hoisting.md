---
title: "Function definition: Arrow vs Function, Hoising"
date: "2019-10-18"
---

If we use function definition like this (using arrow functions):
```
const Button = () => {
}
```

and this definition is AFTER code where it is called, it might still not be defined.

But if we use:
```
 function Button () {
}
```

such function definition can be anywhere at the end of the file, but it will be **HOISTED**. 

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 

This allows you to  be able to call functions before you wrote them in your code.

> Reference:

https://scotch.io/tutorials/understanding-hoisting-in-javascript