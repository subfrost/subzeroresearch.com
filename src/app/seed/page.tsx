"use client"

import Link from "next/link"
import SubzeroLogo from "@/components/SubzeroLogo"
import FrostBackdrop from "@/components/FrostBackdrop"

// Custom SVG: Attack Surface Comparison
const AttackSurfaceSVG = () => (
  <svg viewBox="0 0 800 300" className="w-full h-auto">
    <defs>
      <linearGradient id="dangerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#dc2626" stopOpacity="0.6"/>
      </linearGradient>
      <linearGradient id="safeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#16a34a" stopOpacity="0.6"/>
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    {/* Traditional Network - Left Side */}
    <g transform="translate(50, 30)">
      <text x="150" y="0" textAnchor="middle" className="fill-slate-700 text-lg font-bold">Traditional Network</text>

      {/* Server with open ports */}
      <rect x="100" y="40" width="100" height="80" rx="8" fill="url(#dangerGrad)" stroke="#dc2626" strokeWidth="2"/>
      <text x="150" y="70" textAnchor="middle" className="fill-white text-sm font-medium">AI Agent</text>
      <text x="150" y="90" textAnchor="middle" className="fill-white text-xs opacity-80">Server</text>

      {/* Open ports - danger indicators */}
      {[
        { x: 95, y: 50, label: ":22" },
        { x: 95, y: 70, label: ":80" },
        { x: 95, y: 90, label: ":443" },
        { x: 95, y: 110, label: ":8080" },
        { x: 205, y: 50, label: ":3000" },
        { x: 205, y: 70, label: ":5432" },
        { x: 205, y: 90, label: ":6379" },
        { x: 205, y: 110, label: ":11434" },
      ].map((port, i) => (
        <g key={i}>
          <circle cx={port.x} cy={port.y} r="12" fill="#fef2f2" stroke="#ef4444" strokeWidth="2"/>
          <text x={port.x} y={port.y + 4} textAnchor="middle" className="fill-red-600 text-[8px] font-mono">{port.label}</text>
        </g>
      ))}

      {/* Attack arrows */}
      <g className="animate-pulse">
        <path d="M30 60 L85 55" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)"/>
        <path d="M30 100 L85 105" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)"/>
        <path d="M270 60 L220 55" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)"/>
        <path d="M270 100 L220 105" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)"/>
      </g>

      {/* Attacker icons */}
      <text x="15" y="65" className="text-lg">🤖</text>
      <text x="15" y="105" className="text-lg">👾</text>
      <text x="270" y="65" className="text-lg">🦠</text>
      <text x="270" y="105" className="text-lg">💀</text>

      {/* Vulnerability count */}
      <rect x="100" y="140" width="100" height="30" rx="4" fill="#fef2f2" stroke="#ef4444"/>
      <text x="150" y="160" textAnchor="middle" className="fill-red-600 text-sm font-bold">8 Open Ports</text>

      <text x="150" y="195" textAnchor="middle" className="fill-red-500 text-xs">Scannable • Exploitable</text>
      <text x="150" y="210" textAnchor="middle" className="fill-red-500 text-xs">Spoofable IDs</text>
    </g>

    {/* VS Divider */}
    <g transform="translate(380, 100)">
      <circle cx="20" cy="30" r="25" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2"/>
      <text x="20" y="36" textAnchor="middle" className="fill-slate-500 text-sm font-bold">VS</text>
    </g>

    {/* subtun0 Network - Right Side */}
    <g transform="translate(450, 30)">
      <text x="150" y="0" textAnchor="middle" className="fill-slate-700 text-lg font-bold">subtun0 Network</text>

      {/* Secure node */}
      <rect x="100" y="40" width="100" height="80" rx="8" fill="url(#safeGrad)" stroke="#16a34a" strokeWidth="2" filter="url(#glow)"/>
      <text x="150" y="70" textAnchor="middle" className="fill-white text-sm font-medium">AI Agent</text>
      <text x="150" y="90" textAnchor="middle" className="fill-white text-xs opacity-80">Ed25519 ID</text>

      {/* Shield icons around */}
      <g opacity="0.7">
        <text x="85" y="55" className="text-base">🛡️</text>
        <text x="85" y="85" className="text-base">🔐</text>
        <text x="85" y="115" className="text-base">🛡️</text>
        <text x="200" y="55" className="text-base">🔐</text>
        <text x="200" y="85" className="text-base">🛡️</text>
        <text x="200" y="115" className="text-base">🔐</text>
      </g>

      {/* Blocked attack arrows */}
      <g opacity="0.3">
        <path d="M30 60 L70 55" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4"/>
        <path d="M30 100 L70 105" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4"/>
        <path d="M270 60 L230 55" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4"/>
        <path d="M270 100 L230 105" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4"/>
        <text x="50" y="45" className="fill-slate-400 text-[10px]">blocked</text>
        <text x="240" y="45" className="fill-slate-400 text-[10px]">blocked</text>
      </g>

      {/* Security count */}
      <rect x="100" y="140" width="100" height="30" rx="4" fill="#f0fdf4" stroke="#22c55e"/>
      <text x="150" y="160" textAnchor="middle" className="fill-green-600 text-sm font-bold">0 Open Ports</text>

      <text x="150" y="195" textAnchor="middle" className="fill-green-600 text-xs">Nothing to scan</text>
      <text x="150" y="210" textAnchor="middle" className="fill-green-600 text-xs">Cryptographic identity</text>
    </g>

    {/* Arrow markers */}
    <defs>
      <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#ef4444"/>
      </marker>
    </defs>
  </svg>
)

// Custom SVG: Stack Architecture Diagram
const StackArchitectureSVG = () => (
  <svg viewBox="0 0 600 400" className="w-full h-auto">
    <defs>
      <linearGradient id="layer4" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#a78bfa"/>
      </linearGradient>
      <linearGradient id="layer3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6"/>
        <stop offset="100%" stopColor="#60a5fa"/>
      </linearGradient>
      <linearGradient id="layer2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06b6d4"/>
        <stop offset="100%" stopColor="#22d3ee"/>
      </linearGradient>
      <linearGradient id="layer1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981"/>
        <stop offset="100%" stopColor="#34d399"/>
      </linearGradient>
    </defs>

    {/* Layer 4: Applications */}
    <g transform="translate(50, 20)">
      <rect x="0" y="0" width="500" height="70" rx="12" fill="url(#layer4)" opacity="0.9"/>
      <text x="250" y="28" textAnchor="middle" className="fill-white text-base font-bold">AI Agents / LLM Inference / Multi-Agent Systems</text>
      <text x="250" y="50" textAnchor="middle" className="fill-white text-sm opacity-80">Any TCP/IP application works unchanged</text>

      {/* App icons */}
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="50" height="25" rx="4" fill="white" opacity="0.2"/>
        <text x="25" y="17" textAnchor="middle" className="fill-white text-xs">LangChain</text>
      </g>
      <g transform="translate(90, 25)">
        <rect x="0" y="0" width="50" height="25" rx="4" fill="white" opacity="0.2"/>
        <text x="25" y="17" textAnchor="middle" className="fill-white text-xs">CrewAI</text>
      </g>
      <g transform="translate(360, 25)">
        <rect x="0" y="0" width="50" height="25" rx="4" fill="white" opacity="0.2"/>
        <text x="25" y="17" textAnchor="middle" className="fill-white text-xs">Ollama</text>
      </g>
      <g transform="translate(420, 25)">
        <rect x="0" y="0" width="50" height="25" rx="4" fill="white" opacity="0.2"/>
        <text x="25" y="17" textAnchor="middle" className="fill-white text-xs">vLLM</text>
      </g>
    </g>

    {/* Arrow down */}
    <path d="M300 95 L300 115" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowGray)"/>

    {/* Layer 3: subtun0 */}
    <g transform="translate(50, 120)">
      <rect x="0" y="0" width="500" height="90" rx="12" fill="url(#layer3)" stroke="#2563eb" strokeWidth="2"/>
      <text x="250" y="25" textAnchor="middle" className="fill-white text-lg font-bold">subtun0 — User-Space IP Stack</text>

      {/* Feature boxes */}
      <g transform="translate(20, 40)">
        <rect x="0" y="0" width="105" height="35" rx="6" fill="white" opacity="0.15"/>
        <text x="52" y="15" textAnchor="middle" className="fill-white text-xs font-medium">Zero Open Ports</text>
        <text x="52" y="28" textAnchor="middle" className="fill-white text-[10px] opacity-80">Nothing to scan</text>
      </g>
      <g transform="translate(135, 40)">
        <rect x="0" y="0" width="105" height="35" rx="6" fill="white" opacity="0.15"/>
        <text x="52" y="15" textAnchor="middle" className="fill-white text-xs font-medium">Ed25519 Identity</text>
        <text x="52" y="28" textAnchor="middle" className="fill-white text-[10px] opacity-80">Unforgeable</text>
      </g>
      <g transform="translate(250, 40)">
        <rect x="0" y="0" width="105" height="35" rx="6" fill="white" opacity="0.15"/>
        <text x="52" y="15" textAnchor="middle" className="fill-white text-xs font-medium">E2E Encryption</text>
        <text x="52" y="28" textAnchor="middle" className="fill-white text-[10px] opacity-80">Noise protocol</text>
      </g>
      <g transform="translate(365, 40)">
        <rect x="0" y="0" width="115" height="35" rx="6" fill="white" opacity="0.15"/>
        <text x="57" y="15" textAnchor="middle" className="fill-white text-xs font-medium">NAT Traversal</text>
        <text x="57" y="28" textAnchor="middle" className="fill-white text-[10px] opacity-80">DCUtR hole-punch</text>
      </g>
    </g>

    {/* Arrow down */}
    <path d="M300 215 L300 235" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowGray)"/>

    {/* Layer 2: subp2p */}
    <g transform="translate(50, 240)">
      <rect x="0" y="0" width="500" height="60" rx="12" fill="url(#layer2)"/>
      <text x="250" y="25" textAnchor="middle" className="fill-white text-base font-bold">subp2p — P2P Networking Layer</text>
      <text x="250" y="45" textAnchor="middle" className="fill-white text-sm opacity-80">libp2p • Kademlia DHT • GossipSub • Circuit Relay v2</text>
    </g>

    {/* Arrow down */}
    <path d="M300 305 L300 325" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowGray)"/>

    {/* Layer 1: Transport */}
    <g transform="translate(50, 330)">
      <rect x="0" y="0" width="500" height="55" rx="12" fill="url(#layer1)"/>
      <text x="250" y="23" textAnchor="middle" className="fill-white text-base font-bold">Encrypted Transport</text>
      <text x="250" y="42" textAnchor="middle" className="fill-white text-sm opacity-80">QUIC • WebTransport • HTTP/3 • Browser-Native</text>
    </g>

    {/* Arrow marker */}
    <defs>
      <marker id="arrowGray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8"/>
      </marker>
    </defs>
  </svg>
)

// Custom SVG: Market Opportunity
const MarketOpportunitySVG = () => (
  <svg viewBox="0 0 500 280" className="w-full h-auto">
    <defs>
      <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6"/>
        <stop offset="100%" stopColor="#1d4ed8"/>
      </linearGradient>
    </defs>

    {/* Title */}
    <text x="250" y="25" textAnchor="middle" className="fill-slate-700 text-base font-bold">Enterprise AI Spending Projection</text>

    {/* Y-axis */}
    <line x1="60" y1="50" x2="60" y2="220" stroke="#cbd5e1" strokeWidth="1"/>
    <text x="30" y="55" textAnchor="middle" className="fill-slate-500 text-xs">$200B+</text>
    <text x="30" y="100" textAnchor="middle" className="fill-slate-500 text-xs">$150B</text>
    <text x="30" y="145" textAnchor="middle" className="fill-slate-500 text-xs">$100B</text>
    <text x="30" y="190" textAnchor="middle" className="fill-slate-500 text-xs">$50B</text>
    <text x="30" y="220" textAnchor="middle" className="fill-slate-500 text-xs">$0</text>

    {/* X-axis */}
    <line x1="60" y1="220" x2="460" y2="220" stroke="#cbd5e1" strokeWidth="1"/>

    {/* Bars */}
    {[
      { year: "2024", height: 40, value: "$50B" },
      { year: "2025", height: 60, value: "$75B" },
      { year: "2026", height: 85, value: "$100B" },
      { year: "2027", height: 115, value: "$140B" },
      { year: "2028", height: 140, value: "$170B" },
      { year: "2030", height: 170, value: "$200B+" },
    ].map((item, i) => (
      <g key={i} transform={`translate(${80 + i * 65}, 0)`}>
        <rect
          x="0"
          y={220 - item.height}
          width="45"
          height={item.height}
          rx="4"
          fill="url(#barGrad)"
          opacity={0.7 + i * 0.05}
        />
        <text x="22" y={210 - item.height} textAnchor="middle" className="fill-blue-600 text-[10px] font-bold">{item.value}</text>
        <text x="22" y="238" textAnchor="middle" className="fill-slate-600 text-xs">{item.year}</text>
      </g>
    ))}

    {/* Trend line */}
    <path
      d="M102 180 Q200 160 235 135 Q280 105 300 85 Q350 55 430 50"
      stroke="#ef4444"
      strokeWidth="2"
      strokeDasharray="5,3"
      fill="none"
    />

    {/* Key stats */}
    <g transform="translate(60, 250)">
      <rect x="0" y="0" width="120" height="25" rx="4" fill="#dbeafe"/>
      <text x="60" y="17" textAnchor="middle" className="fill-blue-700 text-[10px] font-medium">50%+ enterprises</text>
    </g>
    <g transform="translate(190, 250)">
      <rect x="0" y="0" width="130" height="25" rx="4" fill="#fef3c7"/>
      <text x="65" y="17" textAnchor="middle" className="fill-amber-700 text-[10px] font-medium">deploy agents by 2028</text>
    </g>
    <g transform="translate(330, 250)">
      <rect x="0" y="0" width="120" height="25" rx="4" fill="#fee2e2"/>
      <text x="60" y="17" textAnchor="middle" className="fill-red-700 text-[10px] font-medium">#1 blocker: Security</text>
    </g>
  </svg>
)

// Custom SVG: Funding Structure
const FundingStructureSVG = () => (
  <svg viewBox="0 0 600 200" className="w-full h-auto">
    <defs>
      <linearGradient id="seedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6"/>
        <stop offset="100%" stopColor="#1d4ed8"/>
      </linearGradient>
    </defs>

    <g transform="translate(175, 20)">
      <rect x="0" y="0" width="250" height="160" rx="12" fill="url(#seedGrad)" opacity="0.1" stroke="#3b82f6" strokeWidth="2"/>
      <rect x="0" y="0" width="250" height="40" rx="12" fill="url(#seedGrad)"/>
      <text x="125" y="27" textAnchor="middle" className="fill-white text-base font-bold">Seed Round</text>

      <text x="125" y="70" textAnchor="middle" className="fill-blue-700 text-sm">Target raise</text>

      <text x="125" y="100" textAnchor="middle" className="fill-slate-800 text-2xl font-bold">$2.25M</text>
      <text x="125" y="118" textAnchor="middle" className="fill-slate-600 text-sm">@ $18M Valuation</text>

      <text x="125" y="145" textAnchor="middle" className="fill-blue-600 text-xs font-medium">✓ Building the AI security layer</text>
    </g>
  </svg>
)

// Use of Funds SVG
const UseOfFundsSVG = () => (
  <svg viewBox="0 0 500 300" className="w-full h-auto">
    <defs>
      <linearGradient id="eng" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6"/>
        <stop offset="100%" stopColor="#60a5fa"/>
      </linearGradient>
      <linearGradient id="infra" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#a78bfa"/>
      </linearGradient>
      <linearGradient id="devrel" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981"/>
        <stop offset="100%" stopColor="#34d399"/>
      </linearGradient>
      <linearGradient id="security" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f59e0b"/>
        <stop offset="100%" stopColor="#fbbf24"/>
      </linearGradient>
    </defs>

    {/* Title */}
    <text x="250" y="25" textAnchor="middle" className="fill-slate-700 text-base font-bold">Use of Funds</text>

    {/* Bars */}
    <g transform="translate(50, 50)">
      {/* Engineering */}
      <rect x="0" y="0" width="300" height="45" rx="8" fill="url(#eng)"/>
      <text x="15" y="28" className="fill-white text-sm font-bold">Engineering (60%)</text>
      <text x="285" y="28" textAnchor="end" className="fill-white text-sm">$1.35M</text>
      <text x="320" y="28" className="fill-slate-600 text-xs">2-3 Senior Rust/Systems Engineers</text>

      {/* Infrastructure */}
      <rect x="0" y="60" width="150" height="45" rx="8" fill="url(#infra)"/>
      <text x="15" y="88" className="fill-white text-sm font-bold">Infra (20%)</text>
      <text x="135" y="88" textAnchor="end" className="fill-white text-sm">$450K</text>
      <text x="165" y="88" className="fill-slate-600 text-xs">Managed relay network, cloud</text>

      {/* DevRel */}
      <rect x="0" y="120" width="75" height="45" rx="8" fill="url(#devrel)"/>
      <text x="15" y="148" className="fill-white text-sm font-bold">DevRel (10%)</text>
      <text x="95" y="148" className="fill-slate-600 text-xs">Docs, community, evangelism</text>

      {/* Security */}
      <rect x="0" y="180" width="75" height="45" rx="8" fill="url(#security)"/>
      <text x="15" y="208" className="fill-white text-sm font-bold">Security (10%)</text>
      <text x="95" y="208" className="fill-slate-600 text-xs">Audits, compliance, pen testing</text>
    </g>
  </svg>
)

export default function SeedPage() {
  return (
    <main className="relative bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <FrostBackdrop />

        {/* Navigation */}
        <nav className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <SubzeroLogo className="w-10 h-10 text-blue-400" />
            <span className="text-xl font-bold">Subzero Research</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-blue-300 bg-blue-900/50 px-3 py-1 rounded-full">Seed Round</span>
          </div>
        </nav>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Raising $2.25M Seed
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Secure Infrastructure for<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                the Agentic AI Era
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
              Zero-attack-surface networking for AI agents. Drop-in compatible.
              Already shipping.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-white">$18M</div>
                <div className="text-sm text-slate-400">Valuation</div>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-white">$2.25M</div>
                <div className="text-sm text-slate-400">Raising</div>
              </div>
              <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold text-green-400">Live</div>
                <div className="text-sm text-slate-400">Product Status</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" className="w-full">
            <path d="M0 50C360 100 720 0 1080 50C1260 75 1380 50 1440 50V100H0V50Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Problem</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AI agents inherit all vulnerabilities of traditional networking—now exploitable
              at superhuman speed by LLM-powered attackers.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-red-50 rounded-2xl p-8 border border-slate-200">
            <AttackSurfaceSVG />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-slate-900 mb-2">LLMs Generate Exploits</h3>
              <p className="text-slate-600 text-sm">GPT-4 can write working exploit code. Vulnerability scanning is now automated at scale.</p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-slate-900 mb-2">Agents Expose APIs</h3>
              <p className="text-slate-600 text-sm">Multi-agent systems communicate over HTTP. Every endpoint is an attack vector.</p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-slate-900 mb-2">Attack Speed &gt; Defense</h3>
              <p className="text-slate-600 text-sm">AI compresses attack timelines from weeks to seconds. Traditional security can't keep up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Solution: subtun0</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A complete user-space IP stack with zero attack surface.
              Any application works unchanged.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <StackArchitectureSVG />
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Zero Ports</h3>
              <p className="text-slate-600 text-sm">Nothing to scan or exploit</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Crypto Identity</h3>
              <p className="text-slate-600 text-sm">Ed25519 = unforgeable</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">E2E Encrypted</h3>
              <p className="text-slate-600 text-sm">Relays can't read traffic</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Drop-In</h3>
              <p className="text-slate-600 text-sm">No code changes needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI-Native Use Cases</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🤝", title: "Multi-Agent Coordination", desc: "Secure agent-to-agent communication with cryptographic identity verification" },
              { icon: "🔒", title: "Private Inference", desc: "Run LLMs without exposing prompts or responses to network observers" },
              { icon: "📚", title: "Secure RAG", desc: "Query vector databases over zero-attack-surface mesh networks" },
              { icon: "💰", title: "Agent Commerce", desc: "P2P payments between agents with threshold signatures" },
              { icon: "🧠", title: "Federated Learning", desc: "Encrypted gradient sharing across distributed training" },
              { icon: "🏥", title: "HIPAA AI", desc: "Healthcare AI that meets compliance without network exposure" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Traction</h2>
            <p className="text-xl text-slate-600">Working product. Not a whitepaper.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center border-2 border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">✓</div>
              <div className="text-lg font-bold text-slate-900">Product Live</div>
              <div className="text-sm text-slate-600">subtun0 operational</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border-2 border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">OSS</div>
              <div className="text-lg font-bold text-slate-900">Open Source</div>
              <div className="text-sm text-slate-600">libp2p contributions</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border-2 border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">4+</div>
              <div className="text-lg font-bold text-slate-900">Platforms</div>
              <div className="text-sm text-slate-600">Native, Android, WASM</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border-2 border-amber-200">
              <div className="text-4xl font-bold text-amber-600 mb-2">$</div>
              <div className="text-lg font-bold text-slate-900">Revenue</div>
              <div className="text-sm text-slate-600">HIPAA AI consulting</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Market Opportunity</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <MarketOpportunitySVG />
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every AI agent needs secure networking. We're building the foundational
              infrastructure layer—analogous to cloud security in the 2010s.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Team</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                RP
              </div>
              <h3 className="text-xl font-bold text-slate-900">Raymond Pulver</h3>
              <div className="text-blue-600 font-medium mb-3">Founder</div>
              <p className="text-slate-600 text-sm">
                Distributed systems engineer. libp2p contributor.
                Built libp2p-webtransport-sys from scratch in pure Rust.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                GL
              </div>
              <h3 className="text-xl font-bold text-slate-900">Gabe Lee</h3>
              <div className="text-purple-600 font-medium mb-3">Founder</div>
              <p className="text-slate-600 text-sm">
                Decade in management consulting. AI and growth strategy
                for private equity and global financial institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Raise</h2>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 mb-8">
            <FundingStructureSVG />
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <UseOfFundsSVG />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building the Security Layer for AI
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            The window for foundational AI infrastructure is now.
            Let's talk.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/kungfuflex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors"
            >
              Contact Founders
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="https://github.com/subfrost"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              View Code
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <SubzeroLogo className="w-8 h-8 text-slate-500" />
            <span className="text-sm">Subzero Research Inc. — Delaware C Corp — Est. March 2024</span>
          </div>
          <div className="text-sm">
            <a href="https://subzeroresearch.com" className="hover:text-white transition-colors">subzeroresearch.com</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
