import React from "react";
import Layout from "../components/layout.js";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo.js"
import { Carousel } from "../components/carousel.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

export default ( {data} ) => {
  console.log(data)
return (
<div>
<Layout>
  
  <h1 style={{textAlign: "center"}}>Cooding Adventures</h1>
  <p style={{textAlign: "center"}}>Welcome to the blog about my journey through coding universe. I hope you will enjoy reading and find some useful information</p>
  <Carousel />
  
  <h3 style={{textAlign: "center"}}>ALL BLOGS</h3>
  <p style={{textAlign: "center"}}>{data.allMarkdownRemark.totalCount} Posts</p>
  
  <table style={{textAlign: "center"}}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Excerpt</th>
              
            </tr>
          </thead>
          <tbody> 
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.frontmatter.date}</td>
                <a href={node.fields.slug}>
                <td style={{color: "teal"}}>{node.frontmatter.title}</td>
                </a>
                <td>{node.excerpt}</td>
                
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
  allMarkdownRemark (sort: {fields:[frontmatter___date], order:DESC}) {
    edges {
      node {
        id
        excerpt
        rawMarkdownBody
        frontmatter {
          date
          title
        }
        fields {
          slug
        }
        timeToRead
        html
      }
    }
    totalCount
  }
  }
  ` 
  