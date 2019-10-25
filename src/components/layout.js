import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
const data = useStaticQuery (
  graphql`
  query {
    site {
      siteMetadata{
        title
        author
      }
    }
  }
  `
)
return (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>{data.site.siteMetadata.author}</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
      <hr />
    </header>
    {children}
    <h3>{data.site.siteMetadata.title}</h3>
    <hr />
    <footer style={{ marginBottom: `1.5rem` }}>
        <p style={{ display: `inline`, align: "right" }}>2019 Design and Development by {data.site.siteMetadata.author}</p>
    </footer>
  </div>
)
}