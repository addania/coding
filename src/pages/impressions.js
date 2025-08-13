import React from "react"
import Layout from "../components/layout.js"
import { Link, graphql } from "gatsby"
import { Carousel } from "../components/carousel.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

export default ({ data }) => {
  const [sorting, setSorting] = React.useState("ASC")
  console.log(data)
  const posts = data.allMarkdownRemark.edges.reverse()
  return (
    <div>
      <Layout>
        <h2 style={{ textAlign: "center" }}>Dev Impressions</h2>
        <p style={{ textAlign: "center" }}>
          infiltrating the dev universe in order to <s>conquer it</s> learn a
          lot ;)
        </p>
        <Carousel />

        <h3 style={{ textAlign: "center" }}>ALL ARTICLES</h3>
        <p style={{ textAlign: "center", fontSize: "15px", color: "grey" }}>
          {data.allMarkdownRemark.totalCount} Posts
        </p>

        <table style={{ textAlign: "justify", textJustify: "inter-word" }}>
          <thead
            onClick={() => setSorting(sorting === "ASC" ? "DESC" : "ASC")}
            style={{ cursor: "pointer" }}
          >
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Excerpt</th>
            </tr>
          </thead>
          <tbody>
            {(sorting === "ASC" ? posts : data.allMarkdownRemark.edges).map(
              ({ node }, index) => (
                <tr key={index}>
                  <td>{node.frontmatter.date}</td>
                  <Link to={node.fields.slug}>
                    <td style={{ color: "teal" }}>{node.frontmatter.title}</td>
                  </Link>
                  <td>
                    {limitLength(
                      removeDateFromExcerpt(
                        removeImageTextFromExcerpt(node.excerpt)
                      )
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { category: { eq: "impressions" } } }
    ) {
      edges {
        node {
          id
          excerpt
          rawMarkdownBody
          frontmatter {
            date
            title
            category
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
const removeImageTextFromExcerpt = string => {
  return string.replace(
    /(Photo by .+ from Pexels)|(Photo by .+ from Pixabay)|(Photo from \b(\w*.com\w*)\b)|(Photo from \w+)/,
    ""
  )
}

const removeDateFromExcerpt = string => {
  return string.replace(/(02\/)?\d\d\.\d\d\.\d\d\d\d\ \- \w+/, "")
}

const limitLength = string => {
  return string.slice(0, 75)
}
