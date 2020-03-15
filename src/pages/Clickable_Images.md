---
title: "Clickable Images"
date: "2020-03-15"
---


[![](https://i.imgur.com/4CmQr4y.jpg)](https://i.imgur.com/4CmQr4y.jpg)<p style="font-size: 12px; text-align: right">_Photo by Kirill Belotserkovsky from Pexels_</p>


> All cool images should be clickable. Because when you cannot click on somethign it does <code>not exist</code> :)

>So how to make our gorgeous image larger on click or hover?

> Let's go to our html file where we create a wrapper `div` tag around our `img` tag:

```
<div class="imageContainer" style="width: 100px">
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


>In `.md` files we have a problem that we cannot really import external css files. But there is a way how you can make an image clickable:
```
[![pic](https://i.imgur.com/VvvlEcI.jpg)](https://i.imgur.com/VvvlEcI.jpg)
```
> Result will look like this:

[![pic](https://i.imgur.com/VvvlEcI.jpg)](https://i.imgur.com/VvvlEcI.jpg)<p style="font-size: 12px; text-align: right">_Photo by eberhard grossgasteiger from Pexels_</p>

> It is not sooo perfect as it opens in the same page, but still something.

>And what I just discovered is that we can use `style` tags in and `.md` file!! This opens up a lot of new unexplored possibilities. 
😈😈😈

> In an `.md` file I can write:
```
<style>
.imageContainer > img:hover {
max-width: 760px;
}
</style>

<div class="imageContainer" style="width: 200px">
    <img
        src="https://i.imgur.com/5zSAEo3.jpg"
        alt="Photo by Julius Silver from Pexels"
    />
</div>
```

> The result will look like this. When I hover over on the image with mouse, it will become bigger:
 
<style>
.imageContainer > img:hover {
max-width: 760px;
}
</style>

<div class="imageContainer" style="width: 200px">
    <img
        src="https://i.imgur.com/5zSAEo3.jpg"
        alt="Photo by Julius Silver from Pexels"
    />
</div>

> How about clicking now? Integrate following code to your `.md` file. Then you will need to click **and hold** the click:
```
<style>
.imageContainer2 > img:active {
max-width: 760px;
}
</style>

<div class="imageContainer2" style="width: 200px">
    <img
        src="https://i.imgur.com/48E34Uh.jpg"
        alt="Photo by Quang Nguyen Vinh from Pexels"
    />
</div>
```

<style>
.imageContainer2 > img:active {
max-width: 760px;
}
</style>

<div class="imageContainer2" style="width: 200px">
    <img
        src="https://i.imgur.com/48E34Uh.jpg"
        alt="Photo by Quang Nguyen Vinh from Pexels"
    />
</div>

>Downside is that you really need to hold the click... Well, that is weird, isn't it?

> Now let's try a small hack with input, button and label and see it we can make it work. Paste following code:
```
<style>
#btnControl {
    display: none;
}
#btnControl:checked + label > img {
   max-width: 760px;
}
</style>
<input type="checkbox" id="btnControl"/>
<label class="btn" for="btnControl" style="width:200px; padding: 0" ><img  src="https://i.imgur.com/N56WE3x.jpg" id="btnLeft"  /></label>
```

>Result will be a nice clickable image:

<br/>

<style>
#btnControl {
    display: none;
}

#btnControl:checked + label > img {
   max-width: 760px;
}
</style>

<input type="checkbox" id="btnControl"/>
<label class="btn" for="btnControl" style="width:200px; padding: 0" ><img  src="https://i.imgur.com/N56WE3x.jpg" id="btnLeft"  /></label>

>Yay! We have done this!

>Some more interesting thing can be found on [StackOverflow](https://stackoverflow.com/questions/13630229/can-i-have-an-onclick-effect-in-css/32721572)