---
title: "Vue"
date: "2020-08-24"
category: "knowledge-base"
---

![](https://i.imgur.com/YRAOVo0.jpg "React Bootstrap Logo")

>Vue is a Javascript framework, like React or Angluar. It is very lean and fast framework.

>Getting started, we will need to visit the official Vue documentation: https://vuejs.org/v2/guide/installation.html

>Look at the #CDN part which provides scripts with which you can import Vue to the HTML.

>Lets play around with Vue in browser in jsfiddle: https://jsfiddle.net/

>Lets import Vue scripts in the HTML section and lets add some div and an empty paragraph
``` es6
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<div id="app">
  <p></p>
</div>

```

>Now, how can we control this HTML with the Vue?

>This scripts import gives me one very important object which Vue framework gives me and that is: `Vue object`

>Let's create a new instance of that Vue object in js file:
``` es6
new Vue()
```
>These Vue instances are core of each Vue applications. They have one job, they control their own templates (HTML templates) of code which they render to the screen.

>What we need to pass in as an argument to the instance is and object which will have 2 keys: el and data
``` es6
new Vue(
    {
        el: '#app',
        data: { title: "Hi"}
    }
)
```

>`el` refers to the HTML element which we want to choose and where our `data` are going to be available. Let's assume we want to chose the div with id "app". We pass a string to the `el` which works like a CSS selector, where `#app` will mean we are chosing an element with id of app. We we type `.app` we will choose element of a class app.

>`data` needs an object which holds all our data which will be used in the HTML. For example title with the string `Hi`.

>Now how can we use that title in the HTML? We can use double curly braces which is a special syntax which Vue reckognizes.
``` es6
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<div id="app">
  <p>{{ title }}</p>
</div>
```
>The output will be `Hi` in the browser. This is outputed through the Vue js  which now controls this template.


``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```
>
``` es6

```

>
``` es6

```