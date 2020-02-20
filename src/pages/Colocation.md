---
title: "Colocation"
date: "2020-02-20"
---

![](https://i.imgur.com/xI4DXv7.jpg "Photo by ELEVATE from Pexels")

> "Place code as close to where it's relevant as possible."

Kent C. Dodds

> "Things that change together should be located as close as reasonable."

Dan Abramov

This means for example if a component is using some functions and these functions are not used in any other places, then place those functions within the same file but outside of the component, rather then creating an external file for for each function. 

All elements that logically belong to gether should be kept close to each other. 

Same goes for tests, these should be kept as close to the function files as possible. If there are only couple of function files, their tests can reside next to them. This is to remind the future you or other developers not to forget to update tests when functions change. If there are many function files and main folder would be clattred, create a dedicated subfolder for tests.

Reference:

https://kentcdodds.com/blog/colocation/

![](https://i.imgur.com/VwFJtH1.jpg "Photo by Anastasiya Lobanovskaya from Pexels")