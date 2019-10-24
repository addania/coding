import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.js";


export default () => 

<Layout>
<div>
    <div>
      <Link to="/contact/">Testing Prefexis if they work Contact</Link>
    </div>
    <div>
      
      <Link to="/about/">About</Link>
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