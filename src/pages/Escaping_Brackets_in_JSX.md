---
title: "Escaping curly brackets in JSX"
date: "2019-10-28"
---
Only one advice here:

```
RUUUUUUUUUUN
```

:)

Apart from that, imagine you want to display following text in a p tag :
```
the way you use props is {props.name}
```
If you write the code like this:
```
<p>the way you use props is {props.name}</p>
```
you will get an error that props.name is not defined

It is because curly braces means injecting JS in JSX so the program expects for example a variable, not a plain text.

Solution is to use {'{}'} like so:
```
<p>the way you use props is {'{props.name}'}</p>
```