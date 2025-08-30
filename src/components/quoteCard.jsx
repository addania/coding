import React from "react"

export const QuoteCard = ({ image, text, position }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
        minWidth: "200px",
        padding: "24px",
        fontSize: "14px",
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
          maxWidth: "305px",
          textAlign: "justify",
        }}
      >
        {text}
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "right",
          marginTop: "12px",
          maxWidth: "305px",
        }}
      >
        {position}
      </div>
    </div>
  )
}
