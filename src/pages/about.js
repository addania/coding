import React from "react";

import Header from "../components/header.js"

export default () => (
  <div style={{ color: `teal` }}>
    
    <h1>About Gatsby</h1>
    <p>Such wow. Very React.</p>
    <Header headerText="Text added by PROPS" />
    <Header headerText="It's pretty cool" />
  </div>
)