import React from "react"
import Layout from "../components/layout.js"

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import mia1 from "../images/mia1.jpg"
// import { Polygons } from "../components/animationEffects/Polygons"

import { quotes } from "../constants/quotes"
import { jobs } from "../constants/jobs"
import { QuoteCard } from "../components/quoteCard"
import { JobCard } from "../components/jobCard"
import { Section } from "../components/section"

const containerStyle = {
  display: "flex",
  alignItems: "center",
  height: "80vh",
  justifyContent: "flex-end",
  position: "relative",
}

const imageStyle = {
  flex: "0 0 50%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "right",
  alignItems: "flex-end",
  margin: 0,
}

const contentStyles = {
  fontSize: "12px",
  display: "flex",
  flexDirection: "row",
  flexGrowth: 1,
  justifyContent: "space-around",
  flexWrap: "wrap",
}

const Tag = ({ title, position, timer }) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        position: "absolute",
        left: 0,
        top: position,
        transform: `translateY(-${position})`,
        transform: `translateX(-100%)`,
        width: "50%",
        height: "10%",
        background: "rgba(0, 0, 0, 0.7)",
        zIndex: 1,
        animation: `slide-in ${timer}s forwards`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <h3 style={{ color: "white", alignItems: "center" }}>{title}</h3>
      </div>
    </div>
  )
}

// Avatar Image by studiogstock on Freepik

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <Layout>
        <div id="container" style={{ ...containerStyle, zIndex: 1 }}>
          <div id="tsparticles">
            {/*<Polygons style={{ width: "100%", height: "300px" }} />*/}
          </div>
          <Tag title="Frontend Developer" position="30%" timer={2} />
          <Tag title="Passionate about coding" position="50%" timer={2.5} />
          <Tag title="Experienced Team Lead" position="70%" timer={3} />
          <img
            src={mia1}
            alt="Portrait Image"
            style={{ ...imageStyle, zIndex: 0 }}
          />
        </div>
        <div style={{ color: "grey", marginTop: "64px", marginBottom: "64px" }}>
          <Section text="Professional Experience" />
          <div style={contentStyles}>
            {jobs.map(job => (
              <JobCard
                image={job.image}
                text={job.position}
                company={job.company}
                year={job.year}
              />
            ))}
          </div>
        </div>
        <div style={{ color: "grey", marginTop: "64px", marginBottom: "64px" }}>
          <Section text="Said about me" />
          <div style={contentStyles}>
            {quotes.map(quote => (
              <QuoteCard image={quote.image} text={quote.text} />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  )
}
