---
title: "Querying data from project files"
date: "2019-10-10"
---

> We can query images, or content of the website (text) from files in our project folder.

> Firstly open your command line in Ubuntu and install the gatsby package called source **filesystem** plugin. The filesystem source plugin lets you query data**ABOUT** files (note: but it does NOT allow you to query data inside files, for that we have another plugin called transform)
```
npm install --save gatsby-source-filesystem
```
> Secondly open the gatsby-config.js and add this plugin there:
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
> Save and restart gatsby development environment
```
gatsby develop
```
> Two new elements will be added there: files and allFile
```
http://localhost:8000/___graphql
```
> Select some items for our query. For example <code>base</code> is the name of the file, <code>prettySize</code> is the size of the file, <code>relativeDirectory</code> is a folder in which file resides, etc

> Lets use this data and print it to console:
```
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>Hello world</div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
```

> Lets make our data beautiful in a table:
```
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
```
> ```<table>``` tag creates a table


> ```<thread>``` tag is used to group header content in an HTML table. The ```<thead>``` element is used in conjunction with the ```<tbody>``` and ```<tfoot>``` elements to specify each part of a table (header, body, footer). Browsers can use these elements to enable scrolling of the table body independently of the header and footer. Also, when printing a large table that spans multiple pages, these elements can enable the table header and footer to be printed at the top and bottom of each page. The ```<thead>``` tag must be used in the following context: As a child of a ```<table>``` element, after any ```<caption>```, and ```<colgroup>``` elements, and before any ```<tbody>```, ```<tfoot>```, and ```<tr>``` elements.

> ```<tr>``` tag means table row

> ```<th>``` tag means one column in a table header

> ```<td>``` tag means one column in the table data

> for each tr we will take all available data into columns

> How does this part of the code work?
```
{data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.base}</td>
                <td>{node.prettySize}</td>
                <td>{node.relativeDirectory}</td>
                <td>{node.name}</td>
              </tr>
            ))}
```
> <code>Map</code> is a method which can be called on an array. When we query data, you can see on the right column on GraphiQL how our data will look like: For example:
```
{
  "data": {
    "allFile": {
      "edges": [
        {
          "node": {
            "id": "3d02d57a-a1ff-58a6-a75b-41d2d1f5de2f",
            "base": "container.js",
            "prettySize": "177 B",
            "relativeDirectory": "components",
            "name": "container"
          }
        },
        {
          "node": {
            "id": "bfd68830-b23b-5750-9e97-fb73e577ebc8",
            "base": "header.js",
            "prettySize": "141 B",
            "relativeDirectory": "components",
            "name": "header"
          }
        },
        {
          "node": {
            "id": "5110e7f0-f000-5a81-b65f-2d655e4937b4",
            "base": "container.module.css",
            "prettySize": "55 B",
            "relativeDirectory": "components",
            "name": "container.module"
          }
        },
        {
          "node": {
            "id": "09ae19a0-accc-5c2a-9caa-ea806602b54f",
            "base": "layout.js",
            "prettySize": "1.25 kB",
            "relativeDirectory": "components",
            "name": "layout"
          }
        },
        {
          "node": {
            "id": "e0c2ac65-ada6-5773-a74d-6129e1de7f7b",
            "base": "about-css-modules.js",
            "prettySize": "1.03 kB",
            "relativeDirectory": "pages",
            "name": "about-css-modules"
          }
        },
        {
          "node": {
            "id": "95b910e6-a707-512e-b6cd-09e0f60fd8cb",
            "base": "about-css-modules.module.css",
            "prettySize": "334 B",
            "relativeDirectory": "pages",
            "name": "about-css-modules.module"
          }
        },
        {
          "node": {
            "id": "d0e66873-11b2-5ecf-9971-c397b39412a8",
            "base": "about.js",
            "prettySize": "484 B",
            "relativeDirectory": "pages",
            "name": "about"
          }
        },
        {
          "node": {
            "id": "391e78c8-e96e-5412-a4c4-02d3074c2bc1",
            "base": "contact.js",
            "prettySize": "232 B",
            "relativeDirectory": "pages",
            "name": "contact"
          }
        },
        {
          "node": {
            "id": "689eea2c-7d70-53e6-8078-26e28cd337ce",
            "base": "index.js",
            "prettySize": "358 B",
            "relativeDirectory": "pages",
            "name": "index"
          }
        },
        {
          "node": {
            "id": "318cd83a-3107-5cbb-b65e-b2eb0fb3a428",
            "base": "global.css",
            "prettySize": "49 B",
            "relativeDirectory": "styles",
            "name": "global"
          }
        },
        {
          "node": {
            "id": "34912156-9592-5c52-aac4-7e851d124baa",
            "base": "typography.js",
            "prettySize": "226 B",
            "relativeDirectory": "utils",
            "name": "typography"
          }
        }
      ]
    }
  }
}
```
Notice how <code>data.allFile.edges</code> returns an ARRAY of OBJECTS!! Which means we can use array method called map on it. Map works in a way that it iterated through every single element of the array and performs a certain function in it. It doesn't change original array, but creates a new array on which the function is performed.  One small example is here:
```
var array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```
> x is an element of the array which we currently iterate through

> Documentation of Map is here: 

```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
```
> Notice how the syntax looks:
```
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
```
> This means that when using .map method we can use the current object we are on, but also its index!! Which mean index 0,1,2, etc

> In our .map method we have a function which takes 2 arguments:
```
({ node }, index)
```
{ node } is an actual object which resides under data.allFile.edges
It should actually be called node, otherwise we will have an error.
index is the index of the element in our array on which we are currently itterating.

> For each element in our array, we will create a ```<tr>``` tag which will have a unique property key which will be equal to the index of that element in the array
```<tr key={index}>
...
</tr> 
```
> Then this table row (tr) will create 4 columns ```<td>``` Each of ```<td>``` tags will access the element of array, which is in fact an object, where we retrieve values for example: node.base


> In React each array element over which we will iterate needs a unique key property. 

> Each time you iterate over an array you have to set the key prop to each of the resulting DOM element as React needs it to optimize the re-rendering. 

> React for example will detect duplicates and only renders the first node with this key. Without key={index} there will be an error in console that each child in the list should have a unique key property. More reading:
```
https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
https://stackoverflow.com/questions/37651660/react-each-child-in-an-array-or-iterator-should-have-a-unique-key-prop?rq=1
```
> The filesystem source plugin lets you query data ABOUT files but what if you want to query data INSIDE files? To make this possible, Gatsby supports transformer plugins which take raw content from source plugins and transform it into something more usable. Example: markdown files .md


> create a new markdow file under your pages folder
```
blog_post.md
```

> look at the GrphiQL and refresh the query, you will see the new .md file in there


> First install transformer plugin
```
npm install --save gatsby-transformer-remark
```

> Add plugin to gatsby config
```
module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
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
> Restart your development environment with
```
gatsby develop
```
> In GraphiQL we will see the new item allMarkdownRemark