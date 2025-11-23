export default function ConsensusFrameworkSVG({ className = "w-full h-64" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <defs>
        <linearGradient id="consensusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#consensusGradient)" />
      
      {/* Title */}
      <text x="300" y="30" textAnchor="middle" className="fill-slate-700 text-sm font-bold">
        Automated Consensus Framework
      </text>
      
      {/* Network nodes in a circle */}
      <g>
        {/* Center consensus node */}
        <circle cx="300" cy="200" r="45" fill="white" stroke="#8b5cf6" strokeWidth="3" />
        <circle cx="300" cy="200" r="35" fill="#8b5cf6" opacity="0.2" />
        <text x="300" y="195" textAnchor="middle" className="fill-slate-700 text-xs font-bold">Consensus</text>
        <text x="300" y="210" textAnchor="middle" className="fill-slate-600 text-[10px]">Layer</text>
        
        {/* Surrounding peer nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x = 300 + Math.cos(rad) * 120
          const y = 200 + Math.sin(rad) * 120
          
          return (
            <g key={i}>
              {/* Connection line */}
              <line
                x1="300"
                y1="200"
                x2={x}
                y2={y}
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="4,4"
                opacity="0.4"
              />
              
              {/* Peer node */}
              <circle cx={x} cy={y} r="25" fill="white" stroke="#3b82f6" strokeWidth="2" />
              <circle cx={x} cy={y} r="18" fill="#3b82f6" opacity="0.2" />
              <text x={x} y={y + 4} textAnchor="middle" className="fill-slate-700 text-[10px] font-semibold">
                Peer {i + 1}
              </text>
            </g>
          )
        })}
      </g>
      
      {/* UDP packets flowing */}
      <g>
        {/* Animated packet 1 */}
        <g opacity="0.8">
          <rect x="0" y="0" width="12" height="8" rx="2" fill="#3b82f6">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M 420 200 L 345 200"
            />
          </rect>
          <text x="6" y="6" textAnchor="middle" className="fill-white text-[6px] font-bold">
            UDP
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M 420 200 L 345 200"
            />
          </text>
        </g>
        
        {/* Animated packet 2 */}
        <g opacity="0.8">
          <rect x="0" y="0" width="12" height="8" rx="2" fill="#8b5cf6">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              begin="1s"
              path="M 300 80 L 300 155"
            />
          </rect>
          <text x="6" y="6" textAnchor="middle" className="fill-white text-[6px] font-bold">
            UDP
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              begin="1s"
              path="M 300 80 L 300 155"
            />
          </text>
        </g>
        
        {/* Animated packet 3 */}
        <g opacity="0.8">
          <rect x="0" y="0" width="12" height="8" rx="2" fill="#3b82f6">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              begin="2s"
              path="M 235 270 L 280 220"
            />
          </rect>
          <text x="6" y="6" textAnchor="middle" className="fill-white text-[6px] font-bold">
            UDP
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              begin="2s"
              path="M 235 270 L 280 220"
            />
          </text>
        </g>
      </g>
      
      {/* Consensus indicators */}
      <g>
        {/* Checkmarks appearing in rotation */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = i * 60
          const rad = (angle * Math.PI) / 180
          const x = 300 + Math.cos(rad) * 120
          const y = 200 + Math.sin(rad) * 120
          
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="6" fill="#10b981" opacity="0">
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="6s"
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <path
                d={`M ${x - 3} ${y} L ${x - 1} ${y + 2} L ${x + 3} ${y - 2}`}
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="6s"
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          )
        })}
      </g>
      
      {/* Bottom labels */}
      <g className="fill-slate-600 text-[10px]">
        <text x="150" y="370" textAnchor="middle">Low Latency</text>
        <text x="300" y="370" textAnchor="middle">Fault Tolerant</text>
        <text x="450" y="370" textAnchor="middle">Auto-scaling</text>
        
        <circle cx="140" cy="365" r="2" fill="#10b981" />
        <circle cx="290" cy="365" r="2" fill="#10b981" />
        <circle cx="440" cy="365" r="2" fill="#10b981" />
      </g>
      
      {/* Protocol label */}
      <text x="300" y="390" textAnchor="middle" className="fill-slate-500 text-[9px]">
        UDP-based P2P Protocol with Automated Consensus
      </text>
    </svg>
  )
}
