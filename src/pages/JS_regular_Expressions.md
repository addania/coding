---
title: "Javascript Regular expressions"
date: "2020-04-04"
category: "knowledge-base"
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

Parens

> will this be true or false?
```

``` 

>Actually true

>Why? Because it says either it starts with a OR ends with b!!

>We can use brackets to enforce certain logic:
```
/^a|b$/.test('ax')
```
is same as

```
/(^a)|(b$)/.test('ax')
```

>We can change it to:
```
(a|b)$/.test('ax')
false
```

>Brackets can also shorten the code:
``` 
/^(jpg|p(ng|df))$/.test('jpg')
true 
```
> How to make sure our code also takes into consideration jpeg??
```
/^(jpe*g)|p(ng|df))$/.test('jpg')
```

```
/^(a|b)+$/.test('bababa')
true 
```

> We can say a or empty like this:
```
^(a|)$/.test('')
true

/^(a|)$/.test('a')
true

```

> We can excape characters with \

``` 
/\./.test('That is a cat.')
true


/.\+./.test('111')
false 

/.\+./.test('1+1')
true 

```

Character classes:

> \d means a digit

> \s means a white space

> \t is a tab

> \D any character that is NOT a digit

```
/\s/.test(' ')
true

/\s/.test('\n')
true

/\s/.test('')
false

/\d/.test('0')
true

/\D/.test('0')
false 

/\S/.test(' ')
false 

/\S/.test('0')
true
```

> If we need only lets say 3 characters, we can write (a|o|u) or alternatively [aou] -which is a character set

```
/^c(a|o|u)t$/.test('cat')
true
/^c[aou]t$/.test('cat')
true 

/^c[aou]t$/.test('cot')
true
```

>What if we want to allow any string of lower case letters? We'd have to write /(a|b|c|d|e| and so on. Instead, we can write another character set.
``` 
> 
/[abcdefghijklmnopqrstuvwxyz]/.test('a')
true 
> 
/[abcdefghijklmnopqrstuvwxyz]/.test('g')
true 
```
>That was shorter, but still wordy. We can specify an entire range of characters by using -.

```
/[a-z]/.test('g')
true 
> 
/[1-3]/.test('1')
true 
> 
/[1-3]/.test('a')
false 
> 
/[1-3]/.test('2')
true
```
>As usual, we escape special characters when we want them to be literal. This range contains only one character, an escaped ] written as \].

```
/[\]]/.test(']')
true 
```
> Character sets can be negated to mean "everything not in the set".We negate with ^, a character that we already saw. Normally it means "beginning of line". But inside [square brackets], it means "negate the character set". (There are only so many symbols on a keyboard, so some get reused.)

```
/[^a]/.test('a')
false 
> 
/[^a]/.test('5')
true 
```
>Negation also applies to ranges.

```
/[a-z]/.test('h')
true 
> 
/[^a-z]/.test('h')
false 
```
>Character sets match exactly one character in the string. (This is like character classes, which also match only one character.) To match more than one character, we can use + or *.
``` 
^[a-z]$/.test('cat')
false 
> 
/^[a-z]+$/.test('cat')
true 
```
>Maybe
The ? operator matches a character zero or one times, but not more than one.
```
/^a?$/.test('a')
true 
> 
/^a?$/.test('')
true 
> 
/^a?$/.test('b')
false 
> 
/^a?$/.test('aa')
false
```

>The ? operator affects whatever is immediately before it. For example, in ab?, the ? operators only affects "b", not "a". We say that it binds tightly.
```

/^ab?$/.test('a')
true 
> 
/^ab?$/.test('b')
false 
> 
/^ab?$/.test('ab')
true 
```


>To make ? include more characters, we can group them using parens. Then we apply the ? to the whole group.

```
/^(555-)?555-5555$/.test('555-555-5555')
true 
> 
/^(555-)?555-5555$/.test('555-5555')
true 
```
>to match "letters, numbers, and underscores." we can use the character class \w. The "w" in \w stands for "word", which is another name for an identifier. This can be tricky: "word" has a special meaning in programming! \W negates it
```
/\w/.test('a')
true 
> 
/\w/.test('+')
false 
> 
/\w/.test('F')
true 
> 
/\w/.test('_')
true 
> 
/a\wc/.test('abc')
true 
> 
/a\wc/.test('a-c')
false 
> 
/^\w$/.test('aaa')
false 
```


Character sets
In a character set, characters and ranges can be mixed in any order. This regex is equivalent to /[g]|[c-e]|[a]/.

> 
/[gc-ea]/.test('a')
true 
> 
/[gc-ea]/.test('b')
false 
> 
/[gc-ea]/.test('c')
true 
> 
/[gc-ea]/.test('d')
true 
> 
/[gc-ea]/.test('h')
false 
We can also negate the whole character set, even if it's complex.

> 
/[^gc-ea]/.test('a')
false 
> 
/[^gc-ea]/.test('d')
false 
> 
/[^gc-ea]/.test('b')
true 
If a character set ever gives you trouble, you can always break it up. For example, /[hbd-fa]/ can be thought of as /(h|b|[d-f]|a)/. This trick works for anything in regexes. Most regex features are syntactic sugar for simple features like |.

Special characters aren't special inside a character set. For example, "." means a literal "." and "$" is a literal "$".


```
/[a$]/.test('$')
true 
> 
/[a$]/.test('a')
true 
> 
/[a$]/.test('^')
false 
> 
/^[a$]$/.test('ab')
false 

```
The ^ is only special if it's the first character in the set. There, it means "negate this set". But a ^ anywhere else in the set is just another literal character.


```
/[^b]/.test('b')
false 
> 
/[b^]/.test('b')
true 
> 
/[b^]/.test('^')
true 
> 
/[^^]/.test('b')
true 
> 
/[^^]/.test('^')
false 

```

Regular Expressions: Constrained repetition
Sometimes we need text to be of a certain length. We could repeat . to enforce length.

> 
/^.....$/.test('1234')
false 
> 
/^.....$/.test('12345')
true 
> 
/^.....$/.test('123456')
false 
This is awkward, especially if we want to match exactly, say, 20 characters. Fortunately, there's a better way: {curly braces}.

> 
/^.{5}$/.test('1234')
false 
> 
/^.{5}$/.test('12345')
true 
> 
/^.{5}$/.test('123456')
false 
We can repeat anything in this way, not just .

> 
/^(a|b){3}$/.test('aaa')
true 
> 
/^(a|b){3}$/.test('bba')
true 
> 
/^(a|b){3}$/.test('ab')
false 
By adding a comma, we can specify a range of allowed lengths.

> 
/^.{2,3}$/.test('1')
false 
> 
/^.{2,3}$/.test('12')
true 
> 
/^.{2,3}$/.test('123')
true 
> 
/^.{2,3}$/.test('1234')
false 
We can also specify "n or more characters" by omitting the second number. For example, .{8,} means "at least eight characters".

> 
/^[fho]{3,}$/.test('of')
false 
> 
/^[fho]{3,}$/.test('off')
true 
> 
/^[fho]{3,}$/.test('hoof')
true 
In some regex systems, .{,5} means "at most five characters". Unfortunately, that's not true in JavaScript's regexes. JavaScript won't tell us about our mistake either. Instead, the {,5} gets interpreted as a literal string!

> 
/^.{,5}$/.test('12345')
false 
> 
/^.{,5}$/.test('.{,5}')
true 
This is bizarre, but not a big problem. If we need five or fewer characters, we can say .{0,5}.

> 
/^.{0,5}$/.test('1234')
true 
> 
/^.{0,5}$/.test('12345')
true 
> 
/^.{0,5}$/.test('123456')
false 

Regular Expressions: Word boundaries
When using a regular expression to search for a word, we usually don't want to match those letters inside another word.

> 
/cat/.test("I couldn't locate Mr. Meow.")
true 
The word 'locate' contains 'cat', so this sentence matches.

That's not what we want! We'd like to match the word 'cat'. Regexes provide a way to do this using the word boundary \b:

> 
/\bcat\b/.test('It was difficult to locate, but')
false 
> 
/\bcat\b/.test('the cat returned.')
true 
\b only matches where a word character is next to a non-word character. (Remember that word-characters are letters, numbers and underscores.)

> 
/\bcat\b/.test('cat-like reflexes')
true 
> 
/\bcat\b/.test("var cat_name = 'Mr. Meow';")
false 
> 
/\bcat\b/.test("Where's the cat's toy?")
true 
Like most character classes, \b can be negated by capitalizing it. \B only matches between two word characters. It's pronounced "non-word-boundary".

> 
/\Bcat\B/.test('The cat over there')
false 
> 
/\Bcat\B/.test('concatenate')
true 
\B can be used to find out if a word has 'cat' in particular places, which could help win scrabble games.

If you'd like to find words that contain "cat", but don't end with "cat":

> 
/cat\B/.test('publication')
true 
> 
/cat\B/.test('wildcat')
false 
> 
/cat\B/.test('catenary')
true 
Or words that contain "cat" only in the middle:

> 
/\Bcat\B/.test('cathode')
false 
> 
/\Bcat\B/.test('muscat')
false 
> 
/\Bcat\B/.test('hecatomb')
true 

Regular Expressions: Character classes in sets
Suppose that we're writing a regex to process Lisp code. Unlike most languages, Lisp allows the "-" character in identifiers. We can use a character set including everything in \w as well as -.

> 
/^[\w-]+$/.test('a_function')
true 
> 
/^[\w-]+$/.test('a-function')
true 
> 
/^[\w-]+$/.test('a-function()')
false 
```
```
```