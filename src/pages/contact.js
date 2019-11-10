import React from "react";
import Layout from "../components/layout.js";
import { graphql } from "gatsby";
import SEO from "../components/seo.js";
import { Carousel } from "../components/carousel.js";

export default () => 

<Layout>
  <div style={{textAlign: "center"}}>
  <h2>Get in Touch</h2>
  <Carousel/>
  <p>Do you have some constructive feedback? You can contact me at: <code>zabacinka@yahoo.com</code></p>
  </div>
</Layout>
