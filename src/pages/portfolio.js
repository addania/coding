import React from "react"
import Layout from "../components/layout.js"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo.js"
import { Carousel } from "../components/carousel.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import vid from "../assets/videos/vid.mp4"
import landscaping from "../assets/videos/landscaping.mp4"
import obstacleAssault from "../assets/videos/obstacleAssault.mp4"
import obstacleAssaultNew from "../assets/videos/obstacleAssaultNew.mp4"
import warehouseWrackage from "../assets/videos/warehouseWrackage.mp4"
import cryptRaider from "../assets/videos/cryptRaider.mp4"
import yogata from "../assets/gifs/yoga.gif"
import advent from "../assets/gifs/advent.gif"
import adventCode from "../assets/gifs/adventCode.gif"
import highcharts from "../assets/gifs/highcharts.gif"
import bookFinder from "../assets/gifs/bookFinder.gif"
import bookFinder2 from "../assets/gifs/bookFinder2.gif"
import portfolio from "../assets/gifs/portfolio.gif"
import blogDesign from "../assets/gifs/blogDesign.gif"
import wineFacts from "../assets/gifs/wineFacts.gif"
import webDesign from "../assets/images/webDesign.png"
import webDesign2 from "../assets/images/webDesign2.png"
import webWine from "../assets/images/webWine.png"
import webWine2 from "../assets/images/webWine2.png"
import portfolioDesign from "../assets/images/portfolioDesign.png"
import portfolioDesign2 from "../assets/images/portfolioDesign2.png"

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
          <p
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div>Obstacle Assault</div>
            <div
              style={{
                fontSize: "14px",
              }}
            >
              Unreal Engine
            </div>
            <video width="450" controls>
              <source src={obstacleAssaultNew} type="video/mp4"></source>
            </video>
          </p>
          <p
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div>Crypt Raider</div>
            <div
              style={{
                fontSize: "14px",
              }}
            >
              Unreal Engine
            </div>
            <video width="450" controls>
              <source src={cryptRaider} type="video/mp4"></source>
            </video>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div>Warehouse Wreckage</div>
            <div
              style={{
                fontSize: "14px",
              }}
            >
              Unreal Engine
            </div>
            <video width="450" controls>
              <source src={warehouseWrackage} type="video/mp4"></source>
            </video>
          </p>
        </div>
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
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
            <div style={{ textAlign: "center" }}>Crypt raider</div>
            <video width="350" controls>
              <source src={vid} type="video/mp4"></source>
            </video>
          </p>
        </div>*/}
        <h4
          style={{
            textAlign: "center",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          Artistic
        </h4>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div>Landscaping</div>
            <div
              style={{
                fontSize: "14px",
              }}
            >
              Unreal Engine
            </div>
            <video width="450" controls>
              <source src={landscaping} type="video/mp4"></source>
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
          <p
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div>Yogata</div>
            <div
              style={{
                fontSize: "14px",
              }}
            >
              React, Gatsby
            </div>
            <div style={{ width: "450px" }}>
              <a href="https://addania.github.io/yogata/">
                <img src={yogata} alt="yogata" />
              </a>
            </div>
          </p>

          <p
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div>Advertising Data</div>
            <div
              style={{
                fontSize: "14px",
              }}
            >
              React, Highcharts
            </div>
            <div style={{ width: "450px" }}>
              <a href="https://addania.github.io/challenge/">
                <img src={highcharts} alt="highcharts" />
              </a>
            </div>
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div>Advent of Code</div>
            <div
              style={{
                fontSize: "14px",
              }}
            >
              React, Create React App
            </div>
            <div style={{ width: "450px" }}>
              <a href="https://addania.github.io/adventOfCode/">
                <img src={adventCode} alt="adventCode" />
              </a>
            </div>
          </p>
          <p
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div>Book finder</div>
            <div
              style={{
                fontSize: "14px",
              }}
            >
              Javascript
            </div>
            <div style={{ width: "450px" }}>
              <a href="http://www.karrmey.com/a/b/c/d/core.html">
                <img src={bookFinder2} alt="bookFinder2" />
              </a>
            </div>
          </p>
        </div>

        <h4
          style={{
            textAlign: "center",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          Web design
        </h4>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div>Blog</div>
            <div
              style={{
                fontSize: "14px",
              }}
            >
              Illustrator
            </div>
            <div style={{ width: "450px" }}>
              <img src={blogDesign} alt="blogDesign" />
            </div>
          </p>

          <p
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div>Wine site</div>
            <div
              style={{
                fontSize: "14px",
              }}
            >
              Illustrator
            </div>
            <div style={{ width: "450px" }}>
              <img src={wineFacts} alt="wineFacts" />
            </div>
          </p>
        </div>

        <h4
          style={{
            textAlign: "center",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          Portfolio Design
        </h4>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <div>Portfolio</div>
            <div
              style={{
                fontSize: "14px",
              }}
            >
              Illustrator
            </div>
            <div style={{ width: "450px" }}>
              <img src={portfolio} alt="portfolio" />
            </div>
          </p>
        </div>
        {/*  <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <div style={{ textAlign: "center" }}>Websites design - Illustrator</div>
            <video width="350" controls>
              <source src={landscaping} type="video/mp4"></source>
            </video>
          </p>
          
          <p>
            <div style={{ textAlign: "center" }}>3D Character modelling</div>
            <video width="350" controls>
              <source src={vid} type="video/mp4"></source>
            </video>
          </p>
          
        </div>*/}
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
