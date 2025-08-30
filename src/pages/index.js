import React from "react"
import Layout from "../components/layout.js"

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import mia1 from "../images/mia1.jpg"
// import { Polygons } from "../components/animationEffects/Polygons"

import { quotes } from "../constants/quotes"
import { recommendations } from "../constants/recommendations"
import { references } from "../constants/references"
import { jobs } from "../constants/jobs"
import { QuoteCard } from "../components/quoteCard"
import { JobCard } from "../components/jobCard"
import { Section } from "../components/section"
import { Skills } from "../components/skills"

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  position: "relative",
}

const imageStyle = {
  objectFit: "cover",
  objectPosition: "right",
  alignItems: "flex-end",
  margin: 0,
  maxHeight: "768px",
  width: "100%",
  height: "auto",
}

const contentStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "12px",
  alignItems: "start",
}
const Tag = ({ title, position, timer }) => {
  return (
    <div
      className="tag"
      style={{
        borderRadius: "10px",
        position: "absolute",
        top: position,
        left: "0",
        transform: `translateX(-100%) translateY(-50%)`,
        width: "clamp(100px, 50%, 450px)",
        padding: "0.5em 1em",
        background: "rgba(0, 0, 0, 0.7)",
        zIndex: 1,
        animation: `slide-in ${timer}s forwards`,
      }}
    >
      <h3
        style={{
          color: "white",
          fontSize: "clamp(14px, 2.5vw, 30px)",
          margin: 0,
        }}
      >
        {title}
      </h3>
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
          {/* <div id="tsparticles">
            <Polygons style={{ width: "100%", height: "300px" }} />
          </div>*/}
          <Tag title="Senior Frontend Engineer" position="50%" timer={2} />
          <Tag title="Passionate about coding" position="70%" timer={2.5} />
          <Tag title="Experienced Team Lead" position="90%" timer={3} />
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
            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                fontSize: "12px",
                marginTop: "8px",
              }}
            >
              * including 14 months of maternity / parental leave
            </div>
          </div>
        </div>
        <div style={{ color: "grey", marginTop: "64px", marginBottom: "64px" }}>
          <Section text="Skills" />
          <div style={contentStyles}>
            <Skills />
          </div>
        </div>
        <div style={{ color: "grey", marginTop: "64px", marginBottom: "64px" }}>
          <Section text="LinkedIn recommendation" />
          <div style={contentStyles}>
            {recommendations.map(quote => (
              <QuoteCard
                image={quote.image}
                text={quote.text}
                position={quote.position}
              />
            ))}
          </div>
        </div>
        <div style={{ color: "grey", marginTop: "64px", marginBottom: "64px" }}>
          <Section text="Said about me" />
          <div style={contentStyles}>
            {quotes.map(quote => (
              <QuoteCard
                image={quote.image}
                text={quote.text}
                position={quote.position}
              />
            ))}
          </div>
        </div>

        <div style={{ color: "grey", marginTop: "64px", marginBottom: "64px" }}>
          <Section text="When in doubt, try harder" />
        </div>
        {/*<div style={{ color: "grey", marginTop: "64px", marginBottom: "64px" }}>
          <Section text="Employment references" />
          <div style={contentStyles}>
            {references.map(quote => (
              <QuoteCard
                image={quote.image}
                text={quote.text}
                position={quote.position}
              />
            ))}
          </div>
        </div>*/}
      </Layout>
    </div>
  )
}
