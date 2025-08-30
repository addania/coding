import React, { useRef } from "react"

const skillsList = [
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
  "GraphQL",
  "Cypress",
  "Unreal Engine",
]

export const BouncingSkills = () => {
  const containerRef = useRef(null)

  const allSkills = [...skillsList.slice(0, 7), ...skillsList]
  const shuffled = allSkills
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  const selected = []
  const used = new Set()
  const visibleCount = 6 + Math.floor(Math.random() * 5)
  for (let i = 0; i < shuffled.length && selected.length < visibleCount; i++) {
    if (!used.has(shuffled[i])) {
      selected.push(shuffled[i])
      used.add(shuffled[i])
    }
  }

  const slotHeight = 30
  const maxSlots = 10
  const usedSlots = new Set()

  const skillsWithTop = selected.map((skill, idx) => {
    let slot
    do {
      slot = Math.floor(Math.random() * maxSlots)
    } while (usedSlots.has(slot))
    usedSlots.add(slot)
    const top = slot * slotHeight
    return { skill, top }
  })

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "300px",
        overflow: "hidden",
        backgroundColor: "#6c6c6c",
        marginTop: "10px",
        marginBottom: "10px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: "8px",
      }}
    >
      {skillsWithTop.map(({ skill, top }, idx) => {
        const size = 14 + Math.random() * 18
        const duration = 16 + Math.random() * 8
        const delay = idx * 1.6

        return (
          <span
            key={`${skill}-${idx}`}
            style={{
              position: "absolute",
              top: `${top}px`,
              left: "100%",
              fontSize: `${size}px`,
              color: "white",
              whiteSpace: "nowrap",
              animation: `bounceRightLeft ${duration}s linear ${delay}s infinite`,
            }}
          >
            {skill}
          </span>
        )
      })}
      <style>{`
          @keyframes bounceRightLeft {
            0% { transform: translateX(0) translateY(0); }
            25% { transform: translateX(-25vw) translateY(-5px); }
            50% { transform: translateX(-50vw) translateY(5px); }
            75% { transform: translateX(-75vw) translateY(-5px); }
            100% { transform: translateX(-100vw) translateY(0); }
          }
        `}</style>
    </div>
  )
}
