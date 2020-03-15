---
title: "Template Literal"
date: "2020-03-14"
---
![](https://i.imgur.com/ETtwNWY.jpg "Photo from wallpapersafari.com")<p style="font-size: 12px; text-align: right">_Photo from wallpapersafari.com_</p>

> Some things in life are obvious. Like when you want to concatenate two strings for example <code>"For the " </code> and <code>"Alliance!"</code> everyone knows that there are **maximum** of two (reasonable) ways:

> One: The most straight-forward, simple and elegant way is using a `plus` sign:
```
const callToArms = "For the "
const theOnlyCorrectAndMorallyAcceptableFaction = "Alliance!"
const warCry = callToArms + theOnlyCorrectAndMorallyAcceptableFaction
console.log(warCry)
```

> Two: More complex way when you want to show off that you know string methods is using `concat`. Ofc only if you want to impress someone:
```
const callToArms = "For the "
const theOnlyCorrectAndMorallyAcceptableFaction = "Alliance!"
const warCry = callToArms.concat(theOnlyCorrectAndMorallyAcceptableFaction)
console.log(warCry)
```

> Now what on earth is `Template Literal`? And why would you introduce a third option in already perfect world with already too (twoo) many unnecessary choices? To be even cool(er) and even more high-end? Kaman programmers. Why, just why? :)

>OK, enough of initial shock and drama, let's learn something cool(er). It turns out there is another way (and now I wonder how many more(er) I am still not yet aware of) how to contactenate two strings. It is called `Template Literal`... because it makes perfect sense (??!) and the syntax also makes perfect sense (totally) and is not at all overly complicated :)
```
const callToArms = "For the "
const theOnlyCorrectAndMorallyAcceptableFaction = "Alliance!"
const warCry =`${callToArms}${theOnlyCorrectAndMorallyAcceptableFaction}`
console.log(warCry)
```

> Because everyone loves `dollars` and `braces` ;)


![](https://i.imgur.com/8ubmVyL.jpg "Photo by Reynaldo #brigworkz Brigantty from Pexels")<p style="font-size: 12px; text-align: right">_Photo by Reynaldo #brigworkz Brigantty from Pexels_</p>
