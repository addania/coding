---
title: "Markdown"
date: "2019-11-12"
---

![](https://i.imgur.com/VIj56ca.jpg "Photo by Spencer Selover from Pexels")

**General information**

Markdown files use extension <code>.md</code>. They allow formatting text better then in the code itself between for example <code>```<p>```</code> tags. Gatsby also can interpret each md file a sub-site and automate creation for example of blog posts, articles, etc.

MD files usually start with some metadata, such as title, date, etc, which can be retreived and used to build components which will display the data:
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
![image alt atribute](url_or_file_path image_title)
```

>You can add text to image which will display when you <code>mouseOver</code> the image using Title
```
![image alt atribute](url "Title")
```