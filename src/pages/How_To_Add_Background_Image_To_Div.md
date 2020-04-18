---
title: "Background image in div"
date: "2019-11-15"
category: "knowledge-base"
---

![](https://i.imgur.com/M6Q6Fay.jpg "Photo by Aneta Foubíková from Pexels")

First import your image:
```
import Background from './advent.jpg';
```

Then use it on your component style:
```
<Col sm={12} style={{backgroundImage: `url(${Background})`}} />
```

or

```
<h2 style={{backgroundImage: `url(${Background})`}} >HI</h2>
```

Alternative, create a <code>className</code> on your element
```
className="background"
```

And then style your CSS:
```
.background{
  background-image: url("https://i.imgur.com/obmwHdn.jpg");
  width: 600px;
}
```

Further interesting resources:

https://css-tricks.com/text-blocks-over-image/

![NewZealand](https://i.imgur.com/GUSKq9U.jpg "Photo by Tyler Lastovich from Pexels")