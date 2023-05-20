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
import { Polygons } from "../components/animationEffects/Polygons"

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
  zIndex: 1,
  margin: 0,
  marginRight: -1,
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
        left: 0,
        top: "15%",
        transform: `translateY(-15%)`,
        transform: `translateX(-100%)`,
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
    <div id="container" style={containerStyle}>
      <div id="tsparticles">
        <Polygons style={{ width: "100%", height: "300px" }} />
      </div>
      <ContactForm />
      <img src={mia3} alt="Portrait Image" style={imageStyle} />
    </div>
  </Layout>
)
