---
title: "Publish Create React App to Github Pages"
date: "2019-11-29"
category: "knowledge-base"
---

![](https://i.imgur.com/4tBPaPE.png "React logo")

Step-By-Step Guide for Dummies on how to publish your create-react-app website on Github pages

> Create empty GitHub repository, for example called monsterFactory. It should be a public repository and do NOT initialize this repository with README

> Start Ubuntu Command line

> Navigate to your projects folder
```
cd projects
```

> Create new project
```
npx create-react-app monster_factory
```
> Go to your new project folder
```
cd monster_factory
```

> Open package.json and paste your github repository url to homepage
```
"homepage": "https://addania.github.io/monsterFactory",
```

> Install gh-pages:
```
npm install --save gh-pages
```
> Open package.json and paste following code:
```
"scripts": {
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
   "start": "react-scripts start",
   "build": "react-scripts build",
```

> Initiate git repository
```
git init
```
> Add your username:
```
git config user.name "someone"
```

>Add your email:
```
git config user.email "someone@someplace.com"
```

> Create a **REMOTE** repository. Remote repository can be called anything, but convention is to call it origin
```
git remote add origin git@github.com:addania/monsterFactory.git 
```

> Then push our **PRODUCTION** files (compressed publish-ready files) to **REMOTE** by <code>npm run deploy</code> and publish it.
```
npm run deploy
```

Please note that we don't need to do <code>git add .</code> because now we only want to publish the site! <code>git add, commit, push</code>code>  is only if I want to upload my real source code to Github.

> When I want to upload and backup my <code>precious</code> working code to Github, it has nothing to do with **PUBLISHING** production files by <code>npm run deploy</code>. 

> To upload and backup my files, I add my project files to **LOCAL** git
```
git add .
```
> Then I commit my project files to **LOCAL** git
```
git commit -m "first commit"
```

> Then I push it to **REMOTE** repository:
```
git push origin master
```

> I will be asked for my passphrase

> My <code>precious</code> is stored securely

Useful sources:

https://create-react-app.dev/docs/deployment/#github-pages
