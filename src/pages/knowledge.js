import React, { useState } from "react"
import Layout from "../components/layout.js"
import { Link, graphql } from "gatsby"
import { Carousel } from "../components/carousel.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

export default ({ data }) => {
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState("")

  const handleSearch = e => {
    e.preventDefault()
    setSearch(query.toLowerCase())
  }

  const filteredArticles = data.allMarkdownRemark.edges.filter(({ node }) => {
    const title = node.frontmatter.title.toLowerCase()
    const excerpt = node.excerpt.toLowerCase()
    return title.includes(search) || excerpt.includes(search)
  })

  return (
    <div>
      <Layout>
        <h2 style={{ textAlign: "center" }}>Coding Adventures</h2>
        <p style={{ textAlign: "center" }}>
          Welcome to the blog about my journey through coding universe. I hope
          you will enjoy reading and find some useful information
        </p>
        <Carousel />

        <h3 style={{ textAlign: "center" }}>ALL ARTICLES</h3>
        <p style={{ textAlign: "center", fontSize: "15px", color: "grey" }}>
          {filteredArticles.length} Posts
        </p>
        <form
          onSubmit={handleSearch}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search articles..."
            style={{
              padding: "8px 12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              width: "250px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              backgroundColor: "teal",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </form>

        <table style={{ textAlign: "justify", textJustify: "inter-word" }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Excerpt</th>
            </tr>
          </thead>
          <tbody>
            {filteredArticles.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.frontmatter.date}</td>
                <Link to={node.fields.slug}>
                  <td style={{ color: "teal" }}>{node.frontmatter.title}</td>
                </Link>
                <td>{removeImageTextFromExcerpt(node.excerpt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "knowledge-base" } } }
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
