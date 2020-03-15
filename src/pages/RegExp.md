---
title: "Using RegExp"
date: "2020-03-12"
---
![](https://i.imgur.com/HaPRiVv.jpg "Photo from destructoid.com")<p style="font-size: 12px; text-align: right">_Photo from destructoid.com_</p>

>Using regular expressions in Javascript can be very powerful but also tricky for newbies like me. 

>Let's start with a problem. All over your brand new blog you have beautiful images! They come from different websites like Pexels, Pixabay, and were created by different people. But you, as a proper `hacker`, want to claim all those spectacular images as YOURS.. your preciouses 😈

> You get strings such as:
```
"Photo from pixabay.com"
"Photo by Random Person from Pexels"
```

> What you want to achieve is ultimately that those result in:
```
"Photo by Addania"
```

> We can write a function that will replace random people and random websits with your own signature :)
```
const replaceAuthor = (string) => {
    return string.replace(/(Photo by .+ from Pexels)|(Photo from \b(\w*.com\w*)\b)|(Photo from \w+)/, "Photo by Addania")
}
console.log(replaceAuthor("Photo from pixabay.com"))
console.log(replaceAuthor("Photo by Random Person from Pexels"))
```
> Please note that `.replace` is a string method which takes in 2 arguments:
>- 1st one is a regular expression which we denote with `/` at the beginning and at the end
>- 2nd argument is a string which will replace whatever regexp from the first argument matches (interestingly the 2nd argument can also be a function)

> Also note that the regular expression itself looks like this:
```
/(Photo by .+ from Pexels)|(Photo from \b(\w*.com\w*)\b)|(Photo from \w+)/
```
>It consists of 3 parts:

- `Photo by .+ from Pexels` - basically "Photo by" ANYTHING and then followed by "from Pexels"

OR (denoted with `/`)

- `Photo from \b(\w*.com\w*)\b`  - basically "Photo from" and then 1 single word with ".com" at the end

OR (denoted with `/`)

- `Photo from \w+` - basically "Photo from" and then 1 single word

> Quick beginners course on regular expressions can be found at [regexone.com](https://regexone.com/)

> Great online tool to test if your regular expression works is at [regex101.com](https://regex101.com/)


![](https://i.imgur.com/uZmysyC.jpg "Photo from theverge.com")<p style="font-size: 12px; text-align: right">_Photo from theverge.com_</p>
