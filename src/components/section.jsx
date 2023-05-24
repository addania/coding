import React from "react"

export const Section = ({ text }) => {
  return (
    <div
      style={{
        fontSize: "32px",
        display: "flex",
        justifyContent: "center",
        marginBottom: "24px",
        background: "rgba(0, 0, 0, 0.8)",
        color: "white",
        borderRadius: "10px",
      }}
    >
      {text}
    </div>
  )
}
