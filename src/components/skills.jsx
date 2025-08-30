import React, { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const skillsData = {
  "Frontend & Frameworks": [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "React Query",
    "React Hook Forms",
    "React Router",
    "Storybook",
    "Redux",
    "Gatsby",
    "T3 App",
    "Tailwind CSS",
    "Bootstrap",
  ],
  "Backend / Data Tools": ["GraphQL", "Prisma", "tRPC", "DBT"],
  "Testing & QA": ["Cypress", "Unit & Integration Testing", "Storybook"],
  "Design & Visualization": [
    "Figma",
    "Highcharts",
    "Adobe Photoshop",
    "Illustrator",
    "After Effects",
  ],
  "Game Development": ["Unreal Engine"],
  Collaboration: [
    "Git",
    "GitHub",
    "GitLab",
    "Jira",
    "Notion",
    "Miro",
    "Slack",
    "Asana",
    "Google Suite",
    "Microsoft Office",
  ],
  Other: ["RegEx", "Driving license (cat. B)"],
}

/*export const Skills = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        width: "100%",
      }}
    >
      {Object.entries(skillsData).map(([category, items]) => (
        <div
          key={category}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <h4
            style={{
              margin: 0,
              padding: "8px 12px",
              fontSize: "14px",
              backgroundColor: "#4682B4",
              color: "white",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            {category}
          </h4>
          <div
            style={{
              flexGrow: 1,
              background: "white",
              border: "1px solid #ddd",
              borderTop: "none",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              padding: "12px 16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                color: "grey",
                fontSize: "14px",
              }}
            >
              {items.map(skill => (
                <li key={skill} style={{ marginBottom: "6px" }}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
*/

export const Skills = () => {
  const [allExpanded, setAllExpanded] = useState(false)
  const maxVisible = 5

  const toggleAll = () => setAllExpanded(prev => !prev)

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        width: "100%",
        textAlign: "left",
      }}
    >
      {Object.entries(skillsData).map(([category, items]) => {
        const visibleItems = allExpanded ? items : items.slice(0, maxVisible)
        const remaining = items.length - maxVisible

        return (
          <div
            key={category}
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h4
              style={{
                margin: 0,
                padding: "10px 12px",
                fontSize: "14px",
                backgroundColor: "#8b8b8b",
                color: "white",
              }}
            >
              {category}
            </h4>

            <div
              style={{
                flexGrow: 1,
                background: "white",
                border: "1px solid #ddd",
                borderTop: "none",
                padding: "12px 16px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                  color: "grey",
                  fontSize: "14px",
                }}
              >
                {visibleItems.map(skill => (
                  <li key={skill} style={{ marginBottom: "6px" }}>
                    {skill}
                  </li>
                ))}
              </ul>

              {!allExpanded && remaining > 0 && (
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "grey",
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                    onClick={toggleAll}
                  >
                    +{remaining} more
                  </span>
                  <button
                    onClick={toggleAll}
                    style={{
                      padding: "4px 8px",
                      fontSize: "12px",
                      border: "none",
                      background: "rgba(0, 0, 0, 0.8)",
                      color: "white",
                      borderRadius: "5px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Show More <FaChevronDown />
                  </button>
                </div>
              )}
              {allExpanded && items.length > maxVisible && (
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    onClick={toggleAll}
                    style={{
                      padding: "4px 8px",
                      fontSize: "12px",
                      border: "none",
                      backgroundColor: "rgba(0, 0, 0, 0.8)",
                      color: "white",
                      borderRadius: "5px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Show Less <FaChevronUp />
                  </button>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
