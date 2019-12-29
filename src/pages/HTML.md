---
title: "HTML"
date: "2019-12-27"
---

![](https://i.imgur.com/37IM7Po.jpg "Photo by Miguel Á. Padriñán from Pexels")

Some basic HTML

**Starter**

HTML document starts with <code><!doctype html></code> to tell the browser which html version we are using,rather then letting the browser pick one. By the following code we actually say we want the latest version:
```
<!doctype html>
```

**Empty tags**

An empty tag is a one which does not need a closing tag. Examples:


<code><br></code> tag is a page break and is an empty tag

```
<br>
```


<code><img></code> tag to display images
```
<img src="myPhoto.jpg" alt="photo">
```

<code><link></code> tag is an empty tag and allows to import different files to the HTML or create links to other URLs 
```
<link rel="stylesheet" type="text/css" href="theme.css">

```

**Including CSS in HTML**

We can use 3 different ways to add styles to our webpage:

**1//** Add style individually in a tag
```
```

**2//**  Add style tags to head
```
<style>
p {
	color: white;
	background-color: black;
}
</style>
```

**3//** Include stylesheets in the HTML in the head tag using link tag 
```
<link r⁠e⁠l⁠=⁠"⁠s⁠t⁠y⁠l⁠e⁠s⁠h⁠e⁠e⁠t⁠” href=“style.css”>
```

<code>rel</code> says what kind of file we want to include
<code>href</code> says the path or URL where the file exists

**Nested lists**
We can create nsted list. An example is here:
```
Drinks:
<ul>
  <li>Coffee</li>
  <li>Tea
    <ol>
      <li>Herbal tea</li>
      <li>Black tea</li>
      <li>Green tea</li>
      <li>White tea</li>
    </ol>
  </li>
  <li>Milk</li>
</ul>
```
Result will look like this:

Drinks:
<ul>
  <li>Coffee</li>
  <li>Tea
    <ol>
      <li>Herbal tea</li>
      <li>Black tea</li>
      <li>Green tea</li>
      <li>White tea</li>
    </ol>
  </li>
  <li>Milk</li>
</ul>