---
title: "Publish Create React App to Github Pages"
date: "2019-11-29"
---

Step-By-Step Guide for Dummies on how to publish your create-react-app website on Github pages

> Create empty GitHub repository, for example called monsteerFactory. It should be a public repository and do NOT initialize this repository with README

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
> Open packagee.json and paste following code:
```
"scripts": {
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
   "start": "react-scripts start",
   "build": "react-scripts build",
```

> Create a **REMOTE** repository. Remote repository can be called anything, but convention is to call it origin
```
git remote add origin git@github.com:addania/monsterFactory.git 
```

> Then push our PRODUCTION files (compresseed publish-ready files) to remote by npm run deploy and publish it!! (We dont need to do git add . cause now we only want to publish the site!!! git add, commit, push is only if I want to upload my real code to github. )
```
npm run deploy
```

> When I want to upload my working code to github (has nothing to do with publishing production files by npm run deploy), I can add your project files to **LOCAL** git
```
git add .
```
> Commit your project files to **LOCAL** git
```
git commit -m "first commit"
```

> Push to **REMOTE** repository (you will be asked for you passphrase)
```
git push origin master
```


>Useful Sources:

https://create-react-app.dev/docs/deployment/#github-pages
