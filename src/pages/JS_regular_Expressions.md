---
title: "Javascript Regular expressions"
date: "2020-04-04"
---
![](https://i.imgur.com/ETtwNWY.jpg "Photo from wallpapersafari.com")<p style="font-size: 12px; text-align: right">_Photo from wallpapersafari.com_</p>


> Regular expressions (regexes) are patterns that describe strings. We might write a regex for filenames ending in ".jpg". Or we might write one that recognizes phone numbers.

> test if a is contained in a string
```
/a/.test('a')
true
/a/.test('b')
false
/a/.test('cat')
true
/A/.test('a')
false
/cat/.test('cart')
false
/a cat/.test('that is a cat')
true
``` 

>We can also define the regular expression and then test if give string maches
```
var re = /at/
re.test('bat')
true
```
> Regexes like /a/ are literal: they specify exact characters to match. The real power in regexes is in the various operators. The most basic is ., the wildcard operator. It matches any character. But the character must be present; . won't match the empty string.
```
/./.test('a')
true
/./.test('b')
true
/./.test('')
false
/a./.test('ah')
true
/a./.test('ha')
false
/x.z/.test('xyyz')
false
/x..z/.test('xaaz')
true
```

> There is only one exception, it does not match new line characters:
```
/./.test('\n')
false
```

> Sometimes we need to allow multiple alternatives. We can separate them with a pipe character, |, pronounced "or".
> 
```
/a|b/.test('a')
true
/a|b/.test('b')
true 
/a|b/.test('c')
false
/at|og/.test('cat')
true
/at|og/.test('dog')
true
```

```
var re = /cat|dog|horse/
re.test('catzor')
true
```

> Boundaries match beginning or end of a string. ^ matches beginning, $ matches end.
```
/^cat/.test('cat')
true
/^cat/.test('cats are cute')
true
/^cat/.test('I like cats')
false

/cat$/.test('a cat')
true
/cat$/.test('cats')
false

/^a$/.test('a')
true
/^a$/.test('ab')
false
```

>To match empty string we use:
```
/^$/.test('')
true
/^$/.test(' ')
false
```

> Hex codes - Computers internally store text as numbers. As a shorthand, we usually write those numbers out as hexadecimal codes. For example A is in hexcode \x41, B is \x42 and M is \x4d
```
/\x41/.test('A') // "A" is x41
true
/\x41/.test('CATS ARE GOOD')
true
/\x4d/.test('M')
true
```
>  "?" is x3f and "!" is x21

> hex codes in regex must be typed with \x and then 2 digits

> Multiplication: The + operator requires something to occur one or more times.
```
/a+/.test('aaa')
true
/a+/.test('a')
true
/ca+t/.test('caaat')
true 
/ca+t/.test('ct')
false
```

+ works with . .+ means any character at least once:
```

/.+/.test('a')
true 

/.+/.test('cat')
true 

/.+/.test('')
false

/a.+z/.test('aveloz')
true


/a.+z/.test('az')
false 
```

>The * operator is similar to +, but means "zero or more times".

```

/a*/.test('a')
true

/a*/.test('')
true
/a*/.test('aa')
true 
```

> Some more complex examples:
```
/a+b*c+/.test('aacc')
true 
/a+b*c+/.test('aa')
false

/a+b*c+/.test('aabccc')
true 
/a+b*c+/.test('abbbbc')
true

/a+b*c+/.test('bc')
false
```

>Write a regex that reckognized words which start and end with t
```
var re = /^t.*t$/
```

