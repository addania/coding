import React from "react"
import Layout from "../components/layout.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import mia1 from "../images/mia1.jpg"
import { Polygons } from "../components/animationEffects/polygons"
import { BouncingSkills } from "../components/animationEffects/bouncingSkills"

import { quotes } from "../constants/quotes"
import { recommendations } from "../constants/recommendations"
import { jobs } from "../constants/jobs"
import { QuoteCard } from "../components/quoteCard"
import { JobCard } from "../components/jobCard"
import { Section } from "../components/section"
import { Skills } from "../components/skills"
import { CollapsibleSkills } from "../components/collapsibleSkills"

const containerStyle = {
  display: "flex",
  width: "100%",
  height: "768px",
  position: "relative",
}

const imageStyle = {
  objectFit: "cover",
  objectPosition: "right",
  width: "100%",
  height: "100%",
}

const contentStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "12px",
  alignItems: "start",
}

const Tag = ({ title, position, timer }) => (
  <div
    className="tag"
    style={{
      borderRadius: "10px",
      position: "absolute",
      top: position,
      left: "5%",
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

export default ({ data }) => {
  return (
    <Layout>
      <div style={containerStyle}>
        <div style={{ flex: 1, position: "relative" }}>
          <Polygons />
        </div>
        <div style={{ flex: 1 }}>
          <img src={mia1} alt="Portrait Image" style={imageStyle} />
        </div>

        <Tag title="Senior Frontend Engineer" position="50%" timer={2} />
        <Tag title="Passionate about coding" position="70%" timer={2.5} />
        <Tag title="Experienced Team Lead" position="90%" timer={3} />
      </div>
      <div style={{ color: "grey", marginTop: "64px", marginBottom: "64px" }}>
        <Section text="Professional Experience" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "12px",
          }}
        >
          {jobs.map(job => (
            <JobCard
              key={job.position}
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
        <div style={{ marginTop: "20px" }} />
        <BouncingSkills />

        <CollapsibleSkills />
      </div>

      <div style={{ color: "grey", marginTop: "64px", marginBottom: "64px" }}>
        <Section text="LinkedIn recommendation" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "12px",
          }}
        >
          {recommendations.map(quote => (
            <QuoteCard
              key={quote.position}
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
    </Layout>
  )
}
