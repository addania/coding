---
title: "Publish your Gatsby website to Github Pages"
date: "2019-09-30"
---

![](https://i.imgur.com/NAMuzl3.jpg "Photo by Designecologist from Pexels")

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
> Install gh-pages. You need to do it for each single project. Don't get fooled like me that I thought I installed this package before. You need to be in your project folder and install it there. If the installation is successful you should get a message something like this "added 17 packages from 6 contributors and audited 19803 packages in 18.616s found 0 vulnerabilities"
```
npm install gh-pages --save-dev
```
> Add your project files to **LOCAL** git
```
git add .
```

> If above command fails, then you first need to initialize empty git repository with:
```
git init
```

> Then try again:
```
git add .
```

> Commit your project files to **LOCAL** git
```
git commit -m "first commit"
```
> If this commit fails because of "tell me who you are", then proceed here: https://addania.github.io/coding/Tell_Me_Who_You_Are/

> Afer above steps, try again:
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

> If you are publishing to your account URL, for example: https://addania.github.io without any prefix, then skip this step. But if on GitHub pages your URL will have a prefix, we also need to add this prefix to the Gatsby files. For example, Github pages which use repository name as prefix:
```
https://addania.github.io/test2
```
test2 is name of repository and it comes AFTER  https://addania.github.io, therefore /test2 is a prefix and Gatsby needs to build files, so that they add the prefix. If this is the case you also need to do next 2 steps:

> 1/ Open <code>gatsby-config.js</code> and paste following (don't forget about the slash):
```
module.exports = {
pathPrefix: "/test2",
}
```
> 2/ Open <code>package.json</code> file and add --prefix-paths like so:
```
"build": "gatsby build --prefix-paths",
```

```
"deploy": "gatsby build --prefix-paths && gh-pages -d public -b master",
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

> Run the <code>npm deploy</code> command. You will need to add your passphrase (twice). It should result in success and last word should be "Published"
```
npm run deploy
```
> Go to your Github repository -> Settings

> Scroll down to Github pages and change Source to gh-pages branch.

> Click on your Github pages link: in my case: https://addania.github.io/test2/. You should see your website. Please note that sometimes you need to wait for couple of minutes (around 5 minutes) to see your website, most likely you will only see Gatsby welcome page

> PLEASE NOTE

We will use gh-pages branch to publish the website and we will use master branch to upload / download our code

> If you want to make changes to your code then you need to push it to the master branch. This will upload new version of your code to master branch but it will still not be however reflected in your published page
```
git push origin master
```
> To make changes to be reflected on your published page you need to run npm again
```
npm run deploy
```
> PLEASE NOTE

In the Project folder called Pages you can only store pages to your website, if you put there some components which you import to your index.js it will break the <code>npm run deploy</code> with the error that for example <code>header.js</code> must be a valid React component. How to fix it? Remove all your components from pages folder and create a folder called components in the <code>src</code> folder. Put all your components there. Then import your header.js to your <code>index.js</code> by 
```
import { Header } from "../components/header.js"
```
Then you are able to run:
```
npm run deploy
```

> PLEASE NOTE

ALWAYS commit code to the repository and then nmp run deploy!! You will avoid lots of problems!! If push and <code>npm run deploy</code> are not in synch you probably will have lots of problems with the page.

> PLEASE NOTE

The good practise is to use master branch for pushing your code and to use gh-pages branch for publishing.

**Additionally:**

> Brose your typography in typography.js here:
https://kyleamathews.github.io/typography.js/

> Choose the one you like

> Install your typography:
```
npm install --save gatsby-plugin-typography typography react-typography typography-theme-fairy-gates gatsby-plugin-emotion @emotion/core
```

> Another example:
```
npm install --save gatsby-plugin-typography typography react-typography typography-theme-moraga gatsby-plugin-emotion @emotion/core
```

> Add typography to your <code>package.json</code>
```
module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

> Under folder <code>src</code> create a new folder utils

> In <code>src/utils</code> folder create a new <code>typography.js</code> file

> Input this code into the <code>typography.js</code>
```
import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
const typography = new Typography(fairyGateTheme)
export const { scale, rhythm, options } = typography
export default typography
```

> Another example:
```
import Typography from "typography"
import moragaTheme from "typography-theme-moraga"
const typography = new Typography(moragaTheme)
export const { scale, rhythm, options } = typography
export default typography
```

> Install source filesystem
```
npm install --save gatsby-source-filesystem
```

> Add following code to <code>gatsby-config.js</code>
```
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
```

> Add transformer remark to be able to work with markdown files:
```
npm install --save gatsby-transformer-remark
```

> Add this code to gatsby-config to module exports plugins:
```
`gatsby-transformer-remark`,
```
> Create <code>gatbsy-node.js</code> file in the same folder as <code>gatsby-config</code>

> Add this code to gatsby node:
```
const path= require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
   
const {createPage} = actions
    const result = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    result.data.allMarkdownRemark.edges.forEach(({node}) =>{
       createPage({
           path: node.fields.slug,
           component: path.resolve(`./src/templates/blog-post.js`),
           context: {
             slug: node.fields.slug,
           },
       })

    })
  }
```

> Install manifest (if it throws error, then skip):
```
npm install --save gatsby-plugin-manifest
```

> Add manifest plugin to <code>gatsby-config.js</code> (this can throw error, then skip)
```
Copygatsby-config.js: copy code to clipboard
{
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ]
}
```

> Add offline support by installing:
```
npm install --save gatsby-plugin-offline
```

> Add offline support to <code>gatsby-config</code> to module export plugins:
```
`gatsby-plugin-offline`,
```

> Add react helmet by installing:
```
npm install --save gatsby-plugin-react-helmet react-helmet
```

> Add react helmet to <code>gatsby-config</code>:

```
`gatsby-plugin-react-helmet`,
```

> Plus site metadata should have author and description:
```
module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
    description: `A simple description about pandas eating lots...`,
    author: `gatsbyjs`,
  },
```

> Install React Bootstrap and Bootstrap:
```
npm install react-bootstrap bootstrap
```


>Useful Sources:

https://iolivia.me/posts/7-gatsby-deploy-github/

https://www.gatsbyjs.org/tutorial/part-four/

