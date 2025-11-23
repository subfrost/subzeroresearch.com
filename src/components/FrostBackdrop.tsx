"use client"

import React, { useEffect, useState } from "react"

const Snowflake1 = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2v20M12 2l3 3M12 2l-3 3M12 22l3-3M12 22l-3-3M2 12h20M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l-3 3M4.93 4.93l14.14 14.14M4.93 4.93l3-1.5M4.93 4.93l1.5 3M19.07 19.07l-3 1.5M19.07 19.07l-1.5-3M19.07 4.93L4.93 19.07M19.07 4.93l-3-1.5M19.07 4.93l-1.5 3M4.93 19.07l3-1.5M4.93 19.07l1.5-3"
      stroke="#eff6ff"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
)

const Snowflake2 = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" stroke="#eff6ff" strokeWidth="1" strokeLinecap="round" />
  </svg>
)

const Snowflake3 = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L6 8v8l6 4 6-4V8l-6-4zM12 4v8M12 20v-8M6 8l6 4M18 8l-6 4M6 16l6-4M18 16l-6-4" stroke="#eff6ff" strokeWidth="1" strokeLinecap="round" />
  </svg>
)

const Snowflake4 = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v20M4 12h16M12 2l8 10M12 2l-8 10M12 22l8-10M12 22l-8-10" stroke="#eff6ff" strokeWidth="1" strokeLinecap="round" />
  </svg>
)

const Snowflake5 = () => (
  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="#eff6ff" strokeWidth="1" fill="none" />
    <circle cx="12" cy="12" r="2" fill="#eff6ff" />
  </svg>
)

const Snowflake6 = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 20h16L12 2z" stroke="#eff6ff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M12 2v12M4 20l8-6M20 20l-8-6" stroke="#eff6ff" strokeWidth="1" strokeLinecap="round" />
  </svg>
)

const snowflakeTypes = [Snowflake1, Snowflake2, Snowflake3, Snowflake4, Snowflake5, Snowflake6]

interface FrostBackdropProps {
  reducedOpacity?: boolean
}

const FrostBackdrop: React.FC<FrostBackdropProps> = ({ reducedOpacity = false }) => {
  const [snowflakes, setSnowflakes] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const snowflakeCount = 100
    const flakes = []
    
    for (let i = 0; i < snowflakeCount; i++) {
      const shouldBeTransparent = reducedOpacity && i % 2 === 0
      const SnowflakeComponent = snowflakeTypes[Math.floor(Math.random() * snowflakeTypes.length)]
      const rotation = Math.random() * 360
      const animationDuration = 30 + Math.random() * 100
      const size = 0.35 + Math.random() * 0.5
      
      const style: React.CSSProperties = {
        position: "absolute",
        left: `${Math.random() * 100}%`,
        top: `-50px`,
        animation: `fall ${animationDuration}s linear infinite`,
        animationDelay: `${-Math.random() * animationDuration}s`,
        transform: `scale(${size}) rotate(${rotation}deg)`,
        opacity: shouldBeTransparent ? 0 : 1,
      }

      flakes.push(
        <div key={i} style={style}>
          <SnowflakeComponent />
        </div>,
      )
    }
    setSnowflakes(flakes)
  }, [reducedOpacity])

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{snowflakes}</div>
}

export default FrostBackdrop
