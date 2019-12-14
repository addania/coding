---
title: "Conditionally render a component"
date: "2019-12-04"
---

![](https://i.imgur.com/BRbkVil.jpg "Photo by Aleksandar Pasaric from Pexels")

How can we render an element under certain condition? Unfortunatlly, we cannot use <code>if</code> statements within JSX like:
```
(<h1>
  {
    if (purchase.complete) {
      'Thank you for placing an order!'
    }
  }
</h1>)
```
It is due to compiling.

**Alternative 1:**
```
let message;

if (user.age >= 18) {
  meessage= (
    <h1>
      Let´s go out!
    </h1>
  );
} else {
  message = (
    <h1>
      Let´s study
    </h1>
  );
}
```

**Alternative 2:**
```
const headline = (
  <h1>
    { age >= 18 ? 'Let´s go out' : 'Let´s study' }
  </h1>
);
```

**Alternative 3:**
```
const lunch = (
  <ul>
    <li>Foods</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Salad</li> }
    { age > 25 && <li>Veggies</li> }
  </ul>
);

```

![](https://i.imgur.com/4YCrCOR.jpg "Photo by Mudassir Ali from Pexels")