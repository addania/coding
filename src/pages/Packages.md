---
title: "Packages"
date: "2019-12-01"
---

devDependeencies are not directly used by the app when it is buidling, testing, running, for example: gh-pages

dependencies are packages which are necessary to build, run, test the APP, they are most of the time imported like: ```
import React rom "react"
import Bootstrap ...
```

npm install INSTALLS all devDependancies and Deependeencies which are specified in package.json!!
npm install MUST be triggered manually by USER. I decide when and which dependency I want to install. It must be installed in the folder where package.json / if it is not where package.json, it will throw an error (hey, bro you want me to install pckages,?? but there is no packages definition, so what shoyld I do???)!!! 

If it is installed then I have a node_modules folder in my project folder.

npm install is done once and for all for eeach package (for all packages if I dont provide name of package) :)

> To instal individual package, for example bootstrap
```
npm install bootstrap
```

> Command line, how to delete a specific file, type rm for remove and then file name
```
rm unnecessaryFile.js
```


> Command line, how to delete a specific folder, type rm for remove, -r for recursive, then folder name
```
rm -r unnecessaryFile.js
```
