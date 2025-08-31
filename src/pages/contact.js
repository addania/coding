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

const ContactItem = ({ icon, text, link, isDesktop }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "white" }}
    >
      <FontAwesomeIcon icon={icon} style={{ color: "white" }} />
      <span
        style={{
          paddingLeft: "16px",
          fontSize: `${isDesktop ? "20px" : "14px"}`,
        }}
      >
        {text}
      </span>
    </a>
  )
}

const ContactForm = ({ isDesktop }) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        position: "absolute",
        top: `${isDesktop ? "15%" : "50%"}`,
        left: "5%",
        transform: `translateY(-15%) translateX(-50%)`,
        width: `${isDesktop ? "50%" : "80%"}`,
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
        <h5
          style={{ color: "white", fontSize: `${isDesktop ? "25px" : "16px"}` }}
        >
          Feel free to contact me:
        </h5>
        <ContactItem
          icon={faLinkedin}
          text="mia-schwabova"
          link={"https://www.linkedin.com/in/mia-schwabova-333b12168"}
          isDesktop={isDesktop}
        />
        <ContactItem
          icon={faInstagram}
          text="_sportsoul"
          link="https://www.instagram.com/_sportsoul"
          isDesktop={isDesktop}
        />
        <ContactItem
          icon={faGithub}
          text="addania"
          link="https://www.github.com/addania"
          isDesktop={isDesktop}
        />
        <ContactItem
          icon={faEnvelope}
          text="zabacinka@yahoo.com"
          link="mailto:zabacinka@yahoo.com"
          isDesktop={isDesktop}
        />
      </div>
    </div>
  )
}

export default () => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth > 768

  return (
    <Layout>
      <div style={containerStyle}>
        {isDesktop && (
          <div style={polygonStyle}>
            <Polygons />
          </div>
        )}
        <div style={{ flex: "1", flexGrow: 1 }}>
          <img
            src={mia3}
            alt="Portrait Image"
            style={{ ...imageStyle, width: "100%", justifySelf: "center" }}
          />
        </div>
        <ContactForm isDesktop={isDesktop} />
      </div>
    </Layout>
  )
}
