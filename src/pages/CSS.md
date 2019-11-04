---
title: "CSS"
date: "2019-10-11"
---
References:
> Amazing CSS course for beginners
https://www.codecademy.com/courses/learn-css/


Selectors
Enable to select certain html element(s) and apply CSS styles to it
>Selectors are how we can select certain html elements. In CSS there are 3 ways how we can select elements
A) by tag name - this scenario will style the teal colour to ALL p tags in the page

HTML:
<p>Hello Universe</p>

CSS:
p {
 color: tile;
}

B) by class name. In case of class names we need to pre-pend period in front of the class name. They are meant to bee ree-used over many elements.

HTML:
<p class="title">Hello Universe</p>

CSS:
.title {
 font-family: Arial;
}


C) By id of the element. Id is completely unique per site. We ned to pre-pend hashtag. An ID is meant to style only one element.


HTML:
<p id="large-title">Hello Universe</p>

CSS:
#large-title {
 font-size: 50px;
}

> Precedence of selectors: General rule is that more specific selector will be applied compared to more generic selector. ID selector > Class selector > Tag selector. If we have example below, the red colour will be applied because .header (class selector) is more specific than tag selector. From the above 3 selectors, most specific selector is ID selector.

HTML:
<h1 class="headere">Hi</h1>

CSS:
h1 {
color: blue;
}

.header {
color: red;
}

> There is only one way how to over-ride ID selector and namely by !importnat syntax. This was can overrride any CSS styling ans should be only used as a last resort (because this one is very hard to override). In the example below, the colour of header will be blue.
HTML:
<h1 class="headere">Hi</h1>

CSS:
h1 {
  color: blue !important;
}

.header {
  color: red;
}


> Chaining selectors: we are able to chain more selectors and make them even more specific. In the example below, CSS style will be applied to h1 tags but only thosee which have class name teal.
h1.teal {
color: teal;
}

> Chaining selectors can be also this way:
.main p {
font-family: Arial;
}

> If we need to apply same style to multiple selectors, we can simply separate them by comma.
Instead of:
h1 {
  font-family: Georgia;
}

.menu {
  font-family: Georgia;
}

We can write:

h1, .menu {
font-family: Georgia;
}



> Font styles and families
httpshttps://www.codecademy.com/learn/learn-css://www.w3.org/Style/Examples/007/fonts.en.html

Examples:
> Changing font:
h1 {
font-family: Garamond;
}

> General rules about font-families:
The font specified in a stylesheet must be installed on a user’s computer in order for that font to display when a user visits the web page. The default typeface for all HTML elements is Times New Roman. It’s a good practice to limit the number of fonts used on a web page to 2 or 3. This helps the page load faster in some cases and is usually a good design decision. When the name of a font consists of more than one word, it’s a best practice to enclose the font’s name in quotes. Example:
h1 {
  font-family: "Courier New";
}

> Changin font size:
p {
font-size: 18px;
}

> Changing bold (thickness or narrowness of the font) using font-weight (it can hold values bold or normal):
p {
font-weight: bold;
}

> Aligning text to right, left or center
h1 {
  text-align: right;
}

> Setting color of text can be done in two ways:
A) foreground colour  for example colour of the text itself, property to do this is called color
B) background colour, property to do this is background-color
h1 {
  color: red;
  background-color: blue;
}

> Change opacity of an element. Accepts values from 0 (0% opacity) to 1 (100%  opacity)
.overlay {
  opacity: 0.5;
}

> Adding image as a background to an element. URL can be link to exterenal site or fie within the project folder
.main-banner {
  background-image: url("https://www.example.com/image.jpg");
}

.main-banner {
  background-image: url("images/mountains.jpg");
}

> Transforming whole text to uppercase
h1{
text-transform: uppercase;
}

> Transforming first leter to upper case
h3 {
text-transform: capitalize;
}

> Text cursive. Note, this does not mean italics. Cursive only emulates handwriting
.cursive {
font-family: cursive;
}

> The Box model includes the content area’s size (width and height) and the element’s padding, border, and margin. The properties include:

    Width and height — specifies the width and height of the content area.
    Padding — specifies the amount of space between the content area and the border.
    Border — specifies the thickness and style of the border surrounding the content area and padding.
    Margin — specifies the amount of space between the border and the outside edge of the element.

> Width and height
p {
  height: 80px;
  width: 240px;
}

> A border is a line that surrounds an element, like a frame around a painting. Borders can be set with a specific width, style, and color.

    width — The thickness of the border. A border’s thickness can be set in pixels or with one of the following keywords: thin, medium, or thick.
    style — The design of the border. Web browsers can render any of 10 different styles. Some of these styles include: none, dotted, and solid.
    color — The color of the border. Web browsers can render colors using a few different formats, including 140 built-in color keywords.

p {
  border: 3px solid coral;
}

> border with rounded corners
div.container {
  border: 3px solid rgb(22, 77, 100);
  border-radius: 5px;
}

> perfect circle bordeer - set the radius equel to height of the box or 100%
div.container {
  height: 60px;
  width: 60px;
  border: 3px solid rgb(22, 77, 100);
  border-radius: 100%;
}

> Padding - The space between the contents of a box and the borders of a box. In example belowpadding will be applied ot all sides.

p.content-header {
  border: 3px solid coral;
  padding: 10px;
}

> Padding can  onlso be only defined with for example: 
    padding-top
    padding-right
    padding-bottom
    padding-left


