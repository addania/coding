---
title: "Markdown"
date: "2019-11-12"
---

**General information**

Markdown files use extension .md They allow formatting text betteer then in the code itself between for example p tags. Gatsby also can interpret eeach md file a a sub-site and automate creation for example of blog posts, articles, etc.

MD files usually start with some metadata, such as title, date, etc, which can be retrieved and used to build the component which will display thee data:
```
---
title: "JS"
date: "2019-11-12"
---
```

**Basic styling in Markdown**
> Bold
```
**I am BOLD**
```
> List
```
- List item1
- List item2
```

>How to separate text which should not be formatted, such as our code?
```
use ``` before and after the block code
```

>How to insert images to md files?
```
![image alt atribute](image url or file path)
```

>You can add text to image which will display when you mouseOver the image using Title
```
![image alt atribute](url "Title")
```