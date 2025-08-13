import React from "react"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import landscaping from "../assets/videos/landscaping.mp4"
import obstacleAssaultNew from "../assets/videos/obstacleAssaultNew.mp4"
import warehouseWrackageNew from "../assets/videos/warehouseWrackageNew.mp4"
import cryptRaider from "../assets/videos/cryptRaider.mp4"
import yogata from "../assets/gifs/yoga.gif"
import adventCode from "../assets/gifs/adventCode.gif"
import highcharts from "../assets/gifs/highcharts.gif"
import bookFinder2 from "../assets/gifs/bookFinder2.gif"
import portfolio from "../assets/gifs/portfolio.gif"
import blogDesign from "../assets/gifs/blogDesign.gif"
import wineFacts from "../assets/gifs/wineFacts.gif"
import { VideoCard } from "../components/videoCard.js"
import "../components/videoCard.css"
import { ImageCard } from "../components/imageCard.js"
import { SectionHeading } from "../components/sectionHeading.js"
export default ({ data }) => {
  console.log(data)
  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  }

  return (
    <div>
      <Layout>
        <h2 style={{ textAlign: "center" }}>Portfolio</h2>
        <p style={{ textAlign: "center" }}>
          Here you can find some cool stuff that was keeping me busy
        </p>

        <SectionHeading>Game development</SectionHeading>
        <div style={cardContainerStyle}>
          <VideoCard
            title="Obstacle Assault"
            tech="Unreal Engine"
            src={obstacleAssaultNew}
          />
          <VideoCard
            title="Crypt Raider"
            tech="Unreal Engine"
            src={cryptRaider}
          />
          <VideoCard
            title="Warehouse Wreckage"
            tech="Unreal Engine"
            src={warehouseWrackageNew}
          />
        </div>

        <SectionHeading>Artistic</SectionHeading>
        <div style={cardContainerStyle}>
          <VideoCard
            title="Landscaping"
            tech="Unreal Engine"
            src={landscaping}
          />
        </div>

        <SectionHeading>Websites</SectionHeading>
        <div style={cardContainerStyle}>
          <ImageCard
            title="Yogata"
            tech="React, Gatsby"
            src={yogata}
            link="https://addania.github.io/yogata/"
          />
          <ImageCard
            title="Advertising Data"
            tech="React, Highcharts"
            src={highcharts}
            link="https://addania.github.io/challenge/"
          />
          <ImageCard
            title="Advent of Code"
            tech="React, Create React App"
            src={adventCode}
            link="https://addania.github.io/adventOfCode/"
          />
          <ImageCard
            title="Book finder"
            tech="Javascript"
            src={bookFinder2}
            link="http://www.karrmey.com/a/b/c/d/core.html"
          />
        </div>

        <SectionHeading>Web design</SectionHeading>
        <div style={cardContainerStyle}>
          <ImageCard title="Blog" tech="Illustrator" src={blogDesign} />
          <ImageCard title="Wine site" tech="Illustrator" src={wineFacts} />
        </div>

        <SectionHeading>Portfolio Design</SectionHeading>
        <div style={cardContainerStyle}>
          <ImageCard title="Portfolio" tech="Illustrator" src={portfolio} />
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

export const removeImageTextFromExcerpt = string => {
  return string.replace(
    /(Photo by .+ from Pexels)|(Photo by .+ from Pixabay)|(Photo from \b(\w*.com\w*)\b)|(Photo from \w+)/,
    ""
  )
}
