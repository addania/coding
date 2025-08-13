import React from "react"
import "./videoCard.css"

export const VideoCard = ({ title, tech, src }) => {
  return (
    <div className="video-card">
      <div className="video-card-header">
        <div className="video-title">{title}</div>
        <div className="video-tech">{tech}</div>
      </div>
      <div className="video-container">
        <video controls>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
