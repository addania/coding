import React from "react"

export const QuoteCard = ({ image, text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrowth: 1,
        alignItems: "center",
        minWidth: "200px",
        padding: "24px",
      }}
    >
      <img
        src={image}
        width="70px"
        alt={image}
        style={{ marginBottom: "8px" }}
      />
      <div
        style={{
          display: "flex",
          maxWidth: "200px",
          textAlign: "justify",
        }}
      >
        {text}
      </div>
    </div>
  )
}
