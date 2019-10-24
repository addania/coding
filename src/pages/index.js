import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.js";
export default () => 


/* WORKING VERSION OF LINK ON GITHUB
<div>
      <Link to="/coding/contact/">Contact</Link>
    </div>
    <div>
      
      <Link to="/coding/about/">About</Link>
    </div>
*/
<Layout>
<div>
    <div>
      <Link to="/coding/contact/">Testing Prefexis if they work Contact</Link>
    </div>
    <div>
      
      <Link to="/coding/about/">About</Link>
    </div>
</div>
  <div>
    <div>
      <a href="./contact">contact with a tag</a>
    </div>
    <div>
      <a href="./about">about with a tag</a>
    </div>
  </div>
  <h1>Hello Gats!!</h1>
  <p>What a world</p>
  <img src="https://source.unsplash.com/random/400x200" alt=""/>
</Layout>