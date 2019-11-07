---
title: "Debugging"
date: "2019-10-25"
---

When we are in the code and we add somewhere this line:
```
debugger;
```
we are able to execute code only up until this line. 

You need to go to your website and open the DEV TOOLS (without opening dev tools you wont be able to see the debugger stopping at the given place)

Automatical execution will stop and we will be able to use console to check for any value of the variable. 

For example if we put debugger to onClick event handler, we can type in console:
```
event
```
and we will see the whole event object.

we can put
```
event.target
```

and see all the options we have that can be used as event.target. This set it pre-defined and doesnt display any custom value.

To read custom properties, we can use:
```
event.target.attribute
```
For example if we gave our button attribute last, then we can access it by
```
event.target.attribute.last
```
If we wanted to access what is in between of the closing and ending tag of button we write
```
event.target.attribute.innerHTML
```
Please Note: React does not persist the events. Therefore many of those values might be empty. We can add this line to our code:
```
event.persist();
```