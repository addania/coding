import React from "react";
import Layout from "../components/layout.js";
import Header from "../components/header.js";
import { graphql } from "gatsby";

export default ( {data}) => (
  
  <Layout>
    
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>Such wow. Very React.</p>
    <Header headerText="Text added by PROPS" />
    <Header headerText="It's pretty cool" />
  </Layout>
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