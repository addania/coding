---
title: "Google Fonts in React"
date: "2019-10-01"
---

And here is how to import Google fonts to React. Very good library of around 1000 fonts can be found on w3schools

> Go to:
```
https://www.w3schools.com/howto/howto_google_fonts.asp
```
> Find your favourite font, for example Mansalva

> Click on button try it

> Find url in the html document: https://fonts.googleapis.com/css?family=Mansalva

> Create a new css file for example index.css

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
> Alternatively use className to define a style
```
.fonts {
  font-family: 'Mansalva';
}
```
> Go to your index.js

> Import your index.css please note that index.js and index.css need to be in the same folder
```
import "./index.css"
```
> Add the className fonts to your tag where you want to apply the style, for example:
```
<div className="fonts">
```