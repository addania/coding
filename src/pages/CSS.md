---
title: "CSS"
date: "2019-10-11"
category: "knowledge-base"
---

![](https://i.imgur.com/0v7juum.jpg "Photo by Format from Pexels")

**Foreword**

> This entire section are my personal notes from 2 amazing CSS courses:

- https://css-for-js.dev/

- https://www.codecademy.com/courses/learn-css/

> All the credits go to [Josh Comeau](https://courses.joshwcomeau.com/) and [codecademy](https://www.codecademy.com/)

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

> Chaining selectors can be also with `space`, but it selects different thing. It selects all elements with class teal which are `descendents` of h1 tag. This kind of selector actually selects based on their location in the document. The below example selects for only those selectors which are nested in h1 tag. This is called `descendant combinator`
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

> There is an interesting piece of information about the descendant combinator. It will style every child/descendant of that parent!

> HTML

```
<ul class="main-list">
  <li>Salt</li>
  <li>Pepper</li>
  <li>
    Fruits & Veg:
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Carrots</li>
    </ul>
  </li>
</ul>
```

> CSS

```
.main-list li {
  border: 1px dotted;
}
```

> In above example, every li which is a descendant of the class main-list will have border, so also Apple, Banana, etc.

![](https://i.imgur.com/yvg2pla.png "Photo by Addania")

> But what if we only wanted to style the DIRECT children? So directly beneath the main unordered list? So in our case only Salt, Pepper and Fruits?

![](https://i.imgur.com/X19ODSi.png "Photo by Addania")

> We would need to use `>`

```
.main-list > li {
  border: 1px dotted;
}
```

> How about we only wanted to put border around Apple, Banana and Carrots?

![](https://i.imgur.com/UANLyFI.png "Photo by Addania")

> One way to do it, is to target li which is a direct child of ul which is nested within class main-list:

```
.main-list ul > li {
  border: 1px dotted;
}

```

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

> Be careful with applying same style to multiple elements. Unfortunately, the comma operator has one annoying pitfall: if any of the selectors are invalid, the rule won't be applied at all. entire rule will be thrown away.

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

> An exmaple is here:

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

> `focus` - in HTML, there is always an "active element". This is the element that is currently selected. When a button is clicked, focus moves to that button. When you press the "Tab" key, focus will move to the next interactive element on the page.

> By default, the `body` tag is focused. When focus moves to an interactive element, like a form input or a link, that element gets an outline effect, to show the user which element has focus. Example is here:

```
<style>
  button:focus {
    border: 2px solid royalblue;
    background: pink;
    color: white;
  }
</style>
<button>Hello</button>
<button>world</button>
<button>!</button>
```

> Click on the first button and press "Tab". Focus moves to the next button, and it gains the focus styles. You can press "Shift Tab" to go back to the first button.

> Focus styles are important for folks who don't navigate with a pointer device (eg. a mouse, trackpad, or touch-screen). For a variety of reasons, some users exclusively use their keyboard to access the internet, and for them, the focus indicator helps them understand where they are on the page.

> `checked` - The :checked pseudo-class only applies to checkboxes and radio buttons that are "filled in". Example:

```
<style>
  input:checked {
  width: 24px;
  height: 24px;
  }
</style>
<input type="checkbox"/>check me
```

> We can also chain multiple pseudo-classes and apply them to mulitple elemts by separating them by comma:

```
.something:focus, .something:hover {
  /* Shared styles! */
}
```

**Pseaudo-elements**

> Pseudo-elements are like pseudo-classes, but they don't target a specific state. Instead, they target "sub-elements" within an element. For example, we can style the placeholder text in a form input with ::placeholder

HTML:

```
<input placeholder="enter text"/>
```

CSS:

```
input::placeholder {
  color: goldenrod;
}
```

> Two of the most common pseudo-elements are ::before and ::after. These pseudo-elements are added inside the element, right before and after the element's content.

```
<style>
  p::before {
    content: '→ ';
    color: deeppink;
  }

  p::after {
    content: ' ←';
    color: deeppink;
  }
</style>

<p>
  This paragraph has little arrows!
</p>
```

![](https://i.imgur.com/u4pUZR9.png "Photo by Addania")

> They are like secpret spans before and after that element. We could rewrite the above example like so:

```
<style>
.pseudo-pseudo {
  color: deeppink;
}
</style>

<p>
  <span class="pseudo-pseudo">→ </span>
  This paragraph has little arrows!
  <span class="pseudo-pseudo"> ←</span>
</p>
```

**Media queries**

> In order to accommodate screens of different shapes and sizes, CSS features media queries, which allow us to apply different CSS in different scenarios - on different screen sizes (desktop, mobile, tablet, etc). The CSS syntax is `@media`

> Think about `@media` as `if` statements in javascript, followed by braces with a condition inside:

```
@media (condition) { ... styles which will be applied if the condition is met ... }
```

> Example style will be applied if the width of the screen is between = and 300px:

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

> Changing font family:

```
h1 {
font-family: Garamond;
}
```

> Font families come in different styles. The 3 most popular:

- Serif
- Sans-serif
- Monospace

A “serif” is a little adornment at the edge of strokes. Serif fonts are very common in print media, but less so on the web (they tend to create a more sophisticated, aged look).

![](https://i.imgur.com/wcCRuBJ.png "Photo by Addania")

> General rules about font-families:

> The font specified in a stylesheet must be installed on a user’s computer in order for that font to display when a user visits the web page. The default typeface for all HTML elements is Times New Roman. It’s a good practice to limit the number of fonts used on a web page to 2 or 3. This helps the page load faster in some cases and is usually a good design decision. When the name of a font consists of more than one word, it’s a best practice to enclose the font’s name in quotes. Example:

```
h1 {
  font-family: "Courier New";
}
```

> We can find good font library by google: www.fonts.google.com. Where we can search for any font we like.

> We need to then click on the font and select which variation we like to use (can be multiple) - green arrow. Then we can see which fonts we selected by clicking on the selected families icon - purple icon. There we can find how to integrate them to your application as link tag in html (blue arrow), or even how to import them directly (to a js file):

![](https://i.imgur.com/Jzidzo4.png"Photo by Addania")

> Example of importing fonts to your html so that they can be used in your application:

```
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
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

> To align text horizontally (to right, left or center) we use text-align property. It also works on images.

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

> For setting colors you can use hex codes - but hex codes are not:

```
div {
    background-color: #00bfff;
    color: #ffffff;
}
```

> But there is even a better way to represent colors and that is HSB / HSL: Hue Saturation Brightness or Hue Saturation Lightness

```
.colorful-thing {
  color: hsl(200deg 100% 50%);
  border-bottom: 3px solid hsl(100deg 75% 50%);
}
```

> The best explanation of this concept is on the Photoshop color picker:

![](https://i.imgur.com/CpQ6a4e.png "Photo by Addania")

> `Hue` means the color itself / the pigment. It is measured in degrees starting at 0 till 360 degrees. Representing colors from red to ... hmm ...red again :) It is the vertical color stripe in the Photoshop color picker

> `Saturation` and `Brightness` are represented on the two-dimensional grid

> `Saturation` changes when moving from the lef to right. Right being the most saturated. Moving left colors become more pastelly and more washed away. When reaching far left, colors are just grey, with no hue. It is represented in percentage.

> `Brightness` changes when you move vertically from top to down. Top being light colors eventually white and down being darker colors everntually black. It is represented in percentage.

> Knowing this makes it pretty intuitive now how to use hsl in the CSS: Look again here:

```
.colorful-thing {
  color: hsl(200deg 100% 50%);
}
```

> This color has around 200 degrees of the hue, which is blue, 100% of saturation - so full color, no washing away, no greying, 50% of its brightness.

> If you want your color to be semi-transparent, you can pass a fourth value for the `alpha` channel. This is a unitless number between 0 (fully transparent) and 1 (the default, fully opaque)

```
 .first.box {
    background-color: hsl(340deg 100% 50% / 1);
  }
  .second.box {
    background-color: hsl(340deg 100% 50% / 0.75);
  }
```

> A lower `alpha` number means that the pixels are transparent.

> This "version" of HSL color is part of a 2016 revision to how colors work in CSS. It enjoys wide browser support, but will not work in Internet Explorer. If your project supports IE, you'll need to use a slightly different syntax:

```
.colorful-thing {
  color: hsl(200deg, 100%, 50%);
  background-color: hsla(200deg, 100%, 50%, 0.2);
}
```

> Instead of being space-separated, the values inside the hsl() function are comma-separated. If you'd like the color to be transparent, you'll need to use the hsla() function instead of the hsl() function.

> You can play online with hsl here: https://hslpicker.com/#0af

**Units**

> Some property values use units. There are couple of units:

- pixels
- ems
- rems
- percetages

> Most popular unit is a `pixel` for anything size-related:

```
.box {
  width: 1000px;
  margin-top: 32px;
  padding: 8px;
  font-size: 16px;
}
```

> `Em` is a relative unit, equal to the font size of the current element. If a heading has a font-size of 24px, and we give it a bottom padding of 2em, we can expect that the element will have 48px of cushion underneath it (2 × 24px)

```
p {
  font-size: 12px;
  padding-bottom: 2em;
}
```

![](https://i.imgur.com/ywjiFBY.png "Photo by Addania")

> Using em means that a component's UI will change depending on the font size of the container it's placed within. This can be useful, but more often than not, it's a nuisance.

> `Rems` are more useful. The `rem` unit is quite a lot like the `em` unit, with one crucial difference: it's always relative to the root element, the `html` tag.

> All of the `rems` in your app will be taking their cues from that root HTML tag. By default, the HTML tag has a font size of 16px, so 1rem will be equal to 16px.

```
html {
  font-size: 16px;
}
h1 {
  font-size: 2rem;
  margin: 0;
}
h2 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: gray;
}
p {
  font-size: 1rem;
}
```

> Changing all the text scales accordingly, when you change the root font size? That's why people like the rem unit. No matter where an element is in the DOM tree, the rem is consistent. It behaves consistently and predictably, like pixels, but it respects user preferences when it comes to increasing/decreasing default font sizes.

> Here is the comparison of the text between html tag having font size 16px and when it has 12px:

```
html {
  font-size: 12px;
}
```

![](https://i.imgur.com/cPxpZVI.png "Photo by Addania")

> But in real application we DO NOT want to set pixel size for the html tag becasue it would override user default setting. So DO NOT set html tag font size.

> The `percentage` unit is often used with width/height, as a way to consume a portion of the available space.

```
<div class="box">
  <div class="child"></div>
</div>

.box {
  width: 250px;
  height: 250px;
  background-color: pink;
}
.child {
  width: 50%;
  height: 75%;
  background-color: black;
}
```

> How to use units - best practises:

- For typography, use rem, because it has important accessibility benefits.
- When it comes to properties that relate to the box model — padding, border, margin — use pixels. It's more intuitive than rem, and there isn't a clear accessibility win.
- For width/height, it'll depend on whether we want the element to be a fixed size, or a relative size. We might want one div to always be 250px wide, while another one should be 50% of the available space.
- For color, it is good to use hsl.
- Use em for the rare cases when you want one property to scale directly with font size.

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

**TEXT SPACING**

> We can tweak the horizontal gap between characters using the letter-spacing property.

```
h3 {
  letter-spacing: 3px;
}
```

> We can tweak the vertical distance between lines using the `line-height` property. `line-height` is a bit of an odd duck because it takes a unitless value. This works as a ratio: `line-height: 2` means that the lines should be twice as tall as a different element with line-height: 1 - for example often with respect to our font size.

```
h3 {
  line-height: 2;
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

**border-width** — The thickness of the border. A border’s thickness can be set in pixels, ems, rems or with one of the following keywords: thin, medium, or thick.

**border-style** — The design of the border. Web browsers can render any of 10 different styles. Some of these styles include: none, dotted, dashed, double, groove, ridge, inset, outset, mixed and solid.

![](https://i.imgur.com/posMCos.png "Photo by Addania")

**border-color** — The color of the border. Web browsers can render colors using a few different formats, including 140 built-in color keywords.

> All these properties can be written as a shorthand:

```
p {
  border: 3px solid coral;
}
```

> Only `border-style` filed is required in the above shorthand:

```
.good {
  border: solid;
}
```

> This will produce a black, 3px-thick border

> Following code is invalid. It will not work because it lacks style:

```
.not-good {
  border: 2px pink;
}
```

> If we don't specify a border color, it'll use the font's color by default. By font-color property `color` is meant.

> If you want to specify this behaviour explicitly, it can be done with the special `currentColor` keyword. `currentColor` is always a reference to the element's derived text color (whether set explicitly or inherited), and it can be used anywhere a color might be used:

```
.box {
  color: hotpink;
  border: 1px solid currentColor;
  box-shadow: 2px 2px 2px currentColor;
}
```

> As we saw we can defined mixed border-styles:

```
border-style: dashed dotted;
```

![](https://i.imgur.com/MBNlZ0G.png "Photo by Addania")

**Border radius**

> The CSS Working Group has published a list of mistakes they've made with the CSS language. One of these mistakes is listed: "border-radius should have been corner-radius"

> It's not hard to understand why. The border-radius property rounds an element (content) even if it has no border!

![](https://i.imgur.com/c2rGi84.png "Photo by Addania")

> Border with rounded corners

```
div.container {
  border: 3px solid rgb(22, 77, 100);
  border-radius: 5px;
}
```

> Perfect circle border - set the radius equal to height of the box or 50%

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
  border-radius: 50%;
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

**D-shape**

```
border-radius: 10px 40px 40px 10px;
```

> All these 4 values have their individual properties:

```
border-top-left-radius: 8px;
border-top-right-radius: 16px;
border-bottom-right-radius: 32px;
border-bottom-left-radius: 64px;
```

**OUTLINE**

> What is difference between border and outline? In some aspects, they're similar! They both add a visual edge to a given element.

> The core difference is that outline doesn't affect layout. Outline is kinda more like box-shadow; it's a cosmetic effect draped over an element, without nudging it around, or changing its size.

> It has similar properties like border:

```
outline-width
outline-color
outline-style
```

> Outline is stacked outside of the border and can be used as second border for visual effect.

```
border: 4px solid darkviolet;
outline: 4px solid deeppink;
```

> There is no outline-radius! (Only in Firefox)

> Outlines have a special `outline-offset` property. It allows you to add a bit of a gap between the element and its outline.

```
outline-offset: 4px;
```

> We should not set:

```
button {
  outline: none;
}
```

> This would break navigation for keyboard users; that ring is required for them to know which element is currently focused!

> The only exception is if we provide a suitable alternative. For example:

```
button {
  outline: none;
}
button:focus {
  background: navy;
  color: white;
}
```

**PADDING**

> Padding: space between content and border. It is an inner space.

> If we have some element with padding, and we set its background to red, also padding will have red background

```
.someElement {
  padding: 48px;
  background-color: "tomato";
}
```

![](https://i.imgur.com/2BKHRCL.png "Photo by Addania")

> Padding can have properties:

```
padding-top: 30px;
padding-right: 15px;
padding-bottom: 30px;
padding-left: 15px;
```

> The same as obve can be re-written using logical properties (which are applicable to also languages which are written right to left, or vertically)

```
  padding-block-start: 20px;
  padding-block-end: 40px;
  padding-inline-start: 60px;
  padding-inline-end: 80px;
```

> Block means vertically on top of each other and inline horizontally next to each other

> Padding, like other properties of box model, can be expressed in px, em or rem. Pixels are the most common. Using percantages is possible but not recommended because it yields unexpected results.

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

> If we want a padding of 48px everywhere except for the bottom, we can write it in 2 ways:

```
.box {
  padding: 48px 48px 0 48px;
}
```

> Or

```
.box {
  padding: 48px;
  padding-bottom: 0;
}
```

> `padding-bottom` overwrites `padding` because if comes second in the css file

**MARGIN**

> Margin increases the space around an element, giving it some breathing room. As we saw earlier, margin is "personal space". Margin is the space outside of the border.

> Margin is mysterious. It can do wacky things, like pull an element outside a parent, or center itself within its container.

> It has following values:

```
margin-top: 10px;
margin-right: 15px;
margin-bottom: 10px;
margin-left: 30px;
```

> Also here are logical equivalents for languages which are not left to right:

```
  margin-block-start: 20px;
  margin-block-end: 40px;
  margin-inline-start: 60px;
  margin-inline-end: 80px;
```

> If you want to have same margin on all four sides use:

```
margin: 10px;
```

> In order to specify exactly how much margin there should be on each side of the content in a single declaration. The values go in clock-wise direction: margin on the top (10 pixels), right (15 pixels), bottom (20 pixels), and left (30 pixels) sides of the content.

```
margin: 10px 15px 20px 30px;
```

> If the top and bottom values for margin will equal each other, and the left and right values for margin will also equal each other, you can use the following shortcut. First value defines margin top and bottom to be 10px, margin left and right to be 15px.

```
margin: 10px 15px;
```

> Padding and border only allow positive numbers including 0. But margins can be negative!! Negative margins can pull element outside of the parent.

HTML

```
<main>
  <div class="pink-box"></div>
</main>
```

CSS:

```
main {
  width: 200px;
  height: 200px;
  border: 3px solid;
}

.pink-box {
  width: 50%;
  height: 50%;
  border: 3px solid deeppink;
  background: white;
  margin-top: -32px;
  margin-left: -32px;
}
```

![](https://i.imgur.com/uQIeFSP.png "Photo by Addania")

> What if we wanted to do something super cool? Like a heading which peeks out of its container? Like this:

![](https://i.imgur.com/GL1kzFM.png "Photo by Addania")

> This is how you could achieve it.

HTML:

```
 <body>
    <div class="card">
      <div class="header">HEADER PEEKING OUT</div>
      <p>
        Otters have long, slim bodies and relatively short limbs. Their most
        striking anatomical features are the powerful webbed feet used to swim,
        and their seal-like abilities holding breath underwater.
      </p>
    </div>
  </body>
```

CSS

```
body {
  background-color: #222;
  box-sizing: border-box;
  margin: 50px;
}

.card {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
}

.header {
  background-color: deeppink;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  margin-top: -40px;
  padding: 25px;
}
```

> Please note, that in case this is not working for you, and instead of re-positioning the header, you decrease the margin of entire card - try to add some padding to the container where the header is positioned. Alternative increase the negative margin (it needs to be more than for example padding of the card)

> Negative margin can also pull a sibling closer:

HTML:

```
<main>
  <div class="pink-box"></div>
  <div class="neighbor"></div>
</main>
```

CSS

```
main {
  width: 200px;
  height: 200px;
  border: 3px solid;
}

.pink-box {
  width: 50%;
  height: 50%;
  border: 3px solid deeppink;
  background: white;
  margin-bottom: -32px;
}

.neighbor {
  width: 50%;
  height: 50%;
  background: silver;
  margin-left: 16px;
}
```

![](https://i.imgur.com/1ziZlPf.png "Photo by Addania")

> If we apply negative margin to the first box, it will influence all its siblings position!!!

HTML:

```
<main>
  <div class="box one"></div>
  <div class="box two"></div>
  <div class="box three"></div>
</main>
```

CSS

```
main {
  width: 200px;
  height: 200px;
  border: 3px solid silver;
}

.box {
  width: 25%;
  height: 25%;
  border: 3px solid;
  background: white;
}

.box.one {
  border-color: deeppink;
  margin-top: -24px;
}
```

![](https://i.imgur.com/NHHpHPI.png "Photo by Addania")

> The interesting thing is those two black boxes: they "follow" the deep pink box up. When we use margin to tweak an element's position, we might also be tweaking every subsequent element as well. This is different from other methods of shifting an element's position, like using `transform: translate`

> There is one last trick a negative margin can do. Imagine you have a card which has a padding. So everything inside of it (all its children) will have this padding.

![](https://i.imgur.com/BAKi7AA.png "Photo by Addania")

> What if we wanted to create one exception for the image which will ignore the padding and will extend from one edge to the other of the card? Something like this?

![](https://i.imgur.com/esazm7o.png "Photo by Addania")

> We can achieving it by wrapping the image in a wrapper and applying negative margin to the right and left both!! Please note: images are "replaced elements". They do not reside in the DOM, they are imported. FOr that reason, any manipulation and layouting with images should be done using wrappers around them. Not with images directly.

HTML

```
<div class="card">
  <p>
    Otters have long, slim bodies and relatively short limbs. Their most striking anatomical features are the powerful webbed feet used to swim, and their seal-like abilities holding breath underwater.
  </p>
  <div class="wrapper">
  <img alt="A cute otter in water" src="/course-materials/otter.jpg" />
  </div>
  <p>
    More importantly, otters are glorious water dogs, playful and curious. The otter, no other, is the best animal.
  </p>
</div>
```

CSS

```
body {
  background: #222;
  padding: 32px;
}

.card {
  background-color: white;
  padding: 32px;
  border-radius: 8px;
}

.wrapper {
  margin-left: -32px;
  margin-right: -32px;
}

img {
  display: block;
  width: 100%;

}

p, img {
  margin-bottom: 16px;
}

```

> Nice article about negative margins is here: https://www.quirksmode.org/blog/archives/2020/02/negative_margin.html

> Margin is really about changing the gap between elements.

> Margin property also allows to position an element in the center of a parent element. There are 2 requirements in order to do it:

**1/** top and bottom margin is defined and then followed by word auto, meaning right and left margin will be done automatically based on the maximum available horizontal space of the element and the container in which we want to center it

**2/** width of the element needs to be defined and needs to be smaller than the width of the container where the element resides. Why? Block elements will naturally grow to fill the available horizontal space, so we need to give our element a width in order to center it.

```
div {
width: 200px
margin: 0px auto;
}
```

> Another example:

HTML:

```
<main>
  <section class="content">
    Hello World
  </section>
</main>
```

CSS:

```
.content {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  background: palevioletred;
  padding: 16px;
}

main {
  width: 100%;
  height: 200px;
  border: 3px solid silver;
}
```

![](https://i.imgur.com/IsCaFWd.png "Photo by Addania")

> This only works for horizontal margin. Setting top/bottom margin to auto is equivalent to setting it to 0px.

> There are other ways how to center items in a container with modern layout rendering modes like Flexbox or Grid.

> Important difference is that margin auto is used on the single child element selectively!

> Flexbox and Grid are both powerful tools for managing layout. But their properties are applied to a container, and affect all children.

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

**LAYOUTS**

> In CSS we have different layouting modes. Here are examples: Flow, Flexible Box (FlexBox), Positioned layout, Grid (CSS Grid), etc.

> The default one is FLOW. Plain HTML document without CSS uses FLOW exclusively.

**FLOW LAYOUT**

> In Flow layout, every element will use a display value of either `inline`, `block`, or `inline-block`. This value governs how the Flow layout algorithm will place the element. The default value depends on the tag; `div`, `section`, `nav`, `header`, `footer`, `article`, `paragraph`, `heading`, `form`, `blockquote` are block by default, while `spans` , `strong`, `a` are inline.

> In flow layout, block elements stack in the block direction, and inline elements stack in the inline direction.

**Greedy block elements**

> When you place a block element to the page, its content box consumes hungrily all available horizontal space!

> A heading might only need 150px to contain its letters, but if you put it in an 800px container, it will consume 800px of width for its content.

![](https://i.imgur.com/TZFFgjG.png "Photo by Addania")

> Even if we shrink its content, so that it only uses so much space that it needs with width: fit-content, it will still not share its inline space with another element - instead margin will fill out the remaining horizontal space:
> HTML:

```
<h2>
  Hello World
</h2>
<div class="red-box"></div>
<h2>
  Hello World
</h2>
<div class="red-box"></div>
```

CSS

```
h2 {
  width: -moz-fit-content;
  width: fit-content;
  border: 2px dotted;
}

.red-box {
  width: 50px;
  height: 25px;
  background: red;
}
```

![](https://i.imgur.com/RbTY7cp.png "Photo by Addania")

**Polite inline elements**

> These are polite guys who do not want to make a fuss. They go with the flow. They are rendered where they are. Lots of CSS properties do not work with inline elemets: adjust the positioning or changing its size. FOllowing will not have any effect:

```
strong {
  height: 2em;
  width: 300px;
  margin-top: 300px;
  margin-bottom: 300px;
}
```

> Inline elements are like `go-with-the-flow-type` folks. They don't want to inconvenience anyone by pushing any boundaries. You can shift things in the inline direction with margin-left and margin-right, but you can't change its width or height.

> The exception are `replaced` elements also called `foreign` objects:

- `<img />`
- `<video />`
- `<canvas />`

> These replaced elements are technically inline but they are special :) They can affect block layout. We can set explicit dimensions or add some magin-top.

> How to reconcile this? There is a trick. Try to pretend that it's a foreign object within an inline wrapper. When you pass it a width or height, you're applying those properties to the foreign object. The inline wrapper still goes with the flow.

> Another exception is a `button` tag. They are technically inline, but can be given be given width and height.

**Magic space around inline elements**

> Imagine you have an image in a div:

HTML

```
<div>
    <img alt="cat" src="https://i.imgur.com/9h4pjj0.png">
</div>
```

CSS

```
img {
  width: 300px;
}
```

> When you inpect the height of the image it will be: 132 px

![](https://i.imgur.com/aTBTWuu.png "Photo by Addania")

> When you inpect the height of the image it will be: 136.13 px

![](https://i.imgur.com/guqtUjm.png "Photo by Addania")

> Why is that? Why is there 6px difference in height? It's neither a padding, border or a margin. Reason is that the inline elements are treated like typography and there is some space reserved between lines, because we usually do not want text to be cramped at each other.

> We can fix it with setting `display: block` to the image or add `line-height: 0` to the wrapping div.

> Now let's place 3 images nex to each other - they are all inline, so shoudl be placed next to each other.

HTML

```
    <div>
      <img alt="cat" src="https://i.imgur.com/9h4pjj0.png" />
      <img alt="cat" src="https://i.imgur.com/9h4pjj0.png" />
      <img alt="cat" src="https://i.imgur.com/9h4pjj0.png" />
    </div>
```

> You will notice there is space between them. 😮

![](https://i.imgur.com/b1qAoCs.png "Photo by Addania")

> This is a whitespace between elements! Surprisingly, if we squish our HTML so that there are no newlines or whitespace characters between images, this problem goes away:

HTML

```<div>
      <img alt="cat" src="https://i.imgur.com/9h4pjj0.png" /><img alt="cat" src="https://i.imgur.com/9h4pjj0.png" /><img alt="cat" src="https://i.imgur.com/9h4pjj0.png" />
    </div>

```

![](https://i.imgur.com/5qE2UiS.png "Photo by Addania")

> This happens because HTML is `space-sensitive`, at least to an extent. The browser can't tell the difference between whitespace added to separate words in a paragraph, and whitespace added to indent our HTML and keep it readable.

> How do we solve this problem? There are some ideas on CSS Tricks: https://css-tricks.com/fighting-the-space-between-inline-block-elements/. But this doesn't come up a ton these days. In most realistic scenarios, we'd use flexbox or floats, and neither of those rendering modes suffer from this problem.

**Inline elements can wrap**

> Inline elements can wrap. Which is also one of their trick - compared to block elements.

> Therefore they can create other shapes than rectangles:

```
<p>
  This is a paragraph with <strong>some very bolded words in it</strong>.
</p>
```

![](https://i.imgur.com/3oBAWqY.png "Photo by Addania")

> It's worth noting that it's still considered "one shape". If we add a border:

```
strong {
  border: 2px solid;
}
```

> ...we can see that we don't get 2 discrete rectangles, but rather a single rectangle cut in half and repositioned:

> This is also a reason why some preperties do not work on them. Like vertical margins.

> Other properties like horizontal padding leads to unexpected results. Let's add some padding left and right to the wrapped text in the paragraph.

HTML:

```
<p>
  <strong>
    These words are broken up across many lines.
  </strong>
</p>
```

CSS:

```
strong {
  padding-left: 8px;
  padding-right: 8px;
  background: peachpuff;
}

p {
  max-width: 125px;
}
```

> Result is unexpected. Padding is only applied to the tips - very beginning of the text and at the very end (last line - end of the text)

![](https://i.imgur.com/RrMA6bu.png "Photo by Addania")

> If we want to change this behaviour and applie this padding to each individual line, then we can do a black magic trick:

```
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
```

![](https://i.imgur.com/aOMZsoJ.png "Photo by Addania")

> `box-decoration-break` accepts two values: `slice` (default)and `clone`.

> `slice` acts like a sushi roll being chopped. It's not a bunch of individual boxes, it's 1 long box, sliced into bits.

> `clone` is interesting: it allows us to treat each segment as its own box, and copy the styles to each one. Instead of 1 long box, we have 4 boxes, each with the same styles.

**Mutant inline-block**

> `display: inline-block` is a weird fella. It is a combination of block and inline display.

> Essentially, inline-block allows you to drop a block element into an inline context. It's a block in inline's clothing. it's an element that internally acts like a block element, but externally acts like an inline element. The parent container will treat it as an inline element, since it's external. But the element itself can be styled like a block.

> This means that inline-block elements will go with the flow, but we will be able to apply block properties on it: like width, height, vertical margins, on hover events etc.

> Cute example is:

HTML

```
<p>
  <strong>Warning:</strong> Alpaca may bite.
</p>
```

CSS:

```
strong {
  display: inline-block;
  color: white;
  background-color: red;
  width: 100px;
  text-align: center;
}

strong:hover {
  transform: scale(1.2);
}
```

> We've effectively turned our strong element into a block element, as far as its own CSS declarations are concerned. Everything between the four corners of the element is block in nature. But from the paragraph's perspective, it's an inline element. It lays it out as an inline element, in the inline direction beside the text.

> Disadvantage of inline-block elements is that they do not wrap 😥

**WIDTH ALGORITHMS**

> Block elements have default width of `auto`. They grow to consume (100% of parent content width - child margins)

HTML:

```
<body>
 <h1>
  Hello World
 </h1>
</body>
```

CSS:

```
h1 {
  margin: 0 16px;
  background-color: chartreuse;
}
```

![](https://i.imgur.com/tN9jXMu.png "Photo by Addania")

> If we set the width of a block element to 100% the result is surprising. It will grow outside of the frame because of the 2\*16px margin

> Reason is that 100% with means 100% of the parent content tag under all circumstances. If body is 400px wide, then also h1 will be 400px wide. But because we have 32px margin, it will grow out of the frame.

![](https://i.imgur.com/6ZM3s85.png "Photo by Addania")

> Therefore again, block elements have default with `auto` and not `100%`. It's a subtle but important distinction: by default, block elements have dynamic sizing. They're context-aware.

> Broadly speaking, there are two kinds of values we can specify for width:

- Measurements (100%, 200px, 5rem)
- Keywords (auto, fit-content)

> Measurement-based values are either completely explicit (eg. 200px), or relative to the parent's available space (eg. 50%).

> Keywords, on the other hand, let us specify different sorts of behaviours depending on the context.

> Some of the keywords:

> `auto` - allow to consume as much space as available given contraints (parent content size, margins, etc)

> `min-content` - is an intrinsic value - it chooses the smallest available space **based on the element itself / elements' children**! It is different from `auto` or `measurements` which are **extrinsic** and **based on the parent** container. min-content will shrink the width to the minimum, so that each line contains at least one word. Whenever it encounters whitespace or a hyphenated word, it'll break it onto a new line.

HTML:

```
<h1>
  I am shrinking and shrinking, slowly fading away.
</h1>
```

CSS:

```
h1 {
  width: min-content;
  background-color: deeppink;
}
```

![](https://i.imgur.com/W94uNQa.png "Photo by Addania")

> `max-content` - it never adds any line-breaks. The element's width will be the smallest value that contains the content, without breaking it up. If the content is too big, it will create a vertical scroll bar. It pays no attention to the constraints set by the parent. It will size the element based purely on the length of its unbroken children. `max-content` is based also on children.

![](https://i.imgur.com/oFSQXtP.png "Photo by Addania")

> How could this be useful? Only for those test which are short and we dont want to break them. It has an advantage that its size is only around the letter, it does not consume all 100% of available space as for auto. So adding a background-color would only color the background behind letters, not whole line:

CSS

```
h1 {
  width: max-content;
  background-color: mediumspringgreen;
}
```

![](https://i.imgur.com/dj8l4md.png "Photo by Addania")

> With width: auto

CSS

```
h1 {
  width: auto;
  background-color: mediumspringgreen;
}
```

![](https://i.imgur.com/KIMNK39.png "Photo by Addania")

> `fit-content` - its width is also based on the children. But it is the middle ground between min and max content. If that width can fit within the parent container, it behaves just like max-content, not adding any line-breaks. If the content is too wide to fit in the parent, however, it adds line-breaks as-needed to ensure it never exceeds the available space.

HTML

```
<h2>Short</h2>
<h2>A mid-length heading</h2>
<h2>The longest heading you've ever seen in your life, will it ever end, ahhhhh ohmigod 😬😬😬😬😬😬😬</h2>
```

CSS

```
h2 {
  width: -moz-fit-content;
  width: fit-content;
  background-color: peachpuff;
  margin-bottom: 16px;
  padding: 8px;
}
```

![](https://i.imgur.com/XJqAhip.png "Photo by Addania")

> `fit-content` behaves just like `width: auto`. But it does not extend to the 100% width of the parent like auto down in the piture bellow. Which makes it better to use background color.

![](https://i.imgur.com/w7BsFSn.png "Photo by Addania")

> If we dont want to or cant use fit-content but want to replicate its behaviour, we can use 2 workarounds:

CSS

```
h2 {
  max-width: max-content;
}
```

> Why does it work? Because we haven't changed the width property, the default block-level behavior will continue; the h2 will grow to fill the available horizontal space.

> Let's suppose we have a 600px container, and our h2 only has a few characters. The max-content size might be 100px. Because 100px is smaller than 600px, max-width will constrain the width.

> What if the h2 has a bunch of characters? Maybe max-content would be 1000px. This value is larger than the container size of 600px, and so max-width has no effect.

> Another solution is:

CSS

```
h2 {
  display: table;
}
```

> display: table causes elements to render using Table layout. This is the layout mode used by the <table> HTML tag. It's an alternative algorithm to flow layout or positioned layout.

> By default, tables will shrink to hold their contents, but are still block-level elements. This is exactly what we want in this case, though it is a bit of a hack; a table element expects to have table rows as children, not text.

> We can add constraints to an element's size using `min-width` and `max-width`. This is useful to account of possibly idfferent screen sizes. The particularly exciting thing about min-width and max-width is that they let us mix units. We can specify constraints in pixels, but set a percentage width.

> **DEFAULT VALUES**

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

> The way width is calculated is based on the `box-sizing` property. It can hold 2 values: default `content-box` or `border-box`

> By default it has value of `content-box`

> Imagine code like this where section is 500px:

```
<style>
  section {
    width: 500px;
  }
  .box {
    width: 100%;
    padding: 20px;
    border: 4px solid;
  }
</style>
<section>
  <div class="box"></div>
</section>
```

> What will be the width of the box? It will actually be 548px.

```
500px of content + 2*20px of padding + 2*4px of border
```

![](https://i.imgur.com/6Kh7jZx.png "Photo by Addania")

> What will be the height? Height will be 48px

```
0px of content because we did not specify it + 2*20px padding +2*4px of border
```

> But this is not what we want. We probably want that the content + padding + border is of the width of 500px. For that it is better to use `border-box` value for the `box-sizing` property

![](https://i.imgur.com/axhzVsH.png"Photo by Addania")

> Border-box will then calculate the width of the box based on its content, padding and the border

> Often in applications you would reset the box-sizing for whole document to global styles. In order to do so, copy this snippet any time you start a new project. It is way easier and intuitive to work with border-box then with the content-box:

```
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

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

The CSS in the example above will change the display of all `<h1>` elements to inline. The browser will render `<h1>` elements on the same line as other inline elements immediately before or after them (if there are any).

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
