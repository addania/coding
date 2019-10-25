import React from "react";
import Layout from "../components/layout.js";
import { graphql } from "gatsby";


export default ( {data} ) => {
  console.log(data)
return (
<div>
<Layout>
  <h1>Coding Adventure</h1>
  <p>Welcome to the blog about my journey through coding universe. I hope you will enjoy reading and find some useful information</p>
  <img src="https://source.unsplash.com/random/400x200" alt=""/>
  <h1>ALL BLOGS</h1>
  <p>{data.allMarkdownRemark.totalCount} Posts</p>
  
  <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Excerpt</th>
              <th>HTML</th>
            </tr>
          </thead>
          <tbody> 
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.frontmatter.date}</td>
                <td>{node.frontmatter.title}</td>
                <td>{node.excerpt}</td>
                <td>{node.html}</td>
              </tr>
            ))}
          </tbody>
        </table>

</Layout>
</div>
)
}

export const query = graphql` 
query {
  allMarkdownRemark {
    edges {
      node {
        id
        excerpt
        rawMarkdownBody
        frontmatter {
          date
          title
        }
        timeToRead
        html
      }
    }
    totalCount
  }
  }
  ` 
  