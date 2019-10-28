import React from "react";
import Layout from "../components/layout.js";
import { graphql } from "gatsby";
import SEO from "../components/seo.js"

export default ( { data } ) => {
    const post = data.markdownRemark
    return (
        <Layout>
          <SEO title={post.frontmatter.title} description={post.excerpt} />
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`