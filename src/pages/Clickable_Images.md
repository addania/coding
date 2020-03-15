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
<label class="btn" for="btnControl" style="width:200px; padding: 0" ><img  src="https://i.imgur.com/N56WE3x.jpg" id="btnLeft" alt="Photo by R.Fera from Pexels" /></label>
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
<label class="btn" for="btnControl" style="width:200px; padding: 0" ><img  src="https://i.imgur.com/N56WE3x.jpg" id="btnLeft" alt="Photo by R.Fera from Pexels"  /></label>

>Yay! We have done this!

> Another interesting way to have a zoom effect:
```
<style>
.zoom {
    transition:transform 0.25s ease;
}
.zoom:hover {
    -webkit-transform:scale(4);
    transform:scale(4);
}
</style>
<img src="https://i.imgur.com/N4KOQ5H.jpg" class="zoom" style="width: 200px"  alt="Photo by H. Emre from Pexels" />
```
<style>
.zoom {
    transition:transform 0.25s ease;
}
.zoom:hover {
    -webkit-transform:scale(4);
    transform:scale(4);


}
</style>
<img src="https://i.imgur.com/N4KOQ5H.jpg" class="zoom" style="width: 200px" alt="Photo by H. Emre from Pexels" />


>Although this is now going beyond our container, still it is a first step to have a nice zoom. Can be of course polisheed further.

>Some more interesting thing can be found on [StackOverflow](https://stackoverflow.com/questions/13630229/can-i-have-an-onclick-effect-in-css/32721572)



> Lastly here is how we can use modals in in html file which looks realy great but unfortunately does not work in `.md` file.
```
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {font-family: Arial, Helvetica, sans-serif;}
#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}
#myImg:hover {opacity: 0.7;}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}
/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}
/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}
/* Add Animation */
.modal-content, #caption {  
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}
@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)} 
  to {-webkit-transform:scale(1)}
}
@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}
/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}
.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
</style>
</head>
<body>
<h2>Image Modal</h2>
<p>In this example, we use CSS to create a modal (dialog box) that is hidden by default.</p>
<p>We use JavaScript to trigger the modal and to display the current image inside the modal when it is clicked on. Also note that we use the value from the image's "alt" attribute as an image caption text inside the modal.</p>
<img id="myImg" src="https://i.imgur.com/fZibGvE.jpg" alt="Photo by Roberto Shumski from Pexels" style="width:100%;max-width:300px">
<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>
<script>
// Get the modal
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
</script>
</body>
</html>
```
[![](https://i.imgur.com/fZibGvE.jpg)](https://i.imgur.com/fZibGvE.jpg)<p style="font-size: 12px; text-align: right">_Photo by Roberto Shumski from Pexels_</p>