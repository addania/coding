import React from "react";
import Layout from "../components/layout.js";
import Header from "../components/header.js";

export default () => (
  
  <Layout>
    
    <h1>About Gatsby</h1>
    <p>Such wow. Very React.</p>
    <Header headerText="Text added by PROPS" />
    <Header headerText="It's pretty cool" />
  </Layout>
)