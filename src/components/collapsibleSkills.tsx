import React, { useState } from "react"
import { Skills } from "../components/skills"

export const CollapsibleSkills = () => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(prev => !prev)

  return (
    <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
      <button
        onClick={toggleExpanded}
        style={{
          marginBottom: "12px",
          padding: "8px 16px",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          justifyContent: "flex-start",
        }}
      >
        {expanded ? "Collapse skills ▲" : "Show all skills ▼"}
      </button>
      <div
        style={{
          maxHeight: expanded ? "2000px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.8s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "flex-start",
          }}
        >
          <Skills />
        </div>
      </div>
    </div>
  )
}
