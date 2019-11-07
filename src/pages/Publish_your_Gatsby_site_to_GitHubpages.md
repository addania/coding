---
title: "Publish your Gatsby website to Github Pages"
date: "2019-09-30"
---

Step-By-Step Guide for Dummies on how to publish your Gatsby website on Github pages

> Create empty GitHub repository, for example called test2. It should be a public repository and do NOT initialize this repository with README

> Start Ubuntu Command line

> Navigate to your projects folder
```
cd projects
```

> Create new project
```
gatsby new test2 https://github.com/gatsbyjs/gatsby-starter-hello-world
```
> Go to your new project folder
```
cd test2
```
> Install gh-pages. You need to do it for each single project. Dont get fooled like me that I thought I installed this package before. You need to be in your project folder and install it there. If the installation is successful you should get a message something like this "added 17 packages from 6 contributors and audited 19803 packages in 18.616s found 0 vulnerabilities"
```
npm install gh-pages --save-dev
```
> Add your project files to **LOCAL** git
```
git add .
```
> Commit your project files to **LOCAL** git
```
git commit -m "first commit"
```
> Create a **REMOTE** repository
```
git remote add origin git@github.com:addania/test2.git 
```
> Push to **REMOTE** repository (you will be asked for you passphrase)
```
git push origin master
```
> Go to you project folder and find file called <code>package.json</code> where you need to add following script to scripts section:
```
"scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master",
  },
```
> If you are publishing to your account url, for example: https://addania.github.io without any prefix, then skip this step. But if on GitHub pages your url will have a prefix, we also need to add this prefix to the Gatsby files. For example, github pages which use repository name as prefix:
```
https://addania.github.io/MyProject
```
MyProject is name of repository and it comes AFTER  https://addania.github.io, therefore /MyProject is a prefix and Gatsby needs to build files, so that they add the prefix. If this is the case you also need to do next 2 steps:

> 1/ Open <code>gatsby-config.js</code> and paste following (dont forget about the slash):
```
module.exports = {
pathPrefix: "/MyProject",
}
```
> 2/ Open <code>package.json</code> file and add --prefix-paths like so:
```
"build": "gatsby build --prefix-paths",
```

> Add your project files to **LOCAL** git
```
git add .
```
> Commit your project files to **LOCAL** git
```
git commit -m "second commit"
```
> Push to **REMOTE** repository (you will be asked for you passphrase)
```
git push origin master
```
> Create gh-pages branch
```
git checkout -b gh-pages
```
> Create upstream (you will need to add passphrase)
```
git push --set-upstream origin gh-pages
```
> Run the npm deploy command. Zou will need to add your passphrase (twice). It should result in success and last word should be "Published"
```
npm run deploy
```
> Go to your Github repository -> Settings

> Scroll down to Github pages and change Source to Master branch.

> Click on your github pages link: in my case: https://addania.github.io/test2/. You should see your website. Please note that sometimes you need to wait for couple of minutes (around 5 minutes) to see your website, most likely you will only see Gatsby welcome page

> PLEASE NOTE

we will use gh-pages branch to upload / download our code and we will use master branch to publish the website

> If you want to make changes to your code then you need to push it to the gh-pages branch. This will upload new version of your code to gh-pages branch but it will still not be however reflected in your published page
```
git push origin gh-pages
```
> To make changes to be reflected on your published page you need to run npm again
```
npm run deploy
```
> PLEASE NOTE

In the Project folder called Pages you can only store pages to your website, if you put there some components which you import to your index.js it will break the npm run deploy with the error that for example header.js must be a valid react component. How to fix it? Remove all your components from pages folder and create a folder called components in the src folder. Put all your components there. Then import your heade.js to your index.js by importr { Header } from "../components/header.js". Then you are able to run npm run deploy

> PLEASE NOTE

ALWAYS commit code to the repository and then nmp run deploy!! You will avoid lots of problems!! If push and npm run deploy are not in synch you probably will have lots of problems with the page.

> PLEASE NOTE

Actually the good practise is to use master branch for pushing my code and to use gh-pages branch for publishing. In this guide I made it vice versa

>Useful Sources:

https://iolivia.me/posts/7-gatsby-deploy-github/
