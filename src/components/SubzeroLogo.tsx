export default function SubzeroLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon - representing distributed network */}
      <path
        d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      
      {/* Inner hexagon */}
      <path
        d="M50 15 L75 30 L75 70 L50 85 L25 70 L25 30 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      
      {/* Snowflake/crystal center */}
      <g opacity="1">
        {/* Center hexagon */}
        <path
          d="M50 35 L60 42.5 L60 57.5 L50 65 L40 57.5 L40 42.5 Z"
          fill="currentColor"
          opacity="0.3"
        />
        
        {/* Six crystalline rays */}
        <line x1="50" y1="50" x2="50" y2="25" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="50" x2="71.65" y2="37.5" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="50" x2="71.65" y2="62.5" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="50" x2="50" y2="75" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="50" x2="28.35" y2="62.5" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="50" x2="28.35" y2="37.5" stroke="currentColor" strokeWidth="2" />
        
        {/* Small diamond nodes at ray endpoints */}
        <circle cx="50" cy="25" r="2" fill="currentColor" />
        <circle cx="71.65" cy="37.5" r="2" fill="currentColor" />
        <circle cx="71.65" cy="62.5" r="2" fill="currentColor" />
        <circle cx="50" cy="75" r="2" fill="currentColor" />
        <circle cx="28.35" cy="62.5" r="2" fill="currentColor" />
        <circle cx="28.35" cy="37.5" r="2" fill="currentColor" />
      </g>
      
      {/* Network connection lines (representing P2P) */}
      <g opacity="0.4" strokeDasharray="2,2">
        <line x1="25" y1="30" x2="15" y2="27.5" stroke="currentColor" strokeWidth="1" />
        <line x1="75" y1="30" x2="85" y2="27.5" stroke="currentColor" strokeWidth="1" />
        <line x1="75" y1="70" x2="85" y2="72.5" stroke="currentColor" strokeWidth="1" />
        <line x1="25" y1="70" x2="15" y2="72.5" stroke="currentColor" strokeWidth="1" />
      </g>
    </svg>
  )
}
