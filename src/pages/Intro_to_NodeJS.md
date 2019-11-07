---
title: "Intro to NodeJS"
date: "2019-09-29"
---

Advantages of Node.js

1/ Creates Runtime Environments (local webserver)
Node.js is a JavaScript runtime environment. It allows JavaScript to run outside of a BROWSER, for example I could run it on my local machine as a standalone application (localhost:8000) and play around with my page. Gatsby uses node.js to create the local host. Also create-react-app uses node.js to create the runtime environment.

2/ Enables to install cool packages(=libraries=modules)
Node.js comes automatically with npm (node package manager), no need to install it extra! Package manager is included in every programming language. Package manager is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs. In NPM the package manager manages all the cool packages I might actually need. nNpm I can only install packages which run in browser. Example of packages: 

> **react** - allows access to all react modules/features like React.Component

> **reactDOM** - allows to generate react in the browser (unless I want to use script tags in html), for example: ReactDOM.render()

> **create-react-app** - enables to setup initial react files and create a runtime environment on local machine as localhost:8000. It ALSO automatically includes react and reactDOM packages

> **gatsby** - allows to build websites with multiple pages easier. It ALSO automatically includes react and reactDOM packages

Each package needs to be installed by npm individually.

2 ways how to download a package/any other software:

A) go to webside -> click download -> run installer and install the software

or

B) use package managers - package manager MUST be run in command line

Commands:

> to install your favourite package
```
npm install react
npm install reactDOM
npm install create-react-app
npm install gatsby
```
> In order to see which packages=libraries=modules my project is using I search for file called <code>package.json</code>. In the file there will be an object called dependencies 
```
  "dependencies": {
    "gatsby": "^2.15.28",
    "react": "^16.10.0",
    "react-dom": "^16.10.0"    
  },
```

> To read a manual npm
```
man npm
```
> To read the help of npm
```
npm help
```
