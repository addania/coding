import React from "react"
import Layout from "../components/layout.js"

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import mia1 from "../images/mia1.jpg"

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

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <Layout>
        <div style={containerStyle}>
          <Tag title="Frontend Developer" position="30%" timer={2} />
          <Tag title="Passionate about coding" position="50%" timer={2.5} />
          <Tag title="Experienced Team Lead" position="70%" timer={3} />
          <img src={mia1} alt="Portrait Image" style={imageStyle} />
        </div>
      </Layout>
    </div>
  )
}
