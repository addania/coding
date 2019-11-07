---
title: "Adding CSS to React"
date: "2019-10-06"
---

There are basically 2 ways to style the React:

1) importing a standard CSS file for example index.css, which can reside side by side next to your main file, for example index.js. 

> On Ubuntu console, create the css file
```
touch index.css
```
> Add some styling to your css file, which follows standard CSS rules, for example in this case we will center the video asset which has class name called player:
```
.player {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
```
> index.js will look like this:
``` 
<video controls className="player">
  <source src="/video.mp4" type="video/mp4">
  </source>
</video>
```

> Open your index.js file and import your CSS to your JS file:
```
import "/index.css";
```

2) use styling inline in JS file. 

> Open your index.js file. In the tag where you want to apply your styles write style={{}} and add your style in between of the brackets. First pair of brackets means we are injecting JSX to the html, second pair of brackets means that what we are inputting there is in fact an object. Multiple styles needs to be separated by comma (just like in any other object). Please make sure you do not type styles (plural) instead of style (singular). Correct is style (singular). Please make sure that everything that in CSS uses minus (example: margin-left) must be inline without the minus and camelCased (example: marginLeft). Plus there must always be quotation marks even if in the CSS there wouldnt be. Full example:
```
<video  style={{width:"500px", display: "block", marginLeft: "auto", marginRight:"auto"}} controls>
```