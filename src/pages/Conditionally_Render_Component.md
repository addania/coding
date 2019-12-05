---
title: "Conditionally render a component"
date: "2019-12-04"
---

Conditionally render an element

We cannot use <code>if</code> statements within JSX like:
```
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)

```
It is due to compiling

Alternative1:
```
LET MESSAGE;

IF (USER.AGE >= DRINKINGAGE) {
  MESSAGE = (
    <H1>
      HEY, CHECK OUT THIS ALCOHOLIC BEVERAGE!
    </H1>
  );
} ELSE {
  MESSAGE = (
    <H1>
      HEY, CHECK OUT THESE EARRINGS I GOT AT CLAIRE'S!
    </H1>
  );
}
```

Alternative2:
```
const headline = (
  <h1>
    { age >= 18 ? 'Let´s go out' : 'Let´s study' }
  </h1>
);
```

Alternative3:
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


