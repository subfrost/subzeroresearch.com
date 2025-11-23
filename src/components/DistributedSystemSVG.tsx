export default function DistributedSystemSVG({ className = "w-full h-64" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="600" height="400" fill="#fafafa" />
      
      {/* Data flow lines */}
      <g opacity="0.4">
        <path
          d="M 100 200 Q 200 150, 300 200"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        <path
          d="M 300 200 Q 400 250, 500 200"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        <path
          d="M 100 200 Q 150 280, 300 300"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        <path
          d="M 300 300 Q 450 280, 500 200"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
      </g>
      
      {/* Left cluster (Data sources) */}
      <g>
        <rect x="50" y="170" width="100" height="60" rx="8" fill="white" stroke="#cbd5e1" strokeWidth="2" />
        <text x="100" y="195" textAnchor="middle" className="fill-slate-700 text-xs font-semibold">Data Source</text>
        <text x="100" y="210" textAnchor="middle" className="fill-slate-500 text-[10px]">Input Layer</text>
        
        {/* Icons representing data */}
        <circle cx="75" cy="205" r="3" fill="#3b82f6" />
        <circle cx="90" cy="205" r="3" fill="#3b82f6" />
        <circle cx="105" cy="205" r="3" fill="#3b82f6" />
        <circle cx="120" cy="205" r="3" fill="#3b82f6" />
      </g>
      
      {/* Center processing nodes */}
      <g>
        {/* Upper processor */}
        <rect x="250" y="170" width="100" height="60" rx="8" fill="white" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="300" cy="200" r="15" fill="#3b82f6" opacity="0.2" />
        <text x="300" y="195" textAnchor="middle" className="fill-slate-700 text-xs font-semibold">Processing</text>
        <text x="300" y="210" textAnchor="middle" className="fill-slate-500 text-[10px]">Node A</text>
        
        {/* Lower processor */}
        <rect x="250" y="270" width="100" height="60" rx="8" fill="white" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="300" cy="300" r="15" fill="#3b82f6" opacity="0.2" />
        <text x="300" y="295" textAnchor="middle" className="fill-slate-700 text-xs font-semibold">Processing</text>
        <text x="300" y="310" textAnchor="middle" className="fill-slate-500 text-[10px]">Node B</text>
        
        {/* Sync line between processors */}
        <line x1="300" y1="230" x2="300" y2="270" stroke="#64748b" strokeWidth="1" strokeDasharray="2,2" />
        <text x="310" y="252" className="fill-slate-400 text-[9px]">sync</text>
      </g>
      
      {/* Right output */}
      <g>
        <rect x="450" y="170" width="100" height="60" rx="8" fill="white" stroke="#10b981" strokeWidth="2" />
        <text x="500" y="195" textAnchor="middle" className="fill-slate-700 text-xs font-semibold">Consensus</text>
        <text x="500" y="210" textAnchor="middle" className="fill-slate-500 text-[10px]">Output Layer</text>
        
        {/* Checkmark */}
        <path
          d="M 485 205 L 492 212 L 505 195"
          stroke="#10b981"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      
      {/* Annotations */}
      <g className="fill-slate-600 text-xs">
        <text x="300" y="30" textAnchor="middle" className="font-semibold text-sm">Distributed Processing Pipeline</text>
        <text x="300" y="365" textAnchor="middle" className="text-[10px] fill-slate-500">
          Parallel Processing • Fault Tolerance • Horizontal Scalability
        </text>
      </g>
      
      {/* Processing indicators */}
      <g>
        <circle cx="280" cy="200" r="2" fill="#3b82f6">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="290" cy="200" r="2" fill="#3b82f6">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="200" r="2" fill="#3b82f6">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  )
}
