---
title: "Escaping curly brackets in JSX"
date: "2019-10-28"
---

Imagine you want to diplay in a p tag the following:
the way you use props is {props.name}

If you write the code in the following way:
```
<p>the way you use props is {props.name}</p>
```
you will get an error that props.name is not defined

It is because curly braces means injecting JS in JSX so the program expects for example a variable, not a plain text.

Solution is to use {'{}'} like so:
```
<p>the way you use props is {'{props.name}'}</p>
```