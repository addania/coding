---
title: "Packages"
date: "2019-12-01"
---

Let's talk about packages our app is depending on. These can be found in the package.json file. Theree 2 types of devepndencies.

1/dependencies
2/devDependencies

**devDependeencies** are not directly used by the app when it is building, testing, running. 

Example of devDependencies:
```
gh-pages
```

**dependencies** are packages which are necessary to build, run, test the APP. They are most of the time imported like: ```
import React rom "react"
import Bootstrap ...
```

To install dependeecies, type this in command line:
```
npm install
```

<code>npm install</code> installs all **devDependancies** and **dependeencies** which are specified in package.json!
<code>npm install</code> **MUST** be triggered manually by user. I decide when and which dependency I want to install. It must be installed in the folder where package.json. If it is not where package.json, it will throw an error (*"hey, bro you want me to install pckages?? But there is no packages definition, so what should I do??"*)

If it is installed then I have a node_modules folder in my project folder.

<code>npm install</code> is done once and for all for each package (it will install all packages if I dont provide name of package) :)

> To install individual package, for example bootstrap
```
npm install bootstrap
```