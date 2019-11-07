---
title: "Querying data with GraphQL"
date: "2019-10-09"
---

GraphQL is a technology for querying data and was developed by Facebook to allow react commponents to query data. QL means query language and is similar to SQL.

Why do we prefer to query data anyway? Imagine you have yout site title ("My page") on various subpages, lets say on 20 subpages. Imagine you realize that this title is rather lame and you want to change it to somethis cooler ("Welcome to my awesome page!"). Then you have to go through all your code, every single page and change the hard typed title 20 times. However, it would be better if we could store our great title in some safe place from where each subpage would retrieve it. Then you would only need to change the title of the page once and everything would be updated automatically. Isnt it totally cool? Automation, saving time, error-prone. Let`s use awesome technologies and their potential to make our lives easier.

There are several GraphQL query types:
> A) Page queries, which can only be done my PAGES (not by standalone components)

>B) Non-pages components queries (such as layout.js)


**PAGE QUERIES:**

> One way to query data is to use page queries from site Metadata. This option is only available for pages (it is not available for non-page compoenents like layout.js) In order to do so, open the gatsby-config file and paste this into it:

```
module.exports = {
  siteMetadata: {
    title: "Coding Addventures with Addania",
  },
```
> then go to you About page and add following code:
```
import React from "react";
import { graphql } from "gatsby";
export default ( {data}) => (  
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>Such wow. Very React.</p>
)
export const query = graphql`
query {
  site {
    siteMetadata{
      title
    }
  }
}
`
```

> Please not that a constant query is outside of the componenet and by convention at the end of the file.


**NON-PAGE COMPONENT QUERIES**
> For standalone components like Header, Layout which are not pages, there is another way how to query data. We will use a hook called useStatisQuery. This hook was introduced to Gatsby that allow non-pages components also to retrieve data

> Navigate to layout.js file

> Import useStaticQuery and graphql from gatsy
```
import { Link, useStaticQuery, graphql } from "gatsby";
```

> function component needs to have {} brackets after =>
```
export default ({ children }) => {
...
}
```
> create a function component which will have this constant before return function
```
const data = useStaticQuery (
  graphql`
  query {
    site {
      siteMetadata{
        title
      }
    }
  }
  `
)
```
> Use query inside of the return function
```
<h3>{data.site.siteMetadata.title}</h3>
```

> Entire example layout.js is here:
```
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
const data = useStaticQuery (
  graphql`
  query {
    site {
      siteMetadata{
        title
      }
    }
  }
  `
)
return (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Addania</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
      <hr />
    </header>
    {children}
    <h3>{data.site.siteMetadata.title}</h3>
    <hr />
    <footer style={{ marginBottom: `1.5rem` }}>
        <p style={{ display: `inline`, align: "right" }}>2019 Design and Development by Addania</p>
    </footer>
  </div>
)
}
```
> In order to make sure to write the queries correctly we use tool called GraphiQL. It is available by default when our local development is running (gastby develop) and is accessible here:
```
http://localhost:8000/___graphql
```



