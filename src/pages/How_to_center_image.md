---
title: "How to center an image"
date: "2019-10-03"
---

> It took me a while to figure out how to position an image tag or video tag. I was first playing around with divs only to realize there is an easy way how to position image or video tag directly
```
img{
  display: block;
  margin-right: auto;
  width: 50%
}
```
```
video {
  margin-left: auto;
  margin-right: auto;
  display: block
}
```

> Another option is to use margin auto and width. This approach will center an element within its container (relative to the container). Some pre-requisites: 

1// Element must be have width smaller than its container. 
2// Width of the element must be set
3// Margin should have top and bottom (first value in code below) to be set, for example to 0 or XX pixels
4// Margin for right and left (second value in the code below) should be set to auto (where auto means horizontal margin will be set automatically in order to center the element within its container depending on the width of element and the container)

```
div {
  width: 300px:
  margin: 0px auto;
}
```