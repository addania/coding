import React from "react"
import Layout from "../components/layout.js"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo.js"
import { Carousel } from "../components/carousel.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import vid from "../assets/videos/vid.mp4"
import yogata from "../assets/gifs/yoga.gif"
import advent from "../assets/gifs/advent.gif"
import highcharts from "../assets/gifs/highcharts.gif"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <Layout>
        <h2 style={{ textAlign: "center" }}>Portfolio</h2>
        <p style={{ textAlign: "center" }}>
          Here you can find some cool stuff that was keeping me busy while my
          boyfriend was trying to get my attention 😜
        </p>

        <h4
          style={{
            textAlign: "center",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          Game development
        </h4>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <div style={{ textAlign: "center" }}>Obstacle Assault</div>
            <video width="350" controls>
              <source src={vid} type="video/mp4"></source>
            </video>
          </p>
          <p>
            <div style={{ textAlign: "center" }}>Warehouse Wreckage</div>
            <video width="350" controls>
              <source src={vid} type="video/mp4"></source>
            </video>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <div style={{ textAlign: "center" }}>Castle environment</div>
            <video width="350" controls>
              <source src={vid} type="video/mp4"></source>
            </video>
          </p>
          <p>
            <div style={{ textAlign: "center" }}>Crypt raider</div>
            <video width="350" controls>
              <source src={vid} type="video/mp4"></source>
            </video>
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <div style={{ textAlign: "center" }}>Tanks Wars</div>
            <video width="350" controls>
              <source src={vid} type="video/mp4"></source>
            </video>
          </p>
          <p>
            <div style={{ textAlign: "center" }}>Shooter game</div>
            <video width="350" controls>
              <source src={vid} type="video/mp4"></source>
            </video>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <div style={{ textAlign: "center" }}>3D Character modelling</div>
            <video width="350" controls>
              <source src={vid} type="video/mp4"></source>
            </video>
          </p>
        </div>
        <h4
          style={{
            textAlign: "center",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          Websites
        </h4>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <div style={{ textAlign: "center" }}>Yogata:</div>
            <div style={{ textAlign: "center" }}>
              <a href="https://addania.github.io/yogata/">
                https://addania.github.io/yogata/
              </a>
            </div>
            <div style={{ width: "350px" }}>
              <img src={yogata} alt="yogata" />
            </div>
          </p>

          <p>
            <div style={{ textAlign: "center" }}>Highcharts:</div>

            <div style={{ textAlign: "center" }}>
              <a href="https://addania.github.io/challenge/">
                https://addania.github.io/challenge/
              </a>
            </div>
            <div style={{ width: "350px" }}>
              <img src={highcharts} alt="highcharts" />
            </div>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <div style={{ textAlign: "center" }}>
              Advent of Code Competitions:
            </div>
            <div style={{ textAlign: "center" }}>
              <a href="https://addania.github.io/adventOfCode/">
                https://addania.github.io/adventOfCode/
              </a>
            </div>
            <div style={{ width: "350px" }}>
              <img src={advent} alt="advent" />
            </div>
          </p>
        </div>
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
