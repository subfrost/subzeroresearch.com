export default function P2PNetworkSVG({ className = "w-full h-64" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background grid */}
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="600" height="400" fill="url(#grid)" />
      
      {/* Connection lines (in background) */}
      <g opacity="0.3">
        <line x1="150" y1="100" x2="300" y2="200" stroke="#3b82f6" strokeWidth="2" />
        <line x1="150" y1="100" x2="450" y2="100" stroke="#3b82f6" strokeWidth="2" />
        <line x1="300" y1="200" x2="450" y2="100" stroke="#3b82f6" strokeWidth="2" />
        <line x1="300" y1="200" x2="450" y2="300" stroke="#3b82f6" strokeWidth="2" />
        <line x1="450" y1="100" x2="450" y2="300" stroke="#3b82f6" strokeWidth="2" />
        <line x1="150" y1="100" x2="150" y2="300" stroke="#3b82f6" strokeWidth="2" />
        <line x1="150" y1="300" x2="300" y2="200" stroke="#3b82f6" strokeWidth="2" />
        <line x1="150" y1="300" x2="450" y2="300" stroke="#3b82f6" strokeWidth="2" />
      </g>
      
      {/* Nodes */}
      <g>
        {/* Node 1 */}
        <circle cx="150" cy="100" r="30" fill="#f8fafc" stroke="#3b82f6" strokeWidth="3" />
        <circle cx="150" cy="100" r="20" fill="#3b82f6" opacity="0.3" />
        <circle cx="150" cy="100" r="8" fill="#3b82f6" />
        
        {/* Node 2 */}
        <circle cx="450" cy="100" r="30" fill="#f8fafc" stroke="#3b82f6" strokeWidth="3" />
        <circle cx="450" cy="100" r="20" fill="#3b82f6" opacity="0.3" />
        <circle cx="450" cy="100" r="8" fill="#3b82f6" />
        
        {/* Node 3 (center) */}
        <circle cx="300" cy="200" r="35" fill="#f8fafc" stroke="#3b82f6" strokeWidth="3" />
        <circle cx="300" cy="200" r="25" fill="#3b82f6" opacity="0.3" />
        <circle cx="300" cy="200" r="10" fill="#3b82f6" />
        
        {/* Node 4 */}
        <circle cx="150" cy="300" r="30" fill="#f8fafc" stroke="#3b82f6" strokeWidth="3" />
        <circle cx="150" cy="300" r="20" fill="#3b82f6" opacity="0.3" />
        <circle cx="150" cy="300" r="8" fill="#3b82f6" />
        
        {/* Node 5 */}
        <circle cx="450" cy="300" r="30" fill="#f8fafc" stroke="#3b82f6" strokeWidth="3" />
        <circle cx="450" cy="300" r="20" fill="#3b82f6" opacity="0.3" />
        <circle cx="450" cy="300" r="8" fill="#3b82f6" />
      </g>
      
      {/* Data packets (animated indicators) */}
      <g>
        <circle cx="225" cy="150" r="4" fill="#3b82f6" opacity="0.8">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M0,0 L75,50"
          />
        </circle>
        <circle cx="375" cy="150" r="4" fill="#3b82f6" opacity="0.8">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M0,0 L0,100"
          />
        </circle>
        <circle cx="300" cy="100" r="4" fill="#3b82f6" opacity="0.8">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M0,0 L-150,0"
          />
        </circle>
      </g>
      
      {/* Labels */}
      <text x="300" y="30" textAnchor="middle" className="fill-slate-600 text-sm font-semibold">
        Peer-to-Peer Network
      </text>
      <text x="300" y="380" textAnchor="middle" className="fill-slate-500 text-xs">
        Decentralized • No Single Point of Failure • Censorship Resistant
      </text>
    </svg>
  )
}
