---
title: "React state immutability"
date: "2019-11-14"
category: "knowledge-base"
---

![](https://i.imgur.com/OULUQRu.jpg "Photo by Chokniti Khongchum from Pexels")

How to update an array state in React?

States in React are declared with const and therefore immutable. It means we cant (or rather shouldnt) manipulate them directly.

A quote from the official React documentation says:

*"Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable."*

What is direct manipulation?

Imagine we have this state:

```
const [array, setArray] = useState([1,2,3])
```

Then we try to manipulate it directly:

```
array = [4]
```

State should also not be MUTATED. What is mutation? It can be an array method that will CHANGE the state directly. For example push (adding one more element to array).

```
array.push(4);
```

Why mutation is bad? It has to do with how the memory works. 

When we create our state, for example:

```
const [array, setArray] = useState([1,2,3])
```

This variable will be created as an object in the memory on location lets say aaa and this object will be pointing to other memory locations for each of the elements in the array. Number 1 will have memory location xxx, Number 2 will have memory location yyy, etc). The ARRAY object in the memory location aaa only points to other memory locations. 

Imagine we now MUTATE/change the existing array by:

```
array.push(4);
```

This changes the EXISTING array, in memory however the memory location aaa of the WHOLE array object did NOT change (because it is not a NEW object, it is the SAME object, just mutated/slightly change). Only thing that changed is that ARRAY object on location aaa is now pointing also to number 4 located lets say on memory location qqq. If the memory location of the whole array did not change, the render of the whole component will not be triggered!!

In order to trigger the render, we need to create a NEW object in the memory! For example, creating a new array with new memory location which will be then set as the new state using <code>setArray(newArray)</code>.

Best way to create a new array and concatenate the new value to it is:



There are two array methods which ave potential to be used:

- array.push('new value')

- array.concat('new value')

<code>array.push('new value')</code> returns the **LENGHT** of the extended array, instead of the array itself! Moreover it MUTATES the array, so it should NOT be used.


<code>array.concat('new value')</code> returns a new array which can be then set to OVERWRITE the state used useState hook.


>Great source: 

https://blog.logrocket.com/immutability-in-react-ebe55253a1cc/


> Even greater resource:

https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array
