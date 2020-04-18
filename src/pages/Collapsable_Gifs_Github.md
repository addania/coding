---
title: "Collapsable gifs in Github"
date: "2020-03-29"
category: "knowledge-base"
---

[![](https://i.imgur.com/9CkwiRc.jpg)](https://i.imgur.com/9CkwiRc.jpg)<p style="font-size: 12px; text-align: right">_Photo by Quang Nguyen Vinh from Pexels_</p>

Recently I have dicovered a cool way to add gifs or images to Github. Instead of having an issue or PR full of gifs or picture and therefore very little readable, it is possible to collapse them in a very elegant way.

This is how it looks collapsed:

![](https://i.imgur.com/0esh5A2.png)

This is how it looks expanded:

![](https://i.imgur.com/KcxchDF.png)

In order to do it, add:
```
<details><summary>GIF</summary>

![]()

</details>
```
or

```
<details><summary>IMAGE</summary>

![](https://i.imgur.com/9CkwiRc.jpg)

</details>
```
It is very important that you include blank spaces between  the lines, else it will not work. 

<code>```![]()```</code> is a standard way how Github adds images of gifs when you simply CTRL + V or drag and drop them.

<code>GIF</code> or <code>IMAGE</code> is just a random name which will appear next to the collapsable arrow.

Yay, success :) 