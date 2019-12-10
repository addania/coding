---
title: "JSPrettier"
date: "2019-12-08"
---

![Prettier](https://i.imgur.com/GNpxcbc.jpg "Photo by Anderson Guerra from Pexels")

JSPrettier formats the code according to best practices.

> Install JSPrettier:
```
npm install --global prettier
```

> Go to your folder where you want to run Prettier and check which files need to be formatted by following command
```
prettier src/** --check
```
> Let Prettier overwrite files
```
prettier src/** --write
```
>Do not forget to also run Prettier on subfolders such as <code>components</code>. For that you first need to navigate to the parent folder, such as <code>cd src</code> and then:
```
prettier components/** --write
```