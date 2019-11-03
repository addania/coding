---
title: "Google Fonts in React"
date: "2019-09-30"
---

It took me a while to figure out how to import Google fonts to React. Very good library of around 1000 fonts can be found on w3schools

> go to:

https://www.w3schools.com/howto/howto_google_fonts.asp

> find your favourite font, for example Mansalva

> click on button try it

> find url in the html document: https://fonts.googleapis.com/css?family=Mansalva

> Create a new csss file for example index.css

> populate the file with this code

@import url('https://fonts.googleapis.com/css?family=Mansalva');

> add the styling for a body tag

body {

  font-family: 'Mansalva';

}

> alternatively use className to define a style

.fonts {

  font-family: 'Mansalva';

}

> go to your index.js

> import your index.css please note that index.js and index.css neeed to be in the same folder

import "./index.css"

> add the className fonts to your tag where you want to apply the style, for example:

<div className="fonts">
