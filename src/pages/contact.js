import React from "react";
import Layout from "../components/layout.js"
import { graphql } from "gatsby";
import SEO from "../components/seo.js";

export default ( { data } ) => 

<Layout>
  
  <h1>I am a contact page!</h1>
  <p>What a world</p>
  <img src="https://source.unsplash.com/random/400x200" alt=""/>
</Layout>

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