---
title: "Google Fonts in React"
date: "2019-10-01"
category: "knowledge-base"
---

![](https://i.imgur.com/W5e4AEm.jpg "Photo by Pixabay from Pexels")

And here is how to import Google fonts to React. Very good library of around 1000 fonts can be found on w3schools

> Go to:
```
https://www.w3schools.com/howto/howto_google_fonts.asp
```
> Find your favourite font, for example Mansalva

> Click on button try it

> Find URL in the HTML document: https://fonts.googleapis.com/css?family=Mansalva

> Create a new CSS file for example <code>index.css</code>

> Populate the file with this code
```
@import url('https://fonts.googleapis.com/css?family=Mansalva');
```
> Add the styling for a body tag
```
body {
  font-family: 'Mansalva';
}
```
> Alternatively use <code>className</code> to define a style
```
.fonts {
  font-family: 'Mansalva';
}
```
> Go to your <code>index.js</code>

> Import your index.css please note that <code>index.js</code> and <code>index.css</code> need to be in the same folder
```
import "./index.css"
```
> Add the className fonts to your tag where you want to apply the style, for example:
```
<div className="fonts">
```