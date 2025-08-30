import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout.js"
import mia3 from "../images/mia3.png"
import { Polygons } from "../components/animationEffects/polygons"

const containerStyle = {
  display: "flex",
  width: "100%",
  height: "80vh",
  position: "relative",
}

const imageStyle = {
  flex: "1",
  height: "100%",
  objectFit: "cover",
  objectPosition: "right",
  zIndex: 1,
}

const polygonStyle = {
  flex: "1",
  position: "relative",
}

const ContactIcon = ({ icon, text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "white" }}
    >
      <FontAwesomeIcon icon={icon} style={{ color: "white" }} />
      <span style={{ paddingLeft: "16px" }}>{text}</span>
    </a>
  )
}

const ContactForm = () => {
  return (
    <div
      style={{
        borderRadius: "10px",
        position: "absolute",
        // left: 0,
        top: "15%",
        left: "05%",
        transform: `translateY(-15%) translateX(-50%)`,
        width: "50%",
        height: "30%",
        background: "rgba(0, 0, 0, 0.8)",
        zIndex: 2,
        animation: `slide-in 3s forwards`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          flexDirection: "column",
          padding: "24px",
        }}
      >
        <h5 style={{ color: "white" }}>Feel free to contact me:</h5>
        <ContactIcon
          icon={faLinkedin}
          text="mia-schwabova"
          link={"https://www.linkedin.com/in/mia-schwabova-333b12168"}
        />
        <ContactIcon
          icon={faInstagram}
          text="_sportsoul"
          link="https://www.instagram.com/_sportsoul"
        />
        <ContactIcon
          icon={faGithub}
          text="addania"
          link="https://www.github.com/addania"
        />
        <ContactIcon
          icon={faEnvelope}
          text="zabacinka@yahoo.com"
          link="mailto:zabacinka@yahoo.com"
        />
      </div>
    </div>
  )
}

export default () => (
  <Layout>
    <div style={containerStyle}>
      {/* Polygons on the left */}
      <div style={polygonStyle}>
        <Polygons />
      </div>

      {/* Image on the right */}
      <div style={{ flex: "1" }}>
        <img src={mia3} alt="Portrait Image" style={imageStyle} />
      </div>

      {/* Contact Form overlay */}
      <ContactForm />
    </div>
  </Layout>
)
