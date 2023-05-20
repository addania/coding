import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Polygons } from "./animationEffects/Polygons"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )
  return (
    <div
      style={{
        margin: `3rem auto`,
        maxWidth: 1000,
        padding: `0 1rem`,
        zIndex: 10,
      }}
    >
      <header
        style={{ marginBottom: `1.5rem`, paddingTop: "20px", zIndex: 10 }}
      >
        <Link
          to="/"
          style={{ textShadow: `none`, backgroundImage: `none`, zIndex: 10 }}
        >
          <h3 style={{ display: `inline`, fontSize: "1rem", zIndex: 10 }}>
            {data.site.siteMetadata.author}
          </h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right`, zIndex: 10 }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/portfolio/">Portfolio</ListLink>
          <ListLink to="/knowledge/">Knowledge</ListLink>
          <ListLink to="/impressions/">Impressions</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
        <hr />
      </header>
      {children}

      <hr />
      <footer style={{ paddingBottom: "20px", zIndex: 10 }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            marginBottom: "0",
            color: "grey",
            zIndex: 10,
          }}
        >
          © {new Date().getFullYear()} Design and Development by{" "}
          {data.site.siteMetadata.author}
        </p>
      </footer>
    </div>
  )
}
