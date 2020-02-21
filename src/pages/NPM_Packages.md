---
title: "NPM Packages"
date: "2019-12-01"
---

![](https://i.imgur.com/xa1x0Gq.jpg "Photo by Kim Stiver from Pexels")

Let's talk about packages our app is depending on. These can be found in the package.json file. There 2 types of dependencies:

1/dependencies
2/devDependencies

**devDependeencies** are not directly used by the app when it is building, testing, running. 

Example of devDependencies:
```
gh-pages
```

**dependencies** are packages which are necessary to build, run, test the APP. They are most of the time imported like: 
```
import React rom "react"
import Bootstrap ...
```

To install dependecies, type this in command line:
```
npm install
```

<code>npm install</code> installs all **devDependancies** and **dependeencies** which are specified in package.json!

<code>npm install</code> **MUST** be triggered manually by user. I decide when and which dependency I want to install. It must be installed in the folder where package.json. If it is not where package.json, it will throw an error (*"hey, bro you want me to install pckages?? But there is no packages definition, so what should I do??"*)

If it is installed then I have a node_modules folder in my project folder.

<code>npm install</code> is done once and for all for each package (it will install all packages if I don't provide name of package) :)

> To install individual package, for example bootstrap
```
npm install bootstrap
```

<code>npm start</code> will look into package.json in the script section under command <code>start</code>. It will execute whatever is in there. For applications created by create-react-app, there will be:
```
"start": "react-scripts start",
```

><code>react-scripts start</code> will start local host environment under port number: 3000

> If I have gatsby project, I can also write
```
npm start
```

> <code>npm run develop</code> will also execute whatever is in package.json, in scripts under <code>start</code>
```
"npm run develop",
```

> This is then equivalent to
```
gatsby develop
```

> When I have command:
```
npm run develop
```

> <code>npm run</code> means it will look into package.json under scripts and select script called
```
"develop"
```

> Then under develop we have:
```
"develop": "gatsby develop",
```

> <code>"gatsby develop"</code> is the FINAL thing FINALLY
```
phew
```

> I should always use 
```
npm run ....
```

> For example:
```
npm run start
```

or
```
npm run develop
```

or 
```
npm run test
```

> But because start and test are such used and common, you can skip word <code>run</code> they can be abbreviated to
```
npm start
```

or
```
npm test
```

> However, you CANNOT abbreviate npm develop, it needs to include run
```
npm run develop
```

![Package](https://i.imgur.com/G6XuINT.jpg "Photo by Pixabay from Pexels")

**Dependencies Management**

> When I work on a project and test out things, I will probably install a lot of dependencies in my project. It can happen that the final version of the project will not need all of them. For that reason it is a good idea to tidy up the dependencies when the project is final. In order to remove dependencies we do the following:

> Open the <code>package.json</code> and remove those those dependencies which you don’t need. But... how do I know from all of them which ones are part of the final version of the project? We can use a tool called: <code>npm-check</code>, which will check which dependencies are part of the last  version of the project and which dependencies need updating. 

> In order to download the npm-check, write this to the terminal:
```
npm install -g npm-check
```

> <code>-g</code> means that the package will be installed globally

> Then to use the <code>npm-check</code>, navigate to your project folder and paste:
```
npm-check
```

> You will see the list of dependencies in terminal which are not used by your project or which need updating.

> Afterwards go to your <code>package.json</code> and delete unnecessary dependencies.

> Afterwards we can remove/delete entire <code>node_modules</code> folder in the project folder. 

> Deleting <code>node_modules</code> from terminal, paste this:
```
rm -rf node_modules
```
> Above will delete entire <code>node_modules</code> folder

> Alternatively you can also delete only a particular package by:
```
npm prune [name of package]
```

> When everything we need is deleted, we can install only relevant dependencies which we left in <code>package.json</code>again by:
```
npm install
```

> Your project is now dependent only on relevant packages and up-to-date! Yay! :)


> How to install new version of npm
```
npm install -g npm

```

>>> To change node version:
```
nvm use 8.10.0
```

Reference:

https://stackoverflow.com/questions/21122342/how-to-clean-node-modules-folder-of-packages-that-are-not-in-package-json

![Package](https://i.imgur.com/Y5egUqF.jpg "Photo by freestocks.org from Pexels")