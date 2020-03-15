---
title: "Clickable Images"
date: "2020-03-15"
---


[![pic](https://i.imgur.com/4CmQr4y.jpg)](https://i.imgur.com/4CmQr4y.jpg)<p style="font-size: 12px; text-align: right">_Photo by Kirill Belotserkovsky from Pexels_</p>


> All cool images should be clickable. Because when you cannot click on somethign it does <code>not exist</code> :)

>So how to make our gorgeous image larger on click or hover?

> Let's go to our html file where we create a wrapper `div` tag around our `img` tag:

```
<div className="imageContainer">
    <img
        src="https://i.imgur.com/4CmQr4y.jpg"
        alt="Kirill Belotserkovsky"
    />
</div>

```
> Then in our css file we write following to add on hover effect:
```
.imageContainer > img:hover {
width: 800px;
height: 800px;
}
```

> Or add `active` which is on click effect:
```
.imageContainer > img:active {
width: 800px;
height: 800px;
}
```

> Another way is to use modals, which is a bit more complicated. But good example is in [w3schools](https://www.w3schools.com/howto/howto_css_modal_images.asp)


>In `.md` files we have a problem that we cannot really neatly work with external css files. but there is a way how you can make an image clickable:
```
[![pic](https://i.imgur.com/4CmQr4y.jpg)](https://i.imgur.com/4CmQr4y.jpg)
```
[![pic](https://i.imgur.com/5zSAEo3.jpg)](https://i.imgur.com/5zSAEo3.jpg)<p style="font-size: 12px; text-align: right">_Photo by Julius Silver from Pexels_</p>