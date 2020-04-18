---
title: "Throwing errors in Javascript"
date: "2020-02-27"
category: "knowledge-base"
---

![](https://i.imgur.com/eusnq5M.jpg "Photo from Gratisography from Pexels")

> Because everyone loves when the app throws an error, right? That is why it is useful to know how to actually throw it :) You grab the error, strain the muscles, grind your teeth and throw it as far as possible :)) And having utility functions to CATCH those poor innocent errors, would be practical too.

>Anyhow, to log an error in the console <code>use throw new Error</code> and some meaningful description of the error itself:
```
throw new Error('WAAAA');
```
>Another way to throw an error suing throwing and object:
```
const generateError = (message: string, code: number) => {
    throw { message: message, errorCode: code }
}

generateError("Upsy", 500)
```

![](https://i.imgur.com/lTVJXap.jpg "Photo by Andrea Piacquadio from Pexels")
