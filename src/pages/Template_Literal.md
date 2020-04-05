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

> Now let's start discovering template literals more:

> It seems that JavaScript support 3 ways to define a string: 'single quoted' and "double quoted" and with `backticks`. They're treated as ordinary strings: `hello` is the same as 'hello'.

> String defined with `backticks` are called "template literals". They have several features that allow them to be used as "templates", with placeholders that are filled in later.

> Interpolation is the most common use case. "Interpolation" means "inserting something into something else". With template literals, we can insert the result of any JavaScript expression into the string by wrapping it in ${...}.
```
`1 + 1 = ${1 + 1}`
'1 + 1 = 2' 

`${'Shouting'.toUpperCase()} and ${'Whispering'.toLowerCase()}`
'SHOUTING and whispering' 
```
> Interpolating with <code>${...}</code> converts the value to a string by calling its <code>.toString()</code> method. For numbers, that works great. But for arrays, it probably won't do what we want. For objects, it definitely won't do what we want!

```
const x = 4;
`1 + ${x} = ${x + 1}`
'1 + 4 = 5' 
```
> We can use single quote in the template literal, if we escape it:
```
`\'`
```

>Normally, JavaScript strings can't have newlines in them:
```
const x = 'oh
no'
SyntaxError: Invalid or unexpected token 
```

> However, template literals don't have that limitation: they can contain newlines! This simplifies a lot of code. For example, here's an email template written using old-style JavaScript:
```
const name = 'Amir'
const email = `
  Hi, ${name},
  
  We've updated our privacy policy!
`
email === "\n  Hi, Amir,\n  \n  We've updated our privacy policy!\n"
true
```
