---
title: "Background image in div"
date: "2019-11-15"
---

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

Alternative, create a className on your element
```
className="background"
```

And then style your css:
```
.background{
  background-image: url("https://i.imgur.com/obmwHdn.jpg");
  width: 600px;
}
```