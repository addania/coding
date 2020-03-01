---
title: "Cloning Github Repository"
date: "2019-11-29"
---

![](https://i.imgur.com/GmB70yE.jpg "Photo by Trinity Kubassek from Pexels")

Cloning Github repository means creating a copy of **REMOTE** repo locally to your machine. How to do it? 

> Go to repository root folder (top one)

> Click the big GREEN (frog) button called:
```
Clone of Download
```

> Copy the url:
```
https://github.com/nvm-sh/nvm.git
```

> Go to the project folder

> Paste this to the command line:
```
git clone https://github.com/nvm-sh/nvm.git
```

How to clone repo from another branch (for example gh-pages)?

> Go to repository and click on <code>clone/download</code> button (green)

>Then copy the repo link. For example:
```
git@github.com:addania/coding.git
```

>Then go to terminal and paste (where gh-pages is the name of the branch from where we want to clone):
```
git clone git@github.com:addania/coding.git -b gh-pages
```
>Our repository was successfully cloned to **LOCAL**. Yay!

> Then you must also install all dependncies which are in the package.json with:
```
npm install
```

![](https://i.imgur.com/yA5ouqS.jpg "Photo by Kat Jayne from Pexels")