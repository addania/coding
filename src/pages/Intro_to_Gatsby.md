---
title: "Intro to Gatsby"
date: "2019-09-26"
category: "knowledge-base"
---

![](https://i.imgur.com/rqXXcAi.png "Gatsby Logo")

> Software to help create static website using React. They provide starter templates, ability to create multiple pages in their pages folder or generating ReactDOM automatically

> To start with gatsby follow their documentation:

```
https://www.gatsbyjs.com/docs/tutorial/part-0/
```

> To install Gatsby

```
npm install -g gatsby-cli
```

> You will need also git: https://www.atlassian.com/git/tutorials/install-git#linux

> You will need node.js:

```
sudo apt update
sudo apt -y upgrade
sudo apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm --version
```

> On node 18 it was not working for me. I was getting this error: `Error: error:0308010C:digital envelope routines::unsupported`. So I needed to downgrade to version 16:

```
nvm install 16.13.0
```

> I was getting this error: `node_modules/gatsby-recipes/dist/graphql-server/server.js:52 var remarkMdx = require('remark-mdx')`

> So needed to fix remark-mdx in package.json to this version:

```
"remark-mdx": "2.0.0-next.9"
```

> Or alternatively use this code in terminal:

```
npm install remark-mdx@2.0.0-next.9 --save-dev
```

> I was also getting this error: `node_modules/yoga-layout-prebuilt/yoga-layout/build/Release/nbind.js:53 throw ex;`. So I needed to remove package-lock.json and node modules and `npm install` them again.

> To remove node modules, you can also use this:

```
rm -rf node_modules
```

> To display basic commands in gatsby

```
gatsby --help
```

> To create a new Gatsby project, addania.com is a name of new project, gatsby-starter-hello-world is a starter template downloaded from Gatsby website which will setup all initial files to start web development with (similar to creating new react app)

```
gatsby new addania.com https://github.com/gatsbyjs/gatsby-starter-hello-world
```

> To start Gatsby react development environment for my new project I need to navigate to the folder of my project with cd addania.com and then executing gatsby develop

```
gatsby develop
```
