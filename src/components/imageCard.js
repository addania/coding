import React from "react"
import "./imageCard.css"

export const ImageCard = ({ title, tech, src, link }) => {
  return (
    <div className="image-card">
      <h5 style={{ color: "white" }}>{title}</h5>
      <p style={{ color: "white", fontSize: "14px", textAlign: "center" }}>
        {tech}
      </p>
      <div style={{ width: "450px" }}>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={title} />
          </a>
        ) : (
          <img src={src} alt={title} />
        )}
      </div>
    </div>
  )
}
