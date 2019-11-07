---
title: "CSS"
date: "2019-10-11"
---

**Selectors**

Selectors enable to select certain html element(s) and apply CSS styles to it. Selectors are how we can select certain html elements. In CSS there are 3 ways how we can select elements

**A) by tag name** - this scenario will style the teal colour to ALL p tags in the page

HTML:
```
<p>Hello Universe</p>
```
CSS:
```
p {
 color: tile;
}
```
**B) by class name** - In case of class names we need to ad period in front of the class name. They are meant to be re-used over many elements.

HTML:
```
<p class="title">Hello Universe</p>
```
CSS:
```
.title {
 font-family: Arial;
}
```

**C) By id of an element** - Id is completely unique per site. We ned to add hashtag. An ID is meant to style only one element.


HTML:
```
<p id="large-title">Hello Universe</p>
```
CSS:
```
#large-title {
 font-size: 50px;
}
```
> Precedence of selectors: General rule is that more specific selector will be applied compared to more generic selector. ID selector > Class selector > Tag selector. If we have example below, the red colour will be applied because .header (class selector) is more specific than tag selector. From the above 3 selectors, most specific selector is ID selector.

HTML:
```
<h1 class="headere">Hi</h1>
```
CSS:
```
h1 {
color: blue;
}

.header {
color: red;
}
```
> There is only one way how to over-ride ID selector and namely by <code>!important</code> syntax. This can overrride any CSS styling and should be only used as a last resort (because this one is very hard to override). In the example below, the colour of header will be blue.
HTML:
```
<h1 class="headere">Hi</h1>
```
CSS:
```
h1 {
  color: blue !important;
}

.header {
  color: red;
}
```

> Chaining selectors: we are able to chain more selectors and make them even more specific. In the example below, CSS style will be applied to h1 tags but only those which have class name teal.
```
h1.teal {
color: teal;
}
```
> Chaining selectors can be also this way:
```
.main p {
font-family: Arial;
}
```
> If we need to apply same style to multiple selectors, we can simply separate them by comma.
Instead of:
```
h1 {
  font-family: Georgia;
}

.menu {
  font-family: Georgia;
}
```
We can write:
```
h1, .menu {
font-family: Georgia;
}
```

**Commands**

> Font styles and families
httpshttps://www.codecademy.com/learn/learn-css://www.w3.org/Style/Examples/007/fonts.en.html

Examples:
> Changing font:
```
h1 {
font-family: Garamond;
}
```
> General rules about font-families:

The font specified in a stylesheet must be installed on a user’s computer in order for that font to display when a user visits the web page. The default typeface for all HTML elements is Times New Roman. It’s a good practice to limit the number of fonts used on a web page to 2 or 3. This helps the page load faster in some cases and is usually a good design decision. When the name of a font consists of more than one word, it’s a best practice to enclose the font’s name in quotes. Example:
```
h1 {
  font-family: "Courier New";
}
```
> Changing font size:
```
p {
font-size: 18px;
}
```
> Changing bold (thickness or narrowness of the font) using font-weight (it can hold values bold or normal):
```
p {
font-weight: bold;
}
```

> Aligning text to right, left or center
```
h1 {
  text-align: right;
}
```
> Setting color of text can be done in two ways:

**A) foreground colour**  for example colour of the text itself, property to do this is called <code>color</code>

**B) background colour** property using <code>background-color</code>
```
h1 {
  color: red;
  background-color: blue;
}
```
> Change opacity of an element. Accepts values from 0 (0% opacity) to 1 (100%  opacity)
```
.overlay {
  opacity: 0.5;
}
```
> Adding image as a background to an element. URL can be link to exterenal site or file path within the project folder
```
.main-banner {
  background-image: url("https://www.example.com/image.jpg");
}

.main-banner {
  background-image: url("images/mountains.jpg");
}
```
> Transforming whole text to uppercase
```
h1{
text-transform: uppercase;
}
```
> Transforming first leter to upper case
```
h3 {
text-transform: capitalize;
}
```
> Text cursive. Note, this does not mean italics. Cursive only emulates hand-writing
```
.cursive {
font-family: cursive;
}
```
> The Box model includes the content area’s size (width and height) and the element’s padding, border, and margin. The properties include:

**Width and height** — specifies the width and height of the content area.

**Padding** — specifies the amount of space between the content area and the border.

**Border** — specifies the thickness and style of the border surrounding the content area and padding.

**Margin** — specifies the amount of space between the border and the outside edge of the element.

> Width and height
```
p {
  height: 80px;
  width: 240px;
}
```
> A border is a line what surrounds an element, like a frame around a painting. Borders can be set with a specific width, style, and color.

**width** — The thickness of the border. A border’s thickness can be set in pixels or with one of the following keywords: thin, medium, or thick.

**style** — The design of the border. Web browsers can render any of 10 different styles. Some of these styles include: none, dotted, and solid.

**color** — The color of the border. Web browsers can render colors using a few different formats, including 140 built-in color keywords.
```
p {
  border: 3px solid coral;
}
```
> border with rounded corners
```
div.container {
  border: 3px solid rgb(22, 77, 100);
  border-radius: 5px;
}
```
> perfect circle border - set the radius equal to height of the box or 100%
```
div.container {
  height: 60px;
  width: 60px;
  border: 3px solid rgb(22, 77, 100);
  border-radius: 100%;
}
```

>Padding: space between content and border. Can have properties:
```
padding-top: 30px;
padding-right: 15px;
padding-bottom: 30px;
padding-left: 15px;
```

>Padding: In order to have same padding on all four sides use:
```
padding: 10px;
```

>Padding: In order to specify exactly how much padding there should be on each side of the content in a single declaration. The values go in clock-wise direction: padding on the top (10 pixels), right (15 pixels), bottom (20 pixels), and left (30 pixels) sides of the content.
```
padding: 10px 15px 20px 30px;
```

>Padding: If the top and bottom values for padding will equal each other, and the left and right values for padding will also equal each other, you can use the following shortcut. First value defines padding top and bottom to be 10px, padding left and right to be 15px.
```
padding: 10px 15px;
```

>Padding: Top and Bottom paddings (vertical paddings) **DO NOT** collapse!

>Padding: Left and Right paddings (horizontal paddings) **DO NOT** collapse! And are always added together.

>Margin: Space outside of the border. It has following values:
```
margin-top: 10px;
margin-right: 15px;
margin-bottom: 10px;
margin-left: 30px;
```

>Margin: If you want to have same margin on all four sides use:
```
margin: 10px;
```
>Margin: In order to specify exactly how much margin there should be on each side of the content in a single declaration. The values go in clock-wise direction: margin on the top (10 pixels), right (15 pixels), bottom (20 pixels), and left (30 pixels) sides of the content.
```
margin: 10px 15px 20px 30px;
```

>Margin: If the top and bottom values for margin will equal each other, and the left and right values for padding will also equal each other, you can use the following shortcut. First value defines margin top and bottom to be 10px, margin left and right to be 15px.
```
margin: 10px 15px;
```

> Margin: Margin property also allows to position an element in the center of another containing element. There are 2 requirements in order to do it:

**1/** top and bottom margin is defined and then followed by word auto, meaning right and left margin will be done automatically based on the width of the element and the container in which we want to center it

**2/** width of the element needs to be defined and needs to be smaller than the width of the container where the element resides

```
div {
width: 200px
margin: 0px auto;
}
```

>Margin: Top and Bottom margin is also called: **Vertical margin**. Left and Right margin is called **Horizontal Margin**

>Margin: Top and Bottom margin (vertical margins) **COLLAPSE**! The larger of the two vertical margins sets the distance between adjacent elements. For example: if top element has margin bottom of 20px and bottom element margin top of 30px, then the effective distance between these 2 elements is 30px.

```
#img-one {
  margin-bottom: 30px;
}

#img-two {
  margin-top: 20px;
}
```

>Margin: Left and Right margins (horizontal margins) **DO NOT** collapse! And are always added together. If left element has margin right of 10px and right element marin left of 10 px. Then the effective distance of the elements is 20px.

```
#img-one {
  margin-right: 10px;
}

#img-two {
  margin-left: 10px;
}
```

>Minimum width is minimum width the element will shrink to
```
min-width: 50px;
```

>Maximum width is maximum width the element will expand to
```
max-width: 50px;
```

>Minimum heigth is minimum heigth the element will shrink to
```
min-heigth: 30px;
```

>Maximum heigth is maximum heigth the element will expand to
```
>max-heigth: 30px;
```

>References:
Amazing CSS course for beginners
https://www.codecademy.com/courses/learn-css/