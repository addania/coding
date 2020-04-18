---
title: "Markdown"
date: "2020-02-12"
category: "knowledge-base"
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

>Url to image can also be from file directory. Images should be saved under <code>/source/images/</code>
```
![image alt atribute](/images/path/to/folder/image.png)
```

>It can also be a link to online resource:
```
![image alt atribute](/images/path/to/folder/image.png)
```

>You can add text to image which will display when you <code>mouseOver</code> the image using Title
```
![image alt atribute](url "Title")
```

>Add caption to you image:
```
![Image description](/images/path/to/folder/image.png)*My caption*
```

>Add option to click on the image:
```
[![Image description](/images/path/to/folder/image.png "Hello World")*My caption*](about.gitlab.com)
```

**ICONS**

>Very useful platform to access various interesting libraries:
```
cdnjs.com
```
>One of interesting libraries is <code>Font Awesome</code> which allows you to use icons in your .md files:
```
https://cdnjs.com/libraries/font-awesome
https://fontawesome.com/
```

> To be able to have cool icons we need to install <code>Font Awesome</code> library. Go to:
```
https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers
```

> Install the package with command:
```
npm install --save @fortawesome/fontawesome-free
```

>Go to your html file and past this there (please not that Gatsby is generating the html automatically and your links will NOT persist):
```
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/fontawesome.min.css" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/brands.min.css" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/solid.min.css" rel="stylesheet"/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/regular.min.css" rel="stylesheet"/>
```

>Then you can use following in your .md file:
```
<i class="fas fa-puzzle-piece"></i>
<i class="fas fa-frog"></i>
```
Example:

<i class="fas fa-puzzle-piece"></i>
<i class="fas fa-frog"></i>

> Solid ones are used with word <code>fas</code>
```
<i class="fas fa-frog"></i>
<i class="fas fa-puzzle-piece"></i>
<i class="fas fa-jedi"></i>

```
> Examples:

<i class="fas fa-frog"></i>
<i class="fas fa-puzzle-piece"></i>
<i class="fas fa-jedi"></i>

> Brand ones are used with word <code>fab</code>
```
<i class="fab fa-facebook-square"></i>
<i class="fab fa-cc-visa"></i>
```
> Examples:

<i class="fab fa-facebook-square"></i>
<i class="fab fa-cc-visa"></i>

> You can change the colour of the icons:
```
<i class="fab fa-cc-visa" style="color: green"></i>
```
> Examples:

<i class="fab fa-cc-visa" style="color: green"></i>


**EMOJIS** 

> On this page we can copy black and white emojis: https://www.emojicopy.com/

😈

> In Gatsby there is extension for emojis
```
npm install --save gatsby-remark-emojis
```
> This is how they work: TBD

:baloon:
{: baloon}

Not working:
```md
:monkey:
```

:monkey:

```md
🐒

🌠
```

**SHADOW TO IMAGE**

TBC - not working

![](https://i.imgur.com/VIj56ca.jpg "Photo by Spencer Selover from Pexels"){: .shadow}

**GRAPHS**

```plantuml
!define ICONURL https://raw.githubusercontent.com/tupadr3/plantuml-icon-font-sprites/v2.1.0
skinparam defaultTextAlignment center
!include ICONURL/common.puml
!include ICONURL/font-awesome-5/gitlab.puml
!include ICONURL/font-awesome-5/java.puml
!include ICONURL/font-awesome-5/rocket.puml
!include ICONURL/font-awesome/newspaper_o.puml
FA_NEWSPAPER_O(news,good news!,node) #White {
FA5_GITLAB(gitlab,GitLab.com,node) #White
FA5_JAVA(java,PlantUML,node) #White
FA5_ROCKET(rocket,Integrated,node) #White
}
gitlab ..> java
java ..> rocket
```