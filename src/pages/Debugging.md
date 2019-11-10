---
title: "Debugging"
date: "2019-10-25"
---

Imagine we add to our code a line like this:
```
debugger;
```
Then we are able to execute code only up until this line. 

You need to go to your website and open the DEV TOOLS (without opening the dev tools you won't be able to see the debugger stopping at the given place).

Automatical execution will stop and we will be able to use console to check for any value of our variable and hence check if all variables have correct values. 

For example if we put debugger to onClick event handler, we can type in console:
```
event
```
and we will see the whole event object.

We can put
```
event.target
```

and see all the options we have that can be used as event.target. Target.event set is pre-defined and doesn't display any custom values, like prop names.

To read custom properties, we can use:
```
event.target.attribute
```
For example if we gave our button attribute <code>user</code>, then we can access it by
```
event.target.attribute.user
```
If we wanted to access what is in between of the closing and ending tag of button we write
```
event.target.innerHTML
```
Please Note: React does not persist the events. Therefore many of those values might be empty. We can add this line to our code:
```
event.persist();
```