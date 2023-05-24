import React from "react"

export const JobCard = ({ image, text, company, year }) => {
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

      <div>{company}</div>
      <div>{year}</div>
      {text}
    </div>
  )
}
