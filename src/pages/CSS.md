---
title: "CSS"
date: "2019-10-11"
category: "knowledge-base"
---

![](https://i.imgur.com/0v7juum.jpg "Photo by Format from Pexels")

**TERMINILOGY**

> Imagine this snippet:

```
.apple {
  color: purple;
}
```

> `p` is a selector. A selector is a descriptor that lets you target specific elements on the page. In this case, we're selecting all nodes with the “apple” class.

> `color` is a property. Properties in CSS are the attributes you can specify values for, like "color" and "font-size"

> `purple` is a value (of a property)

> Imagine this snippet:

```
.code-snippet {
  padding: 32px;
  white-space: pre-wrap;
}
```

> Which part of it is the FIRST DECLARATION? Can you guess?

> OK, a hint here, declaration is a combination of property and value.

> So in our case it is - `padding: 32px;`

> Now what is a rule here?

```
p {
  color: red;
  font-family: sans-serif;
}
```

> All of it! All the text above is a rule. A rule, also known as a style, is a collection of declarations, targeting one or more selectors. A stylesheet is made up of multiple rules.

> Find a unit here:

```
p {
  padding-top: 24px;
}
```

> It is the `px`. Some values have units, like px, %, or em. In this case, our padding-top has a value of 24px, which is measured in the "px" unit.

**SELECTORS**

Selectors enable to select certain HTML element(s) and apply CSS styles to it. Selectors are how we can select certain HTML elements. In CSS there are 3 ways how we can select elements

**A) by tag name** - this scenario will style the teal colour to ALL <code>`<p>`</code> tags in the page

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

**B) by class name** - In case of class names we need to add period in front of the class name. They are meant to be re-used over many elements.

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

<code>Please note:</code> in pure HTML we use word "class" to define for example a class called title which we can then style by .title in CSS. However, in REACT word "class" is reserved to create class components. Therefore, in order to create regular names of classes, we need to use word "className".

**C) By id of an element** - ID is completely unique per site. We need to add hashtag. An ID is meant to style only one element.

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

> There is a universal selector `*` which selects all elements on the website

```
* {
    font-size: 12px;
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

> There is only one way how to over-ride ID selector and namely by <code>!important</code> syntax. This can override any CSS styling and should be only used as a last resort (because this one is very hard to override). In the example below, the colour of header will be blue.
> HTML:

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

> Chaining selectors: we are able to chain more selectors and make them even more specific.

> In the example below, CSS style will be applied to <code>`<h1>`</code> tags but only those which have class name teal.
> HTML:

```
<h1 class="teal">Hello
    <span class="purple">stranger</span>
</h1>
```

CSS:

```
h1.teal {
  color: teal;
}
```

![](https://i.imgur.com/dDjN9MR.png "Photo by Addania")

> Chaining selectors can be also with space, but it selects different thing. It selects all elements with class teal which are `descendents` of h1 tag. This kind of selector actually selects based on their location in the document. The below example selects for only those selectors which are nested in h1 tag. This is called `descendant combinator`
> HTML:

```
<h1 class="teal">Hello
    <span class="purple">stranger</span>
</h1>
```

CSS:

```
h1 .teal {
color: teal;
}

h1 .purple {
  color: purple;
}

```

![](https://i.imgur.com/fgfKOTN.png "Photo by Addania")

> Another selector based on the location in the document is called an `adjuscent sibling combinator`. It uses a plus sign (+) in oredr to select the next sibling on the same hierarchy. For example styling a pararaph which comes directly after the heading at the same hierarchy level in the HTML:

```
h1 + p {
  font-size: 200%;
}
```

> If we need to apply same style to multiple selectors, we can simply separate them by comma. Imagine html like this:

HTML

```
<h1 class="teal">Hello
    <span class="purple">stranger</span>
</h1>

<h3 class="plum">Nice meeting you
    <span class="steel">out here</span>
</h3>
```

> Which is styled like this:

CSS

```
h1.teal {
  color: teal;
}

h1 .purple {
  color: purple;
}

h3.plum {
  color:plum;
}

h3 .steel {
  color: steelBlue;
}
```

![](https://i.imgur.com/o7XWx5c.png "Photo by Addania")

> Imagine you want to style `stranger` and `out here` with the same style. You can do it like this:
> CSS

```
h1 .purple {
  color: lightblue;
}

h3 .steel {
  color: lightblue;
}
```

> Or you can shorten it to:
> CSS

```
h1 .purple, h3 .steel {
  color: lightblue;
}

```

![](https://i.imgur.com/WiFdSmL.png "Photo by Addania")

> Another way to style `stranger` and `out here` would be nesting selectors:
> CSS

```
h1, h3 {
    span {
        color: deepSkyBlue;
    }
}

```

> Styling based on state is another way of styling html elements. For example styling `a` (anchor) tags. This has different states depending on whether it is visited, unvisited, being hovered over, focused via the keyboard or in the process of being clicked (activated). We can use CSS to target these states. The CSS below styles unvisited links pink and visited links green.

```
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

> Following CSS will remove any text styling (such as underline) when user hovers over an anchor tag:

```
a:hover {
  text-decoration: none;
}
```

> Just a wrap up - `combinators` such as space or + are a way to combine `selectors`.

> We can use selectors and combinators in order to select for very specific elements.

> Select any `<span>` that is inside a `<p>`, which is inside an `<article>`

```
article p span { ... }
```

> Select any `<p>` that comes directly after a `<ul>`, which comes directly after an `<h1>`

```
h1 + ul + p { ... }
```

> Style any element with a class of special, which is inside a `<p>`, which comes just after an `<h1>`, which is inside a `<body>`. Phew!

```
body h1 + p .special {...}
```

**Pseaudo-classes**
> Let's have a button which changes color on hover. We might want to use a state for it and use `onMouseEnter` and `onMouseLeave` event listeners on that button. But it is possible do this entirely with CSS.

> Syntax looks like this:
```
selector:pseudo-class {
  property: value;
}
```

>An exmaple is here:

```
<style>
  button:hover {
    color: blue;
  }
</style>
<button>Hover over me!</button>
```

> `:hover` is a pseudo class. A pseudo-class is a `selector modifier`; it will apply its declarations when some sort of condition or state is met. In this case, it only applies the blue text when the selected element is being hovered over.

> List of possible pseudo classes is here: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

> Let's see some of them.

**Media queries**


>In order to accommodate screens of different shapes and sizes, CSS features media queries, which allow us to apply different CSS in different scenarios - on different screen sizes (desktop, mobile, tablet, etc). The CSS syntax is `@media`

> Think about `@media` as `if` statements in javascript, followed by braces with a condition inside:
```
@media (condition) { ... styles which will be applied if the condition is met ... }
```
>Example style will be applied if the width of the screen is between = and 300px:
```
@media (max-width: 300px) {
    .small-only {
      color: red;
    }
  }
```
> Media queries are often used when we want to hide some content and display something else:
```
<style>
  @media (max-width: 300px) {
    .desktop-only {
      display: none;
    }
  }
  @media (min-width: 301px) {
    .mobile-only {
      display: none;
    }
  }
</style>

<div class="desktop-only">
  I only show up on large screens.
</div>
<div class="mobile-only">
  Meanwhile, you'll only see me on small ones.
</div>
```
> `display: none` is a declaration that removes an element from the rendering process; it's as if it doesn't exist

> `max-width` adds styles on `small` screens

> `min-width` adds styles on `larger` ones.

**FONTS**

> Font styles and families

https://www.codecademy.com/learn/learn-css://www.w3.org/Style/Examples/007/fonts.en.html

Examples:

> Changing font:

```
h1 {
font-family: Garamond;
}
```

> General rules about font-families:

> The font specified in a stylesheet must be installed on a user’s computer in order for that font to display when a user visits the web page. The default typeface for all HTML elements is Times New Roman. It’s a good practice to limit the number of fonts used on a web page to 2 or 3. This helps the page load faster in some cases and is usually a good design decision. When the name of a font consists of more than one word, it’s a best practice to enclose the font’s name in quotes. Example:

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

> Font size can also be expressed in rem which will then scale the font size based on the default font size user chose. The number given represents how much bigger the font will be based on the defaul user selected font.

```
font-size: 1.2rem;
```

> Changing bold (thickness or narrowness of the font) using font-weight (it can hold values bold or normal):

```
p {
font-weight: bold;
}
```

**ALIGNING TEXT**

> Aligning text to right, left or center

```
h1 {
  text-align: right;
}
```

**COLORS**

> Setting color of text can be done in two ways:

**A) foreground colour** for example colour of the text itself, property to do this is called <code>color</code>

**B) background colour** property using <code>background-color</code>

```
h1 {
  color: red;
  background-color: blue;
}
```

> Change opacity of an element. Accepts values from 0 (0% opacity) to 1 (100% opacity)

```
.overlay {
  opacity: 0.5;
}
```

![](https://i.imgur.com/ZrJnm95.jpg "Photo by Daniel Frese from Pexels")

**IMAGES**

> Adding image as a background to an element. URL can be link to exterenal site or file path within the project folder

```
.main-banner {
  background-image: url("https://www.example.com/image.jpg");
}

.main-banner {
  background-image: url("images/mountains.jpg");
}
```

**TEXT TRANSFORMATIONS**

> Transforming whole text to uppercase

```
h1{
text-transform: uppercase;
}
```

> Transforming first leter to uppercase

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

**BOX MODEL**

> The Box model includes the content area’s size (width and height) and the element’s padding, border, and margin. The properties include:

**Width and height** — specifies the width and height of the content area.

**Padding** — specifies the amount of space between the content area and the border.

**Border** — specifies the thickness and style of the border surrounding the content area and padding.

**Margin** — specifies the amount of space between the border and the outside edge of the element.

**WIDTH AND HEIGHT**

> To set specific width and height of an element. It can be set in pixels or in percentages:

```
p {
  height: 80px;
  width: 240px;
}
```

> Minimum width is minimum width the element will shrink to

```
min-width: 50px;
```

> Maximum width is maximum width the element will expand to

```
max-width: 50px;
```

> Minimum heigth is minimum heigth the element will shrink to

```
min-heigth: 30px;
```

> Maximum heigth is maximum heigth the element will expand to

```
>max-heigth: 30px;
```

**BORDER**

> A border is a line what surrounds an element, like a frame around a painting. Borders can be set with a specific width, style, and color.

**width** — The thickness of the border. A border’s thickness can be set in pixels or with one of the following keywords: thin, medium, or thick.

**style** — The design of the border. Web browsers can render any of 10 different styles. Some of these styles include: none, dotted, and solid.

**color** — The color of the border. Web browsers can render colors using a few different formats, including 140 built-in color keywords.

```
p {
  border: 3px solid coral;
}
```

> Border with rounded corners

```
div.container {
  border: 3px solid rgb(22, 77, 100);
  border-radius: 5px;
}
```

> Perfect circle border - set the radius equal to height of the box or 100%

```
div.container {
  height: 60px;
  width: 60px;
  border: 3px solid rgb(22, 77, 100);
  border-radius: 60px;
}
```

or equivalently:

```
div.container {
  height: 60px;
  width: 60px;
  border: 3px solid rgb(22, 77, 100);
  border-radius: 100%;
}
```

> Border radius can be also defind by 4 values. The first one is the top left corner, the second value is top right corner, the third is the bottom right corner and finally the fourth value is the bottom left corner:

```
border-radius: 10px 10px 10px 10px;
```

> We can decide to only set 3 or less of the values for creative shapes:

**Teardrop shape**

```
border-radius: 0px 10px 10px 10px;
```

**Palm leaf shape** where width of image is 100px

```
border-radius: 100px 0px 100px 0px;
```

**Quarter circle** where width and height of the image is 100px:

```
border-radius: 100px 0px 0px 0px;
```

**PADDING**

> Padding: space between content and border. Can have properties:

```
padding-top: 30px;
padding-right: 15px;
padding-bottom: 30px;
padding-left: 15px;
```

> Padding: In order to have same padding on all four sides use:

```
padding: 10px;
```

> Padding: In order to specify exactly how much padding there should be on each side of the content in a single declaration. The values go in clock-wise direction: padding on the top (10 pixels), right (15 pixels), bottom (20 pixels), and left (30 pixels) sides of the content.

```
padding: 10px 15px 20px 30px;
```

> Padding: If the top and bottom values for padding will equal each other, and the left and right values for padding will also equal each other, you can use the following shortcut. First value defines padding top and bottom to be 10px, padding left and right to be 15px.

```
padding: 10px 15px;
```

> Padding: Top and Bottom paddings (vertical paddings) **DO NOT** collapse!

> Padding: Left and Right paddings (horizontal paddings) **DO NOT** collapse! And are always added together.

**MARGIN**

> Margin: Space outside of the border. It has following values:

```
margin-top: 10px;
margin-right: 15px;
margin-bottom: 10px;
margin-left: 30px;
```

> Margin: If you want to have same margin on all four sides use:

```
margin: 10px;
```

> Margin: In order to specify exactly how much margin there should be on each side of the content in a single declaration. The values go in clock-wise direction: margin on the top (10 pixels), right (15 pixels), bottom (20 pixels), and left (30 pixels) sides of the content.

```
margin: 10px 15px 20px 30px;
```

> Margin: If the top and bottom values for margin will equal each other, and the left and right values for margin will also equal each other, you can use the following shortcut. First value defines margin top and bottom to be 10px, margin left and right to be 15px.

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

> Margin: Top and Bottom margin is also called: **Vertical margin**. Left and Right margin is called **Horizontal Margin**

> Margin: Top and Bottom margin (vertical margins) **COLLAPSE**! The larger of the two vertical margins sets the distance between adjacent elements. For example: if top element has margin bottom of 20px and bottom element margin top of 30px, then the effective distance between these 2 elements is 30px.

```
#img-one {
  margin-bottom: 30px;
}

#img-two {
  margin-top: 20px;
}
```

> Margin: Left and Right margins (horizontal margins) **DO NOT** collapse! And are always added together. If left element has margin right of 10px and right element marin left of 10 px. Then the effective distance of the elements is 20px.

```
#img-one {
  margin-right: 10px;
}

#img-two {
  margin-left: 10px;
}
```

**OVERFLOW**

> The overflow property controls what happens to content which is larger than its container (box). In order words content that spills, or overflows, outside its box. The parent container can be set to:

- hidden - any content that overflows will be hidden from view
- scroll - a scrollbar is added to the element’s box so that the rest of the content can be viewed by scrolling.
- visible - the overflow content will be displayed outside of the containing element. This is the default value.

**DEFAULT VALUES**

> Each browser has its own default styles. It is in case we do not define styles for a certain element. These browser styles are called: `user agent styles`. User agent means browser.

> Among default browser styles are margin and padding. In order to reset the completely and start with clean slate, we can set:

```
* {
  margin: 0;
  padding: 0;
}
```

**VISIBILITY**

> Visibility is a property which decides if an element is `hidden` or `visible`.

- hidden - element with not be visible
- visible - element will be visible

> Even if we set element to hidden, the website will still reserve space for it. So we are only hiding element, but the space where is will be generated will be visible.

HTML:

```
<ul>
  <li>LOOK AT ME</li>
  <li class="incognito">YOU CANNOT SEE ME :)</li>
  <li>I AM HERE</li>
<ul>
```

CSS:

```
.incognito {
  visibility: hidden;
}
```

![](https://i.imgur.com/h28WH9G.png "Photo by Addania")

> If we want to hide an element completely, we set:

CSS:

```
.incognito {
  display:none;
}
```

![](https://i.imgur.com/jxNsMVj.png "Photo by Addania")

**BOX MODEL**

> The classical box model works in a way that:

```
actual rendered width of elemen`s box
= width + padding+ border
```

![](https://i.imgur.com/xLqkYbN.png "Photo by codecademy.com")

> This is also controlled by porperty called `box-sizing`which has as a default value in browsers: `content-box`

> This can create problems to work with boxe sizes and positioning elements

> Another value of `box-sizing` can be `border-box`

> To reset the `content-box` and use `border-box`, we can use:

```
* {
  box-sizing: border-box;
}
```

> In this box model, if we specify width, it will equal to the actual rendered width of the box. Padding will be `inside` of the width and content width will be calculated automatically:

![](https://i.imgur.com/oVtrdTh.png "Photo by codecademy.com")

**POSITIONINIG**

> HTML pages are rendered from left to right, from top to bottom.

> Following attributes define positioning of these elements:

- position
- display
- z-index
- float
- clear

> Let`s create 2 divs within another div and color them:
> HTML:

```
<div class="parent-block">
    <div class="box1"></div>
    <div class="box2"></div>
</div>
```

CSS:

```
.parent-block {
    width: 400px;
    height: 400px;
    background-color: rgba(173, 27, 218, 0.2)
}
.box1{
    width: 100px;
    height: 100px;
    background-color: purple ;
}
.box2{
    width: 100px;
    height: 100px;
    background-color: orchid;
}
```

> By browser default, they will be displayed as block:

![](https://i.imgur.com/ESLu9iC.png "Photo by Addania")

> User agent styles means browser default. Box will look like this:

![](https://i.imgur.com/K0Ponuc.png "Photo by Addania")

> Child divs are generated beneath each other. Each child div takes up whole width of the parent container.

> If we wanted to position the boxes next to each other, we would need to apply display: inline-block to the boxes:

```
.box1{
    display: inline-block;
}
.box2{
    display: inline-block;
}
```

![](https://i.imgur.com/kLgULXj.png "Photo by Addania")

**POSITION**

> Postion is a property that positions an element.

> Possible values:

- static- default value, elements render in order, as they appear in the document flow
- absolute- the element is positioned relative to its first positioned (not static) ancestor element
- fixed - the element is positioned relative to the browser viewport (visible screen)
- relative - the element is positioned relative to its normal (static) position, so "left:20px" adds 20 pixels to the element's LEFT position
- sticky- the element is positioned based on the user's scroll position
- initial- sets this property to its default value. Read about initial
- inherit - inherits this property from its parent element

> If not specified, position will be static. It does not need to be written explicitly.

> With position we can also define four offset properties:

- top - moves the element down.
- bottom - moves the element up.
- left - moves the element right.
- right - moves the element left.

**POSITION RELATIVE**

> Our starting positioning of elements will be `display: block` and will look like this:

HTML:

```
<div class="parent-block">
    <div class="box1"></div>
    <div class="box2"></div>
</div>
```

CSS:

```
.parent-block {
    width: 400px;
    height: 400px;
    background-color: rgba(173, 27, 218, 0.2);
}
.box1{
    width: 100px;
    height: 100px;
    background-color: purple ;
    display: block;
}
.box2{
    width: 100px;
    height: 100px;
    background-color: orchid;
    display: block;
}

```

![](https://i.imgur.com/K0Ponuc.png "Photo by Addania")

> Please note we do not need to specify `display: block` explicitly, because it is browser default (user agent styles), but we can. Notice that the box 2 is rendered beneath box 1.

> We can then position our box 2 with `position: relative`. Relative means in this case relative to its `position: static` which is the default where browser would render it. Considering we use `display: block` then `position: static` means beneath the box 1.

> There will be no visible change to our starting point unless we add some offset positioning. For example offset 10px from top and offset of 30px from right:

```
.box2{
    display: block;
    position: relative;
    top: 10px;
    left: 30px;
}
```

> Resulting change will look like this.

![](https://i.imgur.com/s3PQ6ES.png "Photo by Addania")

**POSITION FIXED**

> Our starting positioning of elements will be `display: block` and will look like this:

HTML:

```
<div class="header"></div>
<div class="parent-block">
    <div class="box1"></div>
    <div class="box2"></div>
</div>
```

CSS:

```
.header {
    width: 400px;
    height: 120px;
    background-color: turquoise;
}
.parent-block {
    width: 400px;
    height: 400px;
    background-color: rgba(173, 27, 218, 0.2);
}
.box1{
    width: 100px;
    height: 100px;
    background-color: purple ;
    display: block;
}
.box2{
    width: 100px;
    height: 100px;
    background-color: orchid;
    display: block;
}
```

![](https://i.imgur.com/RNCpJBn.png "Photo by Addania")

> Please note we do not need to specify `display: block` explicitly, because it is browser default (user agent styles), but we can. Notice that the box 2 is rendered beneath box 1.

> We can then position our box 2 with `position: fixed`. Fixed means in this case relative to to the viewport (visible browser window).

> There will be no visible change to our starting point unless we add some offset positioning. For example offset 0px from top and offset of 60px from right:

```
.box2{
    display: block;
    position: fixed;
    top: 0px;
    left: 60px;
}
```

> Resulting change will look like this.

![](https://i.imgur.com/79Z8GSK.png "Photo by Addania")

> Worth pointing out is also how elements with fixed position behave while scrolling. They would not be scrolled away from the viewport. They will remain in the visible screen.

![](https://i.imgur.com/bMA0qDA.gif "Photo by Addania")

> Navigation bars are often set with the position fixed and then the next element below them is set to relative with offset top: xx px.

**POSITION ABSOLUTE**

> Our starting positioning of elements will be `display: block` and will look like this:

HTML:

```
<div class="header"></div>
<div class="parent-block">
    <div class="box1"></div>
    <div class="box2"></div>
</div>
```

CSS:

```
.header {
    width: 400px;
    height: 120px;
    background-color: turquoise;
}
.parent-block {
    width: 400px;
    height: 400px;
    background-color: rgba(173, 27, 218, 0.2);
    position: absolute;
}
.box1{
    width: 100px;
    height: 100px;
    background-color: purple ;
    display: block;
}
.box2{
    width: 100px;
    height: 100px;
    background-color: orchid;
    display: block;
}
```

![](https://i.imgur.com/RNCpJBn.png "Photo by Addania")

> Please note we do not need to specify `display: block` explicitly, because it is browser default (user agent styles), but we can. Notice that the box 2 is rendered beneath box 1.

> We can then position our box 2 with `position: absolute`. Absolute means in this case relative to to the `next parent which has either position: relative or position: absolute`.

> There will be no visible change to our starting point unless we add some offset positioning. For example offset 10px from top and offset of 30px from right:

```
.box2{
    display: block;
    position: absolute;
    top: 5px;
    left:60px;
}
```

> Resulting change will look like this.

![](https://i.imgur.com/vHZBhRW.png "Photo by Addania")

> Please note, that it is critical, that the next parent component (in our case `.parent-block`) has `position: absolute` or `position: relative`. If it didn`t, it would find next parent component with such position. In our case the only next parent would be the html tag itself. So it would be position in respect to it.
> CSS:

```
.header {
    width: 400px;
    height: 120px;
    background-color: turquoise;
}
.parent-block {
    width: 400px;
    height: 400px;
    background-color: rgba(173, 27, 218, 0.2);
}
.box1{
    width: 100px;
    height: 100px;
    background-color: purple ;
    display: block;
}
.box2{
    width: 100px;
    height: 100px;
    background-color: orchid;
    display: block;
    position: absolute;
    top: 5px;
    left:60px;
}
```

![](https://i.imgur.com/4r6W7ZQ.png "Photo by Addania")

> Important about position: absolute is that when an element’s position is set to absolute all other elements on the page will ignore the element and act like it is not present on the page.

HTML:

```
<div class="header"></div>
<div class="parent-block">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
</div>
```

CSS:

```
.header {
    width: 400px;
    height: 120px;
    background-color: turquoise;
    display: block;
}

.parent-block {
    width: 400px;
    height: 400px;
    background-color: rgba(173, 27, 218, 0.2);
    position: relative;
}

.box1{
    width: 100px;
    height: 100px;
    background-color: purple ;
    display: block;
}

.box2{
    width: 100px;
    height: 100px;
    background-color: orchid;
    display: block;
    position: absolute;
    top: 5px;
    left:60px;
}

.box3{
    width: 100px;
    height: 100px;
    background-color: blueviolet;
    display: block;
}
```

![](https://i.imgur.com/QLxSgFG.png "Photo by Addania")

> Notice how new box 3 (violet) completely ignores the box2 and is positioned directly beneath the box 1

> Worth pointing out is also how elements with absolute position behave while scrolling. They would be scrolled away from the viewport

![](https://i.imgur.com/sNPRZZX.gif "Photo by Addania")

**Z INDEX**

> When there are multiple elements on page which overlap we can control with Z index which element is infront or behind another. The z-index property controls how far “back” or how far “forward” an element should appear on the web page when elements overlap. This can be thought of the depth of elements, with deeper elements appearing behind shallower elements. The higher the z index, the more in front element is. So element with z index 2 will be in front of element with z index 1

> Imagine code like this:
> HTML

```
<div class="header"></div>
<div class="parent-block">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
</div>
```

CSS

```
.header {
    width: 400px;
    height: 120px;
    background-color: turquoise;
    display: block;
}

.parent-block {
    width: 400px;
    height: 400px;
    background-color: rgba(173, 27, 218, 0.2);
    position: relative;
}

.box1{
    width: 100px;
    height: 100px;
    background-color: purple ;
    display: block;
}

.box2{
    width: 100px;
    height: 100px;
    background-color: orchid;
    display: block;
    position: absolute;
    top: 20px;
    left:40px;
}

.box3{
    width: 100px;
    height: 100px;
    background-color: blueviolet;
    display: block;
}
```

![](https://i.imgur.com/HJIzgk1.png "Photo by Addania")

> What if we want the second box appear behind the box 1 and 3? We can set their z-indices
> CSS

```
.box1{
    width: 100px;
    height: 100px;
    background-color: purple ;
    display: block;
    position: relative;
    z-index: 2;
}

.box2{
    width: 100px;
    height: 100px;
    background-color: orchid;
    display: block;
    position: absolute;
    top: 20px;
    left:40px;
    z-index: 1;
}

.box3{
    width: 100px;
    height: 100px;
    background-color: blueviolet;
    display: block;
    position: relative;
    z-index: 2;
}
```

> Please not it is super important that we st box 1 and 3 to position: relative, because z index does not work on static objects (position:static is default if we do not set any position). Result will look like this

![](https://i.imgur.com/5VM9sZV.png "Photo by Addania")

**DISPLAY**

> Each HTML element has a default display value that determines if it can share horizontal space with other elements or not. Some elements fill the entire browser width from left to right regardless of the size of their content. But other elements only take up as much horizontal space as their content needs and can be directly next to other elements.

**INLINE DISPLAY**

> Default display of some tags, for example `<em>`, `<strong>`, `<button>` or `<a>`, is called `inline`. Inline elements have a box that wraps tightly around their content, only taking up amount of space which is necessary to display their content and not requiring a new line after every new element.

> Height and width of such elements cannot be specified in the CSS document. For example, the text of `<a>` tag will, by default, be displayed on the same line as the surrounding text, and it will only be as wide as necessary to contain its content.

> Inline elements cannot be altered in size with height or width CSS properties.

HTML:

```
<button>Click me!</button><button>Me too, please?</button>
```

![](https://i.imgur.com/NKk2d26.png "Photo by Addania")

> Some elements by default have property display: block, which renderes them beneath each other. For example heading tags or divs
> HTML:

```
<button>Click me!</button><button>Me too, please?</button>
<h3>Hello</h3>
<h3> Universe!</h3>
```

![](https://i.imgur.com/ybaY2aS.png "Photo by Addania")

> Display property provides the ability to make any element an inline element, also elements that are not inline by default such as paragraphs, divs or headings.
> CSS:

```
h3 {
  display: inline;
}
```

![](https://i.imgur.com/gIVa8dd.png"Photo by Addania")

The CSS in the example above will change the display of all <h1> elements to inline. The browser will render <h1> elements on the same line as other inline elements immediately before or after them (if there are any).

**ROTATION**

> The <code>t⁠r⁠a⁠n⁠s⁠f⁠o⁠r⁠m</code> property can rotate images and other elements. It accepts functions as values. To add a function that rotates an image, we type in <code>r⁠o⁠t⁠a⁠t⁠e⁠(⁠)</code>. We enter there number of degrees we want to rotate image.90deg means 90 degrees clickwise

```
img {
transform: rotate(90deg);
}
```

> To rotate an image anti-clockwise we add minus sign -45deg

```
img {
transform: rotate(-45deg);
}
```

> We can rotate other elements, not only images. For example buttons

```
button {
transform: rotate(-90deg);
}
```

**Media queries**

> Media queries are very useful when we want to have diffrent styling based on the different screen sizes, for example large, medium or small (which is usually a mobile).
> In a project we usually start developing the layout how it should look on the mobile phone and defining styles for the mobile first with for example defning the widths:

```es6
.Burger {
  width: 100%;
  height: 250px;
}
```

> Then maybe on medium screen sizes we define the width of

```es6
@media (min-width: 500px) and (min-height: 401px) {
  .Burger {
    width: 450px;
    height: 400px;
  }
}
```

> Then on the large screen we want to use a different size.

```es6
@media (min-width: 1000px) and (min-height: 700px) {
  .Burger {
    width: 700px;
    height: 600px;
  }
}
```

> References:

https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started

Amazing CSS courses for beginners:

https://css-for-js.dev/

https://www.codecademy.com/courses/learn-css/

![](https://i.imgur.com/Y25H36n.jpg "Photo by Lisa Fotios from Pexels")
